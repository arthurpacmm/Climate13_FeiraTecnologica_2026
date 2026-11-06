const fragments = [
    "src/core/front/chrome.html",
    "src/modules/hero/front/hero.html",
    "src/modules/project/front/project.html",
    "src/modules/timeline/front/timeline.html",
    "src/modules/ods/front/ods.html",
    "src/modules/indicators/front/indicators.html",
    "src/modules/impact/front/impact.html",
    "src/modules/brasil/front/brasil.html",
    "src/modules/solutions/front/solutions.html",
    "src/modules/technology/front/technology.html",
    "src/modules/quiz/front/quiz.html",
    "src/modules/city-game/front/city-game.html",
    "src/modules/team/front/team.html",
    "src/modules/final/front/final.html",
    "src/modules/footer/front/footer.html",
    "src/modules/technology/front/technology-modal.html",
    "src/modules/impact/front/impact-modal.html",
    "src/modules/climate-monitor/front/climate-monitor.html"
];

const scripts = [
    "src/core/back/loader.js",
    "src/core/back/navbar.js",
    "src/core/back/reveal.js",
    "src/modules/timeline/back/timeline.js",
    "src/modules/indicators/back/indicators.js",
    "src/modules/ods/back/ods.js",
    "src/modules/impact/back/impact-modal.js",
    "src/modules/brasil/back/brasil.js",
    "src/modules/technology/back/technology-modal.js",
    "src/modules/quiz/back/quiz.js",
    "src/modules/city-game/back/city-game-data.js",
    "src/modules/city-game/back/city-game.js",
    "src/modules/climate-monitor/api/open-meteo.js",
    "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js",
    "src/modules/climate-monitor/back/monitor.js",
    "src/modules/technology/back/tech-cards.js",
    "src/core/back/mobile-menu.js",
    "src/core/back/easter-egg.js",
    "src/core/back/keyboard.js",
    "src/core/back/cursor-glow.js",
    "src/core/back/i18n.js"
];

const assetVersion = "20260924-team-final";
const navigationEntry = performance.getEntriesByType?.("navigation")?.[0];
const shouldRestoreHash = Boolean(window.location.hash && navigationEntry?.type !== "reload");

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

function withVersion(path) {
    if (path.startsWith("http")) {
        return path;
    }

    return `${path}?v=${assetVersion}`;
}

async function loadFragment(path) {
    const response = await fetch(withVersion(path));

    if (!response.ok) {
        throw new Error(`Nao foi possivel carregar ${path}`);
    }

    return response.text();
}

function loadScript(path) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        const external = path.startsWith("http");
        const timeout = setTimeout(() => {
            const error = new Error(`Tempo esgotado ao carregar ${path}`);

            if (external) {
                console.warn(error);
                resolve();
                return;
            }

            reject(error);
        }, external ? 7000 : 3000);

        script.src = withVersion(path);
        script.async = false;
        script.onload = () => {
            clearTimeout(timeout);
            resolve();
        };
        script.onerror = () => {
            clearTimeout(timeout);

            const error = new Error(`Nao foi possivel carregar ${path}`);

            if (external) {
                console.warn(error);
                resolve();
                return;
            }

            reject(error);
        };

        document.body.appendChild(script);
    });
}

try {
    const html = await Promise.all(fragments.map(loadFragment));

    document.body.innerHTML = html.join("\n");

    for (const script of scripts) {
        await loadScript(script);
    }

    document.getElementById("loader")?.classList.add("hidden");

    if (shouldRestoreHash) {
        document
            .querySelector(window.location.hash)
            ?.scrollIntoView({ block: "start" });
    } else {
        window.scrollTo(0, 0);

        if (window.location.hash) {
            history.replaceState(null, "", window.location.pathname + window.location.search);
        }
    }
} catch (error) {
    console.error(error);

    document.body.innerHTML = `
        <main class="fragment-error">
            <h1>Erro ao carregar o site</h1>
            <p>Abra este projeto por um servidor local para carregar os modulos internos.</p>
        </main>
    `;
}

