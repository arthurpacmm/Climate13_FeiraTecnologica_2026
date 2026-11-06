const signalHeat = document.getElementById("signalHeat");
const signalsLive = document.getElementById("signalsLive");

const signalCities = [
    { name: "São Paulo", lat: -23.55, lon: -46.63 },
    { name: "Cairo", lat: 30.04, lon: 31.24 },
    { name: "Mumbai", lat: 19.08, lon: 72.88 }
];

async function loadClimateSignals() {
    if (!signalHeat || !signalsLive) return;

    try {
        const temps = await Promise.all(signalCities.map(async city => {
            const params = new URLSearchParams({
                latitude: city.lat,
                longitude: city.lon,
                current: "temperature_2m",
                timezone: "auto",
                temperature_unit: "celsius"
            });
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
            if (!response.ok) throw new Error("Open-Meteo indisponível");
            const data = await response.json();
            return `${city.name} ${Math.round(data.current.temperature_2m)}°C`;
        }));

        signalHeat.textContent = temps.join(" / ");
        signalsLive.textContent = `Dados ao vivo atualizados às ${new Date().toLocaleTimeString("pt-BR")}.`;
    } catch (error) {
        signalHeat.textContent = "dados indisponíveis";
        signalsLive.textContent = "Sinais climáticos carregados; dados ao vivo indisponíveis no momento.";
    }
}

loadClimateSignals();
