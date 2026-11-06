/* ================= LINHA DO TEMPO CLIMÁTICA ================= */

const futureSlider = document.getElementById("futureSlider");
const timelineYear = document.getElementById("timelineYear");
const timelineTitle = document.getElementById("timelineTitle");
const timelineText = document.getElementById("timelineText");
const timelineTags = document.getElementById("timelineTags");
const timelineStatus = document.getElementById("timelineStatus");
const timelineHudYear = document.getElementById("timelineHudYear");
const timelineHudStatus = document.getElementById("timelineHudStatus");
const timelineIndex = document.getElementById("timelineIndex");
const timelinePlay = document.getElementById("timelinePlay");
const timelineConsole = document.getElementById("futureTimeline");
const timelineGallery = document.getElementById("timelineGallery");
const timelineImage = document.getElementById("timelineImage");
const timelineImageLabel = document.getElementById("timelineImageLabel");
const timelineMetric = document.getElementById("timelineMetric");
const timelineMarkers = document.getElementById("timelineMarkers");

const timelineStart = 1492;
const timelineEnd = 2100;
const fallbackTimelineImage =
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=90";

const timelineData = [
    {
        year: 1492,
        status: "EXPANSÃO",
        title: "Chegada europeia às Américas abre a troca colombiana",
        text: "A partir de 1492, colonização, novas rotas marítimas e transferência de plantas, animais, pessoas e doenças mudaram solos, florestas e paisagens em escala planetária.",
        tags: ["COLONIZAÇÃO", "ROTAS", "FLORESTAS"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Columbus_Taking_Possession.jpg/1280px-Columbus_Taking_Possession.jpg",
        imageLabel: "TROCA COLOMBIANA",
        metric: "INÍCIO DE UMA ECONOMIA EXTRATIVA GLOBAL"
    },
    {
        year: 1602,
        status: "COMÉRCIO",
        title: "Companhia das Índias Orientais organiza comércio global",
        text: "A VOC ajudou a consolidar redes comerciais permanentes. Especiarias, madeira, metais e monoculturas passaram a circular em escala maior, pressionando ecossistemas coloniais.",
        tags: ["VOC", "COMÉRCIO", "MONOCULTURA"],
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/07/02/10/the-amsterdam-a-replica-voc-ship-moored-in-amsterdams-oosterdok.-credit-het-scheepvaartmuseum-amsterdam.jpg",
        imageLabel: "ROTAS MERCANTIS",
        metric: "RECURSOS NATURAIS VIRAM MERCADORIA GLOBAL"
    },
    {
        year: 1712,
        status: "CARVÃO",
        title: "Motor atmosférico de Newcomen acelera minas de carvão",
        text: "O motor de Thomas Newcomen bombeava água de minas e tornou mais viável extrair carvão. Foi um passo decisivo para a mecanização movida por combustíveis fósseis.",
        tags: ["VAPOR", "CARVÃO", "MINERAÇÃO"],
        image: "https://www.futuremuseum.co.uk/files/objects/2Fmedia2F65302F4939.jpg",
        imageLabel: "MÁQUINA A VAPOR",
        metric: "ENERGIA FÓSSIL ENTRA NA MECANIZAÇÃO"
    },
    {
        year: 1769,
        status: "INDÚSTRIA",
        title: "Patente de Watt melhora a máquina a vapor",
        text: "A melhoria de James Watt tornou motores a vapor mais eficientes. Fábricas, transporte e produção cresceram junto com a queima de carvão e a poluição urbana.",
        tags: ["WATT", "FÁBRICAS", "EMISSÕES"],
        image: "https://watchesbysjx.com/wp-content/uploads/2020/06/industrial-revolution-factory-4.jpg",
        imageLabel: "REVOLUÇÃO INDUSTRIAL",
        metric: "PRODUÇÃO EM ESCALA INDUSTRIAL"
    },
    {
        year: 1859,
        status: "PETRÓLEO",
        title: "Poço Drake inaugura a era moderna do petróleo",
        text: "A perfuração comercial na Pensilvânia abriu caminho para motores, plásticos, fertilizantes e transporte baseados em petróleo, uma das maiores fontes de emissões modernas.",
        tags: ["PETRÓLEO", "ENERGIA", "INDÚSTRIA"],
        image: "https://images.imagerenderer.com/images-medium-large-5/first-commercial-us-oil-well-1859-science-source.jpg",
        imageLabel: "POÇO DRAKE",
        metric: "EXPANSÃO DOS COMBUSTÍVEIS FÓSSEIS"
    },
    {
        year: 1882,
        status: "ELETRICIDADE",
        title: "Pearl Street Station inicia redes elétricas urbanas",
        text: "A usina de Thomas Edison em Nova York mostrou o poder da eletricidade centralizada. O conforto urbano cresceu, mas muitas redes dependeram de carvão, óleo e gás.",
        tags: ["ELETRICIDADE", "CIDADES", "CARVÃO"],
        image: "https://images.techinsider.ru/upload/img_cache/818/81812bbe437f1b4557161b90dc07c03b_cropped_510x781.webp",
        imageLabel: "PEARL STREET",
        metric: "ENERGIA DISPONÍVEL O TEMPO TODO"
    },
    {
        year: 1913,
        status: "MASSA",
        title: "Linha de montagem da Ford acelera o automóvel",
        text: "A produção em massa do Model T reduziu custos e popularizou carros. Estradas, combustíveis, pneus e cidades espalhadas ampliaram impactos ambientais.",
        tags: ["AUTOMÓVEL", "TRANSPORTE", "PETRÓLEO"],
        image: "https://i0.wp.com/deo.vvg.mybluehost.me/website_b13042cd/wp-content/uploads/2021/12/1500004048707.png?ssl=1&w=1200",
        imageLabel: "LINHA DE MONTAGEM",
        metric: "MOBILIDADE BASEADA EM COMBUSTÍVEIS"
    },
    {
        year: 1931,
        status: "SOLO",
        title: "Dust Bowl mostra o risco de degradar o solo",
        text: "Seca, vento e agricultura intensiva transformaram grandes áreas das planícies dos EUA em tempestades de poeira, expondo a fragilidade do solo mal protegido.",
        tags: ["SECA", "SOLO", "AGRICULTURA"],
        image: "https://s.yimg.com/ny/api/res/1.2/QJrP.tr0KYdMIxtZkDhW7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD05Mjk-/https%3A/media.zenfs.com/en/business_insider_articles_888/68ddd85f2f8f82f2811dfb13ffe4ea3d",
        imageLabel: "TEMPESTADE DE POEIRA",
        metric: "USO DO SOLO VIRA RISCO CLIMÁTICO"
    },
    {
        year: 1950,
        status: "ACELERAÇÃO",
        title: "Grande Aceleração multiplica consumo e resíduos",
        text: "Depois de 1950, energia, plástico, fertilizantes, concreto, transporte e consumo cresceram rapidamente. Muitos indicadores ambientais subiram junto.",
        tags: ["CONSUMO", "PLÁSTICO", "RESÍDUOS"],
        image: "https://imgs.gvm.com.tw/upload/gallery/20171116/41073_03.jpg",
        imageLabel: "PLÁSTICO E CONSUMO",
        metric: "IMPACTOS HUMANOS CRESCEM EM VELOCIDADE"
    },
    {
        year: 1972,
        status: "ALERTA",
        title: "Conferência de Estocolmo leva ambiente à política global",
        text: "A primeira grande conferência ambiental da ONU colocou poluição, conservação e desenvolvimento no centro da agenda internacional.",
        tags: ["ONU", "POLÍTICA", "AMBIENTE"],
        image: "https://dam.media.un.org/AssetLink/s6tdfsg7dkmhhdy2f56gq6r8602bpw3v",
        imageLabel: "ESTOCOLMO 1972",
        metric: "MEIO AMBIENTE ENTRA NA AGENDA GLOBAL"
    },
    {
        year: 1986,
        status: "RISCO",
        title: "Chernobyl revela impactos ambientais de longo prazo",
        text: "O acidente nuclear mostrou como falhas tecnológicas podem gerar contaminação, deslocamentos humanos, risco à saúde e efeitos ecológicos duradouros.",
        tags: ["ENERGIA", "RISCO", "CONTAMINAÇÃO"],
        image: "https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AwjS-2hbePy1HHt388jQLHQ.jpeg",
        imageLabel: "CHERNOBYL",
        metric: "TECNOLOGIA TAMBÉM PRECISA DE SEGURANÇA"
    },
    {
        year: 1992,
        status: "CLIMA",
        title: "Rio-92 consolida clima e biodiversidade",
        text: "A Cúpula da Terra no Rio de Janeiro fortaleceu acordos sobre clima, biodiversidade e desenvolvimento sustentável, influenciando décadas de negociações.",
        tags: ["RIO-92", "CLIMA", "BIODIVERSIDADE"],
        image: "https://imageio.forbes.com/specials-images/imageserve/6364efc15f3bba8415da32d2/0x0.jpg?fit=bounds&format=jpg&height=900&width=1600",
        imageLabel: "CÚPULA DA TERRA",
        metric: "SUSTENTABILIDADE GANHA LINGUAGEM POLÍTICA"
    },
    {
        year: 2006,
        status: "TRANSICAO",
        title: "Solar e eólica entram em crescimento acelerado",
        text: "A queda de custos, novos incentivos e preocupação climática fizeram renováveis ganhar escala, abrindo uma alternativa real a matrizes baseadas em carbono.",
        tags: ["SOLAR", "EÓLICA", "ENERGIA"],
        image: "https://www.publicsectorexecutive.com/sites/pse/files/styles/banner/public/2026-02/Wind%20turbine%20and%20solar%20farm.jpg?itok=xumc1DKt",
        imageLabel: "ENERGIA RENOVÁVEL",
        metric: "TECNOLOGIAS LIMPAS GANHAM ESCALA"
    },
    {
        year: 2015,
        status: "ACORDO",
        title: "Acordo de Paris define o limite de 1,5 graus",
        text: "Na COP21, países adotaram o Acordo de Paris, mirando limitar o aquecimento global e fortalecer adaptação, financiamento e metas nacionais.",
        tags: ["PARIS", "COP21", "1,5C"],
        image: "https://image.cnbcfm.com/api/v1/image/103205508-GettyImages-499273792.jpg?h=1200&v=1448948614&w=1200",
        imageLabel: "ACORDO DE PARIS",
        metric: "META GLOBAL CONTRA DANOS IRREVERSÍVEIS"
    },
    {
        year: 2023,
        status: "RECORDE",
        title: "Recordes recentes confirmam a urgência climática",
        text: "Temperaturas recordes, extremos de chuva, secas, incêndios e aquecimento dos oceanos mostram que a janela de ação está ficando menor.",
        tags: ["RECORDES", "OCEANOS", "EXTREMOS"],
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1800&q=90",
        imageLabel: "EVENTOS EXTREMOS",
        metric: "SINAIS CLIMÁTICOS MAIS FREQUENTES"
    },
    {
        year: 2100,
        status: "CENÁRIOS",
        title: "O clima de 2100 depende das escolhas deste século",
        text: "O fim do século pode ter cidades resilientes e energia limpa, ou impactos maiores sobre água, comida, saúde e biodiversidade. O resultado ainda está aberto.",
        tags: ["FUTURO", "CENÁRIOS", "ADAPTAÇÃO"],
        image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&w=1800&q=90",
        imageLabel: "CENÁRIOS 2100",
        metric: "O FUTURO AINDA ESTÁ EM DISPUTA"
    }
];

let timelinePlaying = false;
let timelineTimer = null;

function getTimelineItem(value) {
    return timelineData.reduce((closest, item) => {
        const currentDistance = Math.abs(item.year - value);
        const closestDistance = Math.abs(closest.year - value);
        return currentDistance < closestDistance ? item : closest;
    });
}

function getTimelineThumbImage(image) {
    if (image.includes("images.unsplash.com")) {
        return image.replace("w=1800", "w=700").replace("q=90", "q=80");
    }
    return image;
}

function renderTimelineGallery() {
    timelineGallery.innerHTML = timelineData.map((item, index) => `
        <button class="timeline-thumb${index === 0 ? " active" : ""}" data-timeline="${item.year}" type="button">
            <img src="${getTimelineThumbImage(item.image)}" alt="${item.imageLabel}" loading="lazy">
            <span>${item.year}</span>
        </button>
    `).join("");
}

function renderTimelineMarkers() {
    timelineMarkers.innerHTML = timelineData.map(item => {
        const left = ((item.year - timelineStart) / (timelineEnd - timelineStart)) * 100;
        return `<button class="timeline-marker" style="left:${left}%" data-timeline="${item.year}" type="button" aria-label="${item.year}">${item.year}</button>`;
    }).join("");
}

function updateTimeline(value) {
    const item = getTimelineItem(Number(value));
    const index = timelineData.indexOf(item);

    futureSlider.value = item.year;
    timelineConsole.classList.add("timeline-changing");

    setTimeout(() => {
        timelineConsole.classList.remove("timeline-changing");
    }, 420);

    timelineYear.textContent = item.year;
    timelineTitle.textContent = item.title;
    timelineText.textContent = item.text;
    timelineStatus.textContent = `${item.year} // ${item.status}`;
    timelineHudYear.textContent = item.year;
    timelineHudStatus.textContent = item.status;
    timelineIndex.textContent = `${String(index + 1).padStart(2, "0")} / ${String(timelineData.length).padStart(2, "0")}`;
    timelineTags.innerHTML = item.tags.map(tag => `<span>${tag}</span>`).join("");
    timelineImageLabel.textContent = item.imageLabel;
    timelineMetric.textContent = item.metric;

    timelineImage.style.opacity = ".2";
    timelineImage.alt = item.imageLabel;
    timelineImage.onerror = () => {
        timelineImage.src = fallbackTimelineImage;
    };
    timelineImage.onload = () => {
        timelineImage.style.opacity = "1";
    };
    timelineImage.src = item.image;

    document.querySelectorAll("[data-timeline]").forEach(button => {
        button.classList.toggle("active", Number(button.dataset.timeline) === item.year);
    });

    timelineGallery
        .querySelector(".timeline-thumb.active")
        ?.scrollIntoView({
            inline: "center",
            block: "nearest",
            behavior: "smooth"
        });

    window.CLIMATE13_I18N?.refresh(timelineConsole);
    window.CLIMATE13_I18N?.refresh(timelineGallery);
}

function handleTimelineButtonClick(event) {
    const button = event.target.closest("[data-timeline]");
    if (button) updateTimeline(button.dataset.timeline);
}

renderTimelineGallery();
renderTimelineMarkers();

futureSlider.min = timelineStart;
futureSlider.max = timelineEnd;
futureSlider.step = 1;
futureSlider.value = timelineStart;

futureSlider.addEventListener("input", () => updateTimeline(futureSlider.value));
timelineGallery.addEventListener("click", handleTimelineButtonClick);
timelineMarkers.addEventListener("click", handleTimelineButtonClick);

timelinePlay.addEventListener("click", () => {
    timelinePlaying = !timelinePlaying;
    timelinePlay.textContent = timelinePlaying ? "❚❚" : "▶";

    clearInterval(timelineTimer);

    if (timelinePlaying) {
        timelineTimer = setInterval(() => {
            const currentIndex = timelineData.indexOf(getTimelineItem(Number(futureSlider.value)));
            const nextItem = timelineData[(currentIndex + 1) % timelineData.length];
            updateTimeline(nextItem.year);
        }, 3600);
    }
});

updateTimeline(timelineStart);
