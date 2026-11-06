/* ================= IMPACT MODAL ================= */

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalNumber = document.getElementById("modalNumber");

const impactData = {

    sociedade: {
        number: "01",
        title: "Sociedade",
        text: "A crise climática amplia desigualdades: quem vive em áreas de risco, com pouca infraestrutura ou baixa renda costuma ter menos recursos para se proteger. Dados e mapas ajudam a identificar vulnerabilidades e orientar ações públicas."
    },

    agua: {
        number: "02",
        title: "Água",
        text: "Secas e chuvas intensas afetam abastecimento, drenagem e qualidade da água. Sensores, previsão do tempo e gestão inteligente ajudam cidades a antecipar riscos e reduzir desperdícios."
    },

    agricultura: {
        number: "03",
        title: "Agricultura",
        text: "Temperatura, água e eventos extremos influenciam safras e preços. Monitoramento climático, irrigação eficiente e análise de dados ajudam produtores a tomar decisões mais seguras."
    },

    saude: {
        number: "04",
        title: "Saúde",
        text: "Ondas de calor, enchentes e fumaça podem aumentar problemas respiratórios, desidratação e doenças transmitidas pela água. Alertas rápidos e planejamento de atendimento reduzem impactos."
    },

    cidades: {
        number: "05",
        title: "Cidades",
        text: "Cidades precisam integrar drenagem, arborização, mobilidade e moradia segura. Sistemas digitais, mapas de risco e alertas tornam o planejamento urbano mais resiliente."
    },

    biodiversidade: {
        number: "06",
        title: "Biodiversidade",
        text: "Mudanças rápidas no clima alteram habitats e pressionam espécies. Imagens de satélite, sensores e inventários ambientais ajudam a monitorar ecossistemas e orientar conservação."
    }

};

let activeImpactKey = "";

function renderImpactModal(key) {
    const data = impactData[key];
    if (!data) return;

    modalNumber.textContent = data.number;
    modalTitle.textContent = data.title;
    modalText.textContent = data.text;
    window.CLIMATE13_I18N?.refresh(modal);
}

document.querySelectorAll(".impact-card").forEach(card => {

    card.addEventListener("click", () => {

        const key = card.dataset.impact;
        activeImpactKey = key;
        renderImpactModal(key);

        modal.classList.add("active");

    });

});

window.addEventListener("climate13:languagechange", () => {
    if (modal.classList.contains("active")) {
        renderImpactModal(activeImpactKey);
    }
});

modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", event => {

    if (event.target === modal) {
        modal.classList.remove("active");
    }

});


