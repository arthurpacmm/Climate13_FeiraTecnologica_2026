/* ================= MODAIS DE TECNOLOGIA ================= */

const techModal = document.getElementById("techModal");
const techModalClose = document.getElementById("techModalClose");
const techModalNumber = document.getElementById("techModalNumber");
const techModalTitle = document.getElementById("techModalTitle");
const techModalText = document.getElementById("techModalText");
const techModalImage = document.getElementById("techModalImage");
const techModalList = document.getElementById("techModalList");

const techData = {
    ia: { number:"01", title:"Inteligência Artificial", text:"A Inteligência Artificial ajuda a transformar dados climáticos em previsões, alertas e padrões compreensíveis. Em um projeto como este, ela mostra como tecnologia pode apoiar decisões sem substituir a análise humana.", image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=90", points:["Organização de grandes volumes de dados climáticos.","Identificação de padrões em imagens, sensores e séries históricas.","Apoio a previsões, mapas de risco e comunicação científica."] },
    satelites: { number:"02", title:"Satélites", text:"Satélites observam a Terra continuamente e permitem acompanhar florestas, oceanos, atmosfera, nuvens, queimadas e temperatura da superfície. Eles tornam visíveis mudanças que seriam difíceis de medir só em campo.", image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=90", points:["Monitoramento de desmatamento e mudanças no território.","Observação de temperatura, nuvens, oceanos e vegetação.","Base para alertas, pesquisas, mapas e políticas públicas."] },
    solar: { number:"03", title:"Energia Solar", text:"A energia solar gera eletricidade sem queimar combustíveis fósseis. Quando combinada com eficiência energética e planejamento, ajuda a reduzir emissões e torna escolas, casas e cidades mais sustentáveis.", image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=90", points:["Geração renovável em telhados, escolas, empresas e usinas.","Redução da dependência de fontes mais poluentes.","Integração com baterias, redes inteligentes e economia de energia."] },
    cidades: { number:"04", title:"Cidades Inteligentes", text:"Cidades inteligentes usam sensores, dados e sistemas digitais para planejar melhor água, energia, mobilidade, drenagem e alertas. A tecnologia ajuda a transformar riscos climáticos em decisões práticas.", image:"https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=90", points:["Sensores para chuva, calor, tráfego e infraestrutura.","Mapas de risco para enchentes, deslizamentos e ilhas de calor.","Serviços públicos mais rápidos, eficientes e resilientes."] }
};

let activeTechKey = "";

function renderTechModal(key) {
    const data = techData[key];
    if (!data) return;

    techModalNumber.textContent = data.number;
    techModalTitle.textContent = data.title;
    techModalText.textContent = data.text;
    techModalImage.src = data.image;
    techModalImage.alt = data.title;
    techModalList.replaceChildren(
        ...data.points.map(point => {
            const item = document.createElement("div");
            item.textContent = point;
            return item;
        })
    );
    window.CLIMATE13_I18N?.refresh(techModal);
}

document.querySelectorAll(".tech-more").forEach(button => {
    button.addEventListener("click", event => {
        event.stopPropagation();
        const card = button.closest(".tech-card");
        activeTechKey = card.dataset.tech;
        renderTechModal(activeTechKey);
        techModal.classList.add("active");
    });
});

techModalClose.addEventListener("click", () => techModal.classList.remove("active"));
techModal.addEventListener("click", event => {
    if (event.target === techModal) techModal.classList.remove("active");
});

window.addEventListener("climate13:languagechange", () => {
    if (techModal.classList.contains("active")) {
        renderTechModal(activeTechKey);
    }
});

