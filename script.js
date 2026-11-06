/* ================= LOADER ================= */

window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
    }, 2300);

});


/* ================= NAVBAR ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* ================= LINHA DO TEMPO CLIMÁTICA ================= */
const futureSlider=document.getElementById("futureSlider"),timelineYear=document.getElementById("timelineYear"),timelineTitle=document.getElementById("timelineTitle"),timelineText=document.getElementById("timelineText"),timelineTags=document.getElementById("timelineTags"),timelineStatus=document.getElementById("timelineStatus"),timelineHudYear=document.getElementById("timelineHudYear"),timelineHudStatus=document.getElementById("timelineHudStatus"),timelineIndex=document.getElementById("timelineIndex"),timelinePlay=document.getElementById("timelinePlay"),timelineEventButtons=document.querySelectorAll("[data-timeline]"),timelineConsole=document.getElementById("futureTimeline");
const timelineImage=document.getElementById("timelineImage"),timelineImageLabel=document.getElementById("timelineImageLabel"),timelineMetric=document.getElementById("timelineMetric"),timelineMetricLabel=document.getElementById("timelineMetricLabel");
const timelineData=[
{value:0,year:"1500",status:"BASELINE",title:"UM PLANETA EM EQUILÍBRIO RELATIVO",text:"Grandes florestas e ecossistemas ainda dominavam extensas áreas do planeta. A influência humana sobre o clima global era muito menor.",tags:["ECOSSISTEMAS","FLORESTAS","OBSERVAR"],image:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=90",imageLabel:"ANTES DA INDUSTRIALIZAÇÃO",metric:"INÍCIO DO REGISTRO"},
{value:20,year:"1800",status:"TRANSFORMAÇÃO",title:"A REVOLUÇÃO INDUSTRIAL MUDA A ESCALA",text:"A expansão do uso de carvão e das máquinas alterou profundamente a produção e iniciou um novo ritmo de emissões e transformação ambiental.",tags:["CARVÃO","INDÚSTRIA","TRANSFORMAÇÃO"],image:"https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1800&q=90",imageLabel:"REVOLUÇÃO INDUSTRIAL",metric:"MUDANÇA DE ESCALA"},
{value:40,year:"1900",status:"ACELERAÇÃO",title:"UM SÉCULO DE CRESCIMENTO ACELERADO",text:"Indústria, transporte, urbanização e consumo cresceram rapidamente, aumentando a demanda por energia e recursos em escala global.",tags:["URBANIZAÇÃO","ENERGIA","CRESCIMENTO"],image:"https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=90",imageLabel:"CIDADES EM EXPANSÃO",metric:"ACELERAÇÃO GLOBAL"},
{value:60,year:"2000",status:"ALERTA",title:"O SINAL CLIMÁTICO GANHA FORÇA",text:"O debate climático se torna global. Eventos extremos, aumento das temperaturas e pressão sobre ecossistemas entram no centro das decisões.",tags:["ALERTA","CLIMA","COOPERAÇÃO"],image:"https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1800&q=90",imageLabel:"ALERTA PLANETÁRIO",metric:"DADOS EM ESCALA GLOBAL"},
{value:80,year:"2026",status:"DECISÃO",title:"A DÉCADA DAS ESCOLHAS",text:"Tecnologia, ciência, políticas públicas e mudanças de comportamento já oferecem caminhos para reduzir riscos e aumentar a adaptação.",tags:["TECNOLOGIA","MITIGAÇÃO","AÇÃO"],image:"https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1800&q=90",imageLabel:"ESCOLHAS DE AGORA",metric:"JANELA DE AÇÃO"},
{value:100,year:"2050",status:"CENÁRIOS",title:"O FUTURO AINDA ESTÁ EM CONSTRUÇÃO",text:"O resultado das próximas décadas dependerá da velocidade e da qualidade das decisões tomadas agora para reduzir emissões e fortalecer a resiliência.",tags:["2050","ADAPTAÇÃO","FUTURO"],image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=90",imageLabel:"O FUTURO EM CONSTRUÇÃO",metric:"CENÁRIOS EM DISPUTA"}
];
let timelinePlaying=false,timelineTimer=null;
function getTimelineItem(v){return timelineData.reduce((c,i)=>Math.abs(i.value-v)<Math.abs(c.value-v)?i:c)}
function updateTimeline(v){const item=getTimelineItem(Number(v)),i=timelineData.indexOf(item);futureSlider.value=item.value;timelineConsole.classList.add("timeline-changing");setTimeout(()=>timelineConsole.classList.remove("timeline-changing"),420);timelineYear.textContent=item.year;timelineTitle.textContent=item.title;timelineText.textContent=item.text;timelineStatus.textContent=`${item.year} // ${item.status}`;timelineHudYear.textContent=item.year;timelineHudStatus.textContent=item.status;timelineIndex.textContent=`${String(i+1).padStart(2,"0")} / 06`;timelineTags.innerHTML=item.tags.map(t=>`<span>${t}</span>`).join("");if(timelineImage){timelineImage.style.opacity=".2";setTimeout(()=>{timelineImage.src=item.image;timelineImage.onload=()=>timelineImage.style.opacity="1";timelineImage.style.opacity="1";},120)}if(timelineImageLabel)timelineImageLabel.textContent=item.imageLabel;if(timelineMetric)timelineMetric.textContent=item.metric;if(timelineEventButtons)timelineEventButtons.forEach(b=>b.classList.toggle("active",Number(b.dataset.timeline)===item.value))}
futureSlider.addEventListener("input",()=>updateTimeline(futureSlider.value));timelineEventButtons.forEach(b=>b.addEventListener("click",()=>updateTimeline(b.dataset.timeline)));timelinePlay.addEventListener("click",()=>{timelinePlaying=!timelinePlaying;timelinePlay.textContent=timelinePlaying?"❚❚":"▶";clearInterval(timelineTimer);if(timelinePlaying)timelineTimer=setInterval(()=>{const i=timelineData.indexOf(getTimelineItem(Number(futureSlider.value)));updateTimeline(timelineData[(i+1)%timelineData.length].value)},2800)});updateTimeline(0);

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
        text: "As mudanças climáticas podem ampliar vulnerabilidades existentes. Populações com menor capacidade de adaptação podem ser mais expostas a eventos extremos, deslocamentos e perdas econômicas."
    },

    agua: {
        number: "02",
        title: "Água",
        text: "Mudanças nos padrões de precipitação podem contribuir para períodos de escassez ou excesso de água. A gestão dos recursos hídricos se torna ainda mais importante."
    },

    agricultura: {
        number: "03",
        title: "Agricultura",
        text: "Temperatura, disponibilidade de água e eventos extremos influenciam a produção agrícola. A adaptação pode envolver novas técnicas, planejamento e tecnologias."
    },

    saude: {
        number: "04",
        title: "Saúde",
        text: "Ondas de calor, enchentes e outros eventos extremos podem gerar riscos à saúde. O planejamento de sistemas de saúde é uma parte importante da adaptação climática."
    },

    cidades: {
        number: "05",
        title: "Cidades",
        text: "Áreas urbanas precisam considerar drenagem, arborização, infraestrutura, mobilidade e sistemas de alerta para aumentar a resiliência diante de eventos climáticos."
    },

    biodiversidade: {
        number: "06",
        title: "Biodiversidade",
        text: "Alterações de temperatura e precipitação podem modificar habitats e pressionar espécies. A conservação de ecossistemas é uma estratégia importante."
    }

};

document.querySelectorAll(".impact-card").forEach(card => {

    card.addEventListener("click", () => {

        const key = card.dataset.impact;
        const data = impactData[key];

        modalNumber.textContent = data.number;
        modalTitle.textContent = data.title;
        modalText.textContent = data.text;

        modal.classList.add("active");

    });

});

modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", event => {

    if (event.target === modal) {
        modal.classList.remove("active");
    }

});


/* ================= BRASIL ================= */

const regions = {
    amazonia: { code:"BR / 01", title:"Amazônia", text:"A região enfrenta desafios relacionados ao desmatamento, incêndios, conservação da biodiversidade e alterações no ciclo de chuvas.", tags:["FLORESTAS","CHUVAS","BIODIVERSIDADE"], details:[ ["PRINCIPAL RISCO","PRESSÃO SOBRE FLORESTAS"],["EVENTOS OBSERVADOS","SECAS E ALTERAÇÕES NAS CHUVAS"],["PRIORIDADE","CONSERVAÇÃO E ADAPTAÇÃO"] ] },
    nordeste: { code:"BR / 02", title:"Nordeste", text:"Diversas áreas enfrentam desafios relacionados à disponibilidade de água, secas e desertificação, tornando a adaptação especialmente importante.", tags:["ÁGUA","SECAS","ADAPTAÇÃO"], details:[ ["PRINCIPAL RISCO","ESCASSEZ HÍDRICA E SECAS"],["EVENTOS OBSERVADOS","CHUVAS IRREGULARES E CALOR"],["PRIORIDADE","GESTÃO DA ÁGUA E RESILIÊNCIA"] ] },
    centro: { code:"BR / 03", title:"Centro-Oeste", text:"A região possui forte relação com agricultura, recursos hídricos e ecossistemas que podem ser afetados por alterações climáticas.", tags:["AGRICULTURA","ÁGUA","ECOSSISTEMAS"], details:[ ["PRINCIPAL RISCO","PRESSÃO SOBRE RECURSOS HÍDRICOS"],["EVENTOS OBSERVADOS","CALOR E ALTERAÇÕES NAS CHUVAS"],["PRIORIDADE","PRODUÇÃO RESILIENTE E CONSERVAÇÃO"] ] },
    sudeste: { code:"BR / 04", title:"Sudeste", text:"Grandes áreas urbanas precisam lidar com riscos como ondas de calor, chuvas intensas, enchentes e pressão sobre infraestrutura.", tags:["CIDADES","CALOR","CHUVAS"], details:[ ["PRINCIPAL RISCO","EVENTOS EXTREMOS EM ÁREAS URBANAS"],["EVENTOS OBSERVADOS","CALOR, CHUVAS E ENCHENTES"],["PRIORIDADE","DRENAGEM, ALERTA E ARBORIZAÇÃO"] ] },
    sul: { code:"BR / 05", title:"Sul", text:"Eventos extremos, incluindo chuvas intensas e enchentes, destacam a importância de infraestrutura resiliente e sistemas de prevenção.", tags:["ENCHENTES","INFRAESTRUTURA","PREVENÇÃO"], details:[ ["PRINCIPAL RISCO","CHUVAS INTENSAS E INUNDAÇÕES"],["EVENTOS OBSERVADOS","ENCHENTES E TEMPORAIS"],["PRIORIDADE","PREVENÇÃO E INFRAESTRUTURA RESILIENTE"] ] }
};

const regionInfo = document.getElementById("regionInfo");

document.querySelectorAll(".map-point").forEach(point => {

    point.addEventListener("click", () => {

        const data = regions[point.dataset.region];

        regionInfo.innerHTML = `

            <span class="region-code">${data.code}</span>

            <h3>${data.title}</h3>

            <p>${data.text}</p>

            <div class="region-tags">
                ${data.tags.map(tag => `<span>${tag}</span>`).join("")}
            </div>
            <div class="region-details">
                ${data.details.map(detail => `<div><span>${detail[0]}</span><strong>${detail[1]}</strong></div>`).join("")}
            </div>
        `;

    });

});


/* ================= MODAIS DE TECNOLOGIA ================= */

const techModal = document.getElementById("techModal");
const techModalClose = document.getElementById("techModalClose");
const techModalNumber = document.getElementById("techModalNumber");
const techModalTitle = document.getElementById("techModalTitle");
const techModalText = document.getElementById("techModalText");
const techModalImage = document.getElementById("techModalImage");
const techModalList = document.getElementById("techModalList");

const techData = {
    ia: { number:"01", title:"Inteligência Artificial", text:"A Inteligência Artificial pode transformar grandes volumes de dados climáticos em informações úteis para pesquisadores, governos e cidades. Ela não substitui decisões humanas, mas pode acelerar análises e identificar padrões complexos.", image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=90", points:["Modelagem de padrões climáticos e ambientais.","Análise de imagens de satélite e dados de sensores.","Apoio à previsão de riscos e à tomada de decisões."] },
    satelites: { number:"02", title:"Satélites", text:"Satélites observam a Terra continuamente e permitem acompanhar mudanças em florestas, oceanos, atmosfera, nuvens e temperatura da superfície em escalas difíceis de medir apenas no solo.", image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=90", points:["Monitoramento de desmatamento e mudanças no território.","Observação de nuvens, oceanos e padrões atmosféricos.","Produção de dados para alertas, pesquisa e planejamento."] },
    solar: { number:"03", title:"Energia Solar", text:"A energia solar aproveita a radiação do Sol para gerar eletricidade e pode reduzir a dependência de fontes baseadas em combustíveis fósseis quando integrada a sistemas eficientes e a outras fontes de energia.", image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=90", points:["Geração de eletricidade a partir de uma fonte renovável.","Aplicação em residências, empresas e grandes usinas.","Integração com eficiência energética e redes inteligentes."] },
    cidades: { number:"04", title:"Cidades Inteligentes", text:"Sensores, dados e sistemas digitais podem ajudar cidades a compreender melhor o uso de água, energia, mobilidade e infraestrutura. A tecnologia pode apoiar decisões mais rápidas e eficientes.", image:"https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=90", points:["Sensores para acompanhar mobilidade e infraestrutura.","Gestão mais eficiente de água, energia e iluminação.","Dados para sistemas de alerta e planejamento urbano."] }
};

document.querySelectorAll(".tech-more").forEach(button => {
    button.addEventListener("click", event => {
        event.stopPropagation();
        const card = button.closest(".tech-card");
        const data = techData[card.dataset.tech];
        techModalNumber.textContent = data.number;
        techModalTitle.textContent = data.title;
        techModalText.textContent = data.text;
        techModalImage.src = data.image;
        techModalImage.alt = data.title;
        techModalList.innerHTML = data.points.map(point => `<div>${point}</div>`).join("");
        techModal.classList.add("active");
    });
});

techModalClose.addEventListener("click", () => techModal.classList.remove("active"));
techModal.addEventListener("click", event => {
    if (event.target === techModal) techModal.classList.remove("active");
});

/* ================= CHOICES ================= */

/* ================= QUIZ SEÇÃO 08 ================= */

const choices = [

    {
        question: "Sua cidade quer reduzir emissões do transporte sem dificultar a mobilidade da população. Qual estratégia você prioriza?",
        answers: [
            "Ampliar vias para diminuir congestionamentos e melhorar o fluxo dos carros",
            "Expandir transporte público, ciclovias e áreas para pedestres, integrando diferentes meios de transporte",
            "Substituir gradualmente os carros atuais por carros elétricos, mantendo o modelo de mobilidade existente"
        ],
        correct: 1,
        feedback: "A melhor estratégia é reduzir a dependência do carro individual. Transporte público e mobilidade ativa podem diminuir emissões e ainda melhorar a mobilidade urbana."
    },

    {
        question: "Uma região agrícola começou a enfrentar períodos de seca mais longos, mas também chuvas intensas em alguns meses. Qual decisão aumenta mais sua capacidade de adaptação?",
        answers: [
            "Investir em irrigação eficiente, conservação do solo, armazenamento de água e culturas mais resistentes às novas condições",
            "Aumentar a retirada de água dos rios durante as secas para manter a produção no mesmo nível",
            "Concentrar os investimentos apenas em grandes reservatórios para guardar água durante os períodos de chuva"
        ],
        correct: 0,
        feedback: "Combinar gestão da água, conservação do solo e adaptação das culturas torna a agricultura mais preparada para diferentes extremos climáticos."
    },

    {
        question: "Uma indústria quer reduzir seu impacto climático sem diminuir sua produção. Qual plano seria mais completo?",
        answers: [
            "Comprar créditos de carbono suficientes para compensar suas emissões atuais",
            "Trocar parte da eletricidade por energia renovável e manter os demais processos sem alterações",
            "Medir suas emissões, aumentar a eficiência energética, substituir fontes fósseis quando possível e usar energia renovável"
        ],
        correct: 2,
        feedback: "O plano mais completo começa identificando as emissões e reduzindo-as diretamente com eficiência, mudanças nos processos e fontes de energia de menor emissão."
    }

];

let currentChoice = 0;
let choiceScore = 0;

const choiceNumber = document.getElementById("choiceNumber");
const choiceQuestion = document.getElementById("choiceQuestion");
const choiceResult = document.getElementById("choiceResult");
const choiceRestart = document.getElementById("choiceRestart");

const choiceButtons =
    document.querySelectorAll(".choice-option");


function loadChoice() {

    const choice = choices[currentChoice];

    choiceNumber.textContent =
        String(currentChoice + 1).padStart(2, "0");

    choiceQuestion.textContent =
        choice.question;

    choiceResult.textContent = "";
    choiceResult.className = "choice-result";

    choiceRestart.classList.remove("visible");

    choiceButtons.forEach((button, index) => {

        button.style.display = "flex";

        button.disabled = false;

        button.classList.remove(
            "correct",
            "wrong"
        );

        button.querySelector("strong").textContent =
            choice.answers[index];

    });

}


choiceButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        const choice = choices[currentChoice];

        choiceButtons.forEach(btn => {
            btn.disabled = true;
        });

        if (index === choice.correct) {

            button.classList.add("correct");

            choiceScore++;

            choiceResult.textContent =
                "✓ CORRETO — " + choice.feedback;

            choiceResult.className =
                "choice-result success";

        } else {

            button.classList.add("wrong");

            choiceButtons[choice.correct]
                .classList.add("correct");

            choiceResult.textContent =
                "✕ ERRADO — " + choice.feedback;

            choiceResult.className =
                "choice-result error";

        }

        setTimeout(() => {

            currentChoice++;

            if (currentChoice < choices.length) {

                loadChoice();

            } else {

                showChoiceResult();

            }

        }, 2500);

    });

});


function showChoiceResult() {

    choiceNumber.textContent = "03";

    choiceQuestion.textContent =
        "QUIZ CONCLUÍDO";

    choiceButtons.forEach(button => {
        button.style.display = "none";
    });

    let message;

    if (choiceScore === 3) {

        message =
            "3/3 — Você realmente explorou o site. Nenhum detalhe passou despercebido.";

        choiceResult.className =
            "choice-result success";

    } else if (choiceScore === 2) {

        message =
            "2/3 — Quase perfeito. Um detalhe passou despercebido.";

        choiceResult.className =
            "choice-result warning-result";

    } else {

        message =
            `${choiceScore}/3 — Alguns detalhes passaram despercebidos. Explore o site novamente e tente outra vez.`;

        choiceResult.className =
            "choice-result error";

    }

    choiceResult.textContent = message;

    choiceRestart.classList.add("visible");

}


choiceRestart.addEventListener("click", () => {

    currentChoice = 0;
    choiceScore = 0;

    loadChoice();

});


loadChoice();


/* ================= CIDADE 2035 ================= */

const cityProjectsData = {

    transport: {
        cost: 32,
        emissions: -16,
        resilience: 4,
        water: 0,
        population: 12,
        economy: 5,
        biodiversity: -2,
        protection: {
            flood: 2,
            heat: 3,
            drought: 0
        }
    },

    solar: {
        cost: 26,
        emissions: -14,
        resilience: 2,
        water: 0,
        population: 3,
        economy: 6,
        biodiversity: -1,
        protection: {
            flood: 0,
            heat: 2,
            drought: 0
        }
    },

    trees: {
        cost: 22,
        emissions: -4,
        resilience: 12,
        water: 8,
        population: 10,
        economy: -2,
        biodiversity: 16,
        protection: {
            flood: 9,
            heat: 16,
            drought: 5
        }
    },

    drainage: {
        cost: 34,
        emissions: 2,
        resilience: 20,
        water: 8,
        population: 8,
        economy: -2,
        biodiversity: -2,
        protection: {
            flood: 26,
            heat: 0,
            drought: 1
        }
    },

    alerts: {
        cost: 12,
        emissions: 0,
        resilience: 14,
        water: 0,
        population: 8,
        economy: -1,
        biodiversity: 0,
        protection: {
            flood: 12,
            heat: 10,
            drought: 7
        }
    },

    water: {
        cost: 26,
        emissions: 2,
        resilience: 8,
        water: 22,
        population: 8,
        economy: 3,
        biodiversity: 2,
        protection: {
            flood: 2,
            heat: 2,
            drought: 24
        }
    },

    rivers: {
        cost: 22,
        emissions: -2,
        resilience: 11,
        water: 15,
        population: 6,
        economy: -3,
        biodiversity: 18,
        protection: {
            flood: 15,
            heat: 3,
            drought: 14
        }
    },

    housing: {
        cost: 32,
        emissions: 4,
        resilience: 18,
        water: 0,
        population: 18,
        economy: 3,
        biodiversity: -2,
        protection: {
            flood: 18,
            heat: 12,
            drought: 4
        }
    },

    waste: {
        cost: 18,
        emissions: -8,
        resilience: 1,
        water: 1,
        population: 3,
        economy: -2,
        biodiversity: 5,
        protection: {
            flood: 1,
            heat: 0,
            drought: 0
        }
    },

    efficiency: {
        cost: 20,
        emissions: -10,
        resilience: 2,
        water: 0,
        population: 4,
        economy: 9,
        biodiversity: -1,
        protection: {
            flood: 0,
            heat: 4,
            drought: 1
        }
    },


    /* DECISÕES QUE GERAM CR */


    waterTariff: {
        cost: -8,
        emissions: 0,
        resilience: 2,
        water: 8,
        population: -8,
        economy: -4,
        biodiversity: 1,
        protection: {
            flood: 0,
            heat: 0,
            drought: 5
        }
    },

    climateTax: {
        cost: -10,
        emissions: -8,
        resilience: 0,
        water: 0,
        population: -6,
        economy: -7,
        biodiversity: 2,
        protection: {
            flood: 0,
            heat: 1,
            drought: 0
        }
    },

    urbanToll: {
        cost: -7,
        emissions: -6,
        resilience: 1,
        water: 0,
        population: -5,
        economy: -4,
        biodiversity: 0,
        protection: {
            flood: 0,
            heat: 1,
            drought: 0
        }
    },

    fossilIndustry: {
        cost: -14,
        emissions: 18,
        resilience: -4,
        water: -6,
        population: -7,
        economy: 16,
        biodiversity: -16,
        protection: {
            flood: -3,
            heat: -4,
            drought: -5
        }
    },

    maintenanceCuts: {
        cost: -8,
        emissions: 0,
        resilience: -16,
        water: -8,
        population: -9,
        economy: 4,
        biodiversity: -2,
        protection: {
            flood: -18,
            heat: -3,
            drought: -5
        }
    },

    greenDevelopment: {
        cost: -11,
        emissions: 7,
        resilience: -8,
        water: -9,
        population: -5,
        economy: 12,
        biodiversity: -18,
        protection: {
            flood: -9,
            heat: -8,
            drought: -5
        }
    }

};


const creditProjectLimit = 3;


const climateEvents = [

    {
        id: "flood",
        title: "CHUVAS EXTREMAS",
        text:
            "Uma sequência de tempestades atinge a cidade. Rios, drenagem, moradias e serviços públicos são colocados à prova."
    },

    {
        id: "heat",
        title: "ONDA DE CALOR",
        text:
            "Temperaturas extremas permanecem por vários dias. A infraestrutura, a vegetação urbana e a saúde da população são colocadas à prova."
    },

    {
        id: "drought",
        title: "SECA PROLONGADA",
        text:
            "Meses de pouca chuva reduzem reservatórios, pressionam o abastecimento e afetam ecossistemas e atividades econômicas."
    }

];


const cityInitialState = {

    budget: 100,

    emissions: 78,
    resilience: 28,
    water: 42,

    population: 52,
    economy: 55,
    biodiversity: 48

};


let cityState = {

    budget:
        cityInitialState.budget,

    emissions:
        cityInitialState.emissions,

    resilience:
        cityInitialState.resilience,

    water:
        cityInitialState.water,

    population:
        cityInitialState.population,

    economy:
        cityInitialState.economy,

    biodiversity:
        cityInitialState.biodiversity,

    selected: []

};


/* ELEMENTOS */

const cityBudget =
    document.getElementById("cityBudget");

const selectedProjectCount =
    document.getElementById("selectedProjectCount");

const cityGameMessage =
    document.getElementById("cityGameMessage");

const simulateCity =
    document.getElementById("simulateCity");

const cityResult =
    document.getElementById("cityResult");

const cityProjectsContainer =
    document.getElementById("cityProjects");

const cityProjectButtons =
    document.querySelectorAll(
        "#cityProjects .city-project"
    );


const statElements = {

    emissions: {
        value:
            document.getElementById(
                "emissionsValue"
            ),

        bar:
            document.getElementById(
                "emissionsBar"
            )
    },

    resilience: {
        value:
            document.getElementById(
                "resilienceValue"
            ),

        bar:
            document.getElementById(
                "resilienceBar"
            )
    },

    water: {
        value:
            document.getElementById(
                "waterValue"
            ),

        bar:
            document.getElementById(
                "waterBar"
            )
    },

    population: {
        value:
            document.getElementById(
                "populationValue"
            ),

        bar:
            document.getElementById(
                "populationBar"
            )
    },

    economy: {
        value:
            document.getElementById(
                "economyValue"
            ),

        bar:
            document.getElementById(
                "economyBar"
            )
    },

    biodiversity: {
        value:
            document.getElementById(
                "biodiversityValue"
            ),

        bar:
            document.getElementById(
                "biodiversityBar"
            )
    }

};


const climateEventTitle =
    document.getElementById(
        "climateEventTitle"
    );

const climateEventText =
    document.getElementById(
        "climateEventText"
    );

const finalEmissions =
    document.getElementById(
        "finalEmissions"
    );

const finalResilience =
    document.getElementById(
        "finalResilience"
    );

const finalWater =
    document.getElementById(
        "finalWater"
    );

const finalPopulation =
    document.getElementById(
        "finalPopulation"
    );

const finalEconomy =
    document.getElementById(
        "finalEconomy"
    );

const finalBiodiversity =
    document.getElementById(
        "finalBiodiversity"
    );

const eventResponse =
    document.getElementById(
        "eventResponse"
    );

const cityResultTitle =
    document.getElementById(
        "cityResultTitle"
    );

const cityResultText =
    document.getElementById(
        "cityResultText"
    );

const cityScore =
    document.getElementById(
        "cityScore"
    );

const restartCity =
    document.getElementById(
        "restartCity"
    );


/* SCROLL HORIZONTAL COM A RODINHA */

cityProjectsContainer.addEventListener(

    "wheel",

    event => {

        const delta =

            Math.abs(event.deltaY) >=
            Math.abs(event.deltaX)

                ? event.deltaY
                : event.deltaX;


        if (delta === 0) {
            return;
        }


        event.preventDefault();


        cityProjectsContainer.scrollBy({

            left:
                delta * 1.35,

            behavior:
                "auto"

        });

    },

    {
        passive: false
    }

);


function clampCityValue(value) {

    return Math.max(
        0,
        Math.min(
            100,
            value
        )
    );

}


function isCreditProject(projectId) {

    return cityProjectsData[
        projectId
    ].cost < 0;

}


function getSelectedCreditProjectCount() {

    return cityState.selected.filter(
        isCreditProject
    ).length;

}


/* APLICA UMA DECISÃO UMA ÚNICA VEZ */

function applyCityProject(projectId) {

    const project =
        cityProjectsData[
            projectId
        ];


    cityState.budget -=
        project.cost;


    cityState.emissions =
        clampCityValue(
            cityState.emissions +
            project.emissions
        );


    cityState.resilience =
        clampCityValue(
            cityState.resilience +
            project.resilience
        );


    cityState.water =
        clampCityValue(
            cityState.water +
            project.water
        );


    cityState.population =
        clampCityValue(
            cityState.population +
            project.population
        );


    cityState.economy =
        clampCityValue(
            cityState.economy +
            project.economy
        );


    cityState.biodiversity =
        clampCityValue(
            cityState.biodiversity +
            project.biodiversity
        );


    cityState.selected.push(
        projectId
    );

}


/* ATUALIZA PAINEL */

function updateCityGame() {

    const selectedCreditProjectCount =
        getSelectedCreditProjectCount();

    const reachedCreditProjectLimit =
        selectedCreditProjectCount >=
        creditProjectLimit;


    cityBudget.textContent =
        cityState.budget;


    selectedProjectCount.textContent =
        cityState.selected.length;


    Object
        .keys(statElements)
        .forEach(key => {

            statElements[
                key
            ].value.textContent =
                cityState[key];


            statElements[
                key
            ].bar.style.width =
                cityState[key] + "%";

        });


    cityProjectButtons.forEach(
        button => {

            const projectId =
                button.dataset.project;

            const project =
                cityProjectsData[
                    projectId
                ];

            const alreadySelected =
                cityState.selected.includes(
                    projectId
                );

            const creditProject =
                isCreditProject(
                    projectId
                );


            button.classList.toggle(
                "selected",
                alreadySelected
            );


            if (alreadySelected) {

                button.disabled =
                    true;

                return;

            }

            if (
                creditProject &&
                reachedCreditProjectLimit
            ) {

                button.disabled =
                    true;

                return;

            }


            button.disabled =
                project.cost >
                cityState.budget;

        }
    );


    if (
        cityState.selected.length === 0
    ) {

        cityGameMessage.textContent =
            `VOCÊ POSSUI 100 CR. ESCOLHA COM CUIDADO. GANHO DE CR: ${selectedCreditProjectCount}/${creditProjectLimit}.`;

    } else {

        cityGameMessage.textContent =
            `${cityState.selected.length} DECISÃO(ÕES) TOMADA(S) // ${cityState.budget} CR DISPONÍVEIS // GANHO DE CR: ${selectedCreditProjectCount}/${creditProjectLimit}`;

    }

}


/* CLIQUE NOS PROJETOS */

cityProjectButtons.forEach(

    button => {

        button.addEventListener(
            "click",
            () => {

                const projectId =
                    button.dataset.project;


                const project =
                    cityProjectsData[
                        projectId
                    ];


                if (
                    cityState.selected.includes(
                        projectId
                    )
                ) {
                    return;
                }


                if (
                    project.cost >
                    cityState.budget
                ) {

                    cityGameMessage.textContent =
                        "RECURSOS INSUFICIENTES PARA ESSA DECISÃO.";

                    return;

                }

                if (
                    isCreditProject(
                        projectId
                    ) &&
                    getSelectedCreditProjectCount() >=
                    creditProjectLimit
                ) {

                    cityGameMessage.textContent =
                        "LIMITE DE 3 ESCOLHAS QUE GERAM CR ATINGIDO.";

                    return;

                }


                applyCityProject(
                    projectId
                );


                updateCityGame();

            }
        );

    }

);


/* PROTEÇÃO CONTRA O EVENTO SORTEADO */

function getEventProtection(
    eventId
) {

    return cityState.selected.reduce(

        (
            total,
            projectId
        ) =>

            total +
            cityProjectsData[
                projectId
            ].protection[
                eventId
            ],

        0

    );

}


/* SIMULAÇÃO */

function simulateCityFuture() {

    if (
        cityState.selected.length === 0
    ) {

        cityGameMessage.textContent =
            "TOME PELO MENOS UMA DECISÃO ANTES DA SIMULAÇÃO.";

        return;

    }


    const climateEvent =

        climateEvents[
            Math.floor(
                Math.random() *
                climateEvents.length
            )
        ];


    const protection =
        getEventProtection(
            climateEvent.id
        );


    let eventScore = 0;


    /* CHUVAS EXTREMAS */

    if (
        climateEvent.id ===
        "flood"
    ) {

        eventScore =

            cityState.resilience *
                0.35 +

            cityState.water *
                0.12 +

            cityState.population *
                0.18 +

            cityState.biodiversity *
                0.10 +

            protection;

    }


    /* ONDA DE CALOR */

    if (
        climateEvent.id ===
        "heat"
    ) {

        eventScore =

            cityState.resilience *
                0.25 +

            cityState.population *
                0.25 +

            cityState.biodiversity *
                0.15 +

            (
                100 -
                cityState.emissions
            ) *
                0.10 +

            protection;

    }


    /* SECA */

    if (
        climateEvent.id ===
        "drought"
    ) {

        eventScore =

            cityState.water *
                0.35 +

            cityState.resilience *
                0.18 +

            cityState.biodiversity *
                0.15 +

            cityState.population *
                0.10 +

            protection;

    }


    eventScore =
        clampCityValue(
            Math.round(
                eventScore
            )
        );


    let eventStatus;


    if (
        eventScore >= 80
    ) {

        eventStatus =
            "IMPACTO CONTROLADO";

    } else if (
        eventScore >= 60
    ) {

        eventStatus =
            "DANOS LIMITADOS";

    } else if (
        eventScore >= 40
    ) {

        eventStatus =
            "DANOS SIGNIFICATIVOS";

    } else {

        eventStatus =
            "COLAPSO PARCIAL";

    }


    /*
        ÍNDICE GERAL

        Emissões funcionam ao contrário:
        quanto menores, melhor.

        O evento climático também entra
        no resultado final.
    */

    let score =

        (
            100 -
            cityState.emissions
        ) * 0.16 +

        cityState.resilience *
            0.15 +

        cityState.water *
            0.14 +

        cityState.population *
            0.16 +

        cityState.economy *
            0.13 +

        cityState.biodiversity *
            0.11 +

        eventScore *
            0.15;


    /*
        EVITA UMA CIDADE DESEQUILIBRADA.

        Se algum setor entrar em situação
        muito crítica, o índice perde pontos.
    */

    const weakestDimension =
        Math.min(

            100 -
            cityState.emissions,

            cityState.resilience,

            cityState.water,

            cityState.population,

            cityState.economy,

            cityState.biodiversity

        );


    if (
        weakestDimension < 25
    ) {

        score -= 8;

    }


    if (
        weakestDimension < 15
    ) {

        score -= 8;

    }


    score =
        clampCityValue(
            Math.round(
                score
            )
        );


    let title;
    let text;


    if (
        score >= 78 &&
        eventScore >= 65
    ) {

        title =
            "CIDADE MODELO";

        text =
            "Seu planejamento conseguiu equilibrar clima, população, economia e meio ambiente. A cidade chega a 2040 com boa capacidade de enfrentar riscos sem depender de um único setor.";

    } else if (
        score >= 65
    ) {

        title =
            "CIDADE RESILIENTE";

        text =
            "As decisões produziram bons resultados, mas ainda existem vulnerabilidades. Um planejamento mais equilibrado poderia melhorar a resposta da cidade.";

    } else if (
        score >= 50
    ) {

        title =
            "CIDADE EM TRANSIÇÃO";

        text =
            "Você conseguiu avanços importantes, mas alguns setores ficaram para trás. O evento climático revelou os pontos mais frágeis do planejamento.";

    } else {

        title =
            "CIDADE EM RISCO";

        text =
            "O desenvolvimento ocorreu de forma desequilibrada. A cidade chega a 2040 com vulnerabilidades ambientais, sociais ou estruturais importantes.";

    }


    climateEventTitle.textContent =
        climateEvent.title;


    climateEventText.textContent =
        climateEvent.text;


    finalEmissions.textContent =
        cityState.emissions;


    finalResilience.textContent =
        cityState.resilience;


    finalWater.textContent =
        cityState.water;


    finalPopulation.textContent =
        cityState.population;


    finalEconomy.textContent =
        cityState.economy;


    finalBiodiversity.textContent =
        cityState.biodiversity;


    eventResponse.textContent =
        eventStatus;


    cityResultTitle.textContent =
        title;


    cityResultText.textContent =
        text;


    cityScore.textContent =
        score;


    cityResult.classList.add(
        "visible"
    );


    /*
        DEPOIS DA SIMULAÇÃO
        A PARTIDA TERMINA.
    */

    cityProjectButtons.forEach(
        button => {

            button.disabled =
                true;

        }
    );


    simulateCity.disabled =
        true;


    cityGameMessage.textContent =
        "SIMULAÇÃO 2040 FINALIZADA.";


    setTimeout(
        () => {

            cityResult.scrollIntoView({

                behavior:
                    "smooth",

                block:
                    "center"

            });

        },
        250
    );

}


/* SIMULAR */

simulateCity.addEventListener(
    "click",
    simulateCityFuture
);


/* NOVA PARTIDA */

restartCity.addEventListener(

    "click",

    () => {

        cityState = {

            budget:
                cityInitialState.budget,

            emissions:
                cityInitialState.emissions,

            resilience:
                cityInitialState.resilience,

            water:
                cityInitialState.water,

            population:
                cityInitialState.population,

            economy:
                cityInitialState.economy,

            biodiversity:
                cityInitialState.biodiversity,

            selected: []

        };


        cityResult.classList.remove(
            "visible"
        );


        simulateCity.disabled =
            false;


        cityProjectButtons.forEach(
            button => {

                button.disabled =
                    false;

                button.classList.remove(
                    "selected"
                );

            }
        );


        cityProjectsContainer.scrollLeft =
            0;


        updateCityGame();


        document
            .getElementById(
                "cityGame"
            )
            .scrollIntoView({

                behavior:
                    "smooth",

                block:
                    "start"

            });

    }

);


updateCityGame();

/* ================= MONITORAMENTO GLOBAL ================= */

const monitorBtn = document.getElementById("monitorBtn");
const monitorOverlay = document.getElementById("monitorOverlay");
const closeMonitor = document.getElementById("closeMonitor");
const monitorClock = document.getElementById("monitorClock");

let globeScene;
let globeCamera;
let globeRenderer;
let globeGroup;
let globeRaycaster;
let globeMouse;
let globeAnimationFrame;
let globeDrag = false;
let globeDragged = false;
let globeLastX = 0;
let globeLastY = 0;
let globeZoom = 1;
let globeInitialized = false;
let globeResizeObserver;

const climateCities = [
    { id: "sp", city: "São Paulo", country: "Brasil", lat: -23.55, lon: -46.63, region: "AMÉRICA DO SUL", risk: "ALTO", riskText: "calor e chuvas intensas", tags: ["CALOR", "ÁGUA", "CHUVAS"], context: "Grandes áreas urbanas precisam combinar adaptação, drenagem, arborização e redução de emissões para aumentar a resiliência." },
    { id: "ny", city: "Nova York", country: "Estados Unidos", lat: 40.71, lon: -74.01, region: "AMÉRICA DO NORTE", risk: "ALTO", riskText: "ondas de calor e elevação do mar", tags: ["CALOR", "OCEANOS", "CIDADES"], context: "Cidades costeiras enfrentam riscos combinados de ondas de calor, chuvas extremas e elevação do nível do mar." },
    { id: "london", city: "Londres", country: "Reino Unido", lat: 51.51, lon: -0.13, region: "EUROPA", risk: "MÉDIO", riskText: "calor e chuvas extremas", tags: ["CALOR", "CHUVAS", "CIDADES"], context: "A adaptação urbana e sistemas de alerta ajudam a reduzir os impactos de eventos extremos e ondas de calor." },
    { id: "cairo", city: "Cairo", country: "Egito", lat: 30.04, lon: 31.24, region: "ÁFRICA", risk: "MUITO ALTO", riskText: "calor extremo e escassez de água", tags: ["CALOR", "ÁGUA", "SECA"], context: "O aumento do calor e a pressão sobre os recursos hídricos tornam adaptação, gestão da água e resiliência essenciais." },
    { id: "mumbai", city: "Mumbai", country: "Índia", lat: 19.08, lon: 72.88, region: "ÁSIA", risk: "MUITO ALTO", riskText: "calor, enchentes e chuvas intensas", tags: ["CALOR", "CHUVAS", "CIDADES"], context: "Áreas costeiras e densamente povoadas podem precisar de infraestrutura resiliente e sistemas de alerta." },
    { id: "tokyo", city: "Tóquio", country: "Japão", lat: 35.68, lon: 139.69, region: "ÁSIA", risk: "ALTO", riskText: "calor e eventos extremos", tags: ["CALOR", "CIDADES", "CHUVAS"], context: "Planejamento urbano, infraestrutura resiliente e sistemas de alerta são importantes para reduzir riscos climáticos." },
    { id: "sydney", city: "Sydney", country: "Austrália", lat: -33.87, lon: 151.21, region: "OCEANIA", risk: "ALTO", riskText: "calor extremo e incêndios", tags: ["CALOR", "INCÊNDIOS", "ECOSSISTEMAS"], context: "Mudanças de temperatura e secas podem aumentar riscos para ecossistemas e comunidades, exigindo adaptação." },
    { id: "manaus", city: "Manaus", country: "Brasil", lat: -3.12, lon: -60.02, region: "AMÉRICA DO SUL", risk: "MUITO ALTO", riskText: "calor, secas e alterações nas chuvas", tags: ["FLORESTAS", "CALOR", "CHUVAS"], context: "A Amazônia é estratégica para biodiversidade e ciclos de chuva; conservação e redução do desmatamento são fundamentais." }
];

const climateCache = new Map();
const OPEN_METEO_FORECAST = "https://api.open-meteo.com/v1/forecast";
const OPEN_METEO_HISTORY = "https://archive-api.open-meteo.com/v1/archive";
const OPEN_METEO_CLIMATE = "https://climate-api.open-meteo.com/v1/climate";
const CLIMATE_MODELS = "CMCC_CM2_VHR4,FGOALS_f3_H,HiRAM_SIT_HR,MRI_AGCM3_2_S,EC_Earth3P_HR,MPI_ESM1_2_XR,NICAM16_8S";

function average(values) {
    const valid = values.filter(v => Number.isFinite(v));
    return valid.length ? valid.reduce((a, b) => a + b, 0) / valid.length : null;
}

function weatherCodePT(code) {
    const map = {
        0: "céu limpo", 1: "principalmente limpo", 2: "parcialmente nublado", 3: "nublado",
        45: "neblina", 48: "neblina com geada", 51: "garoa leve", 53: "garoa moderada", 55: "garoa intensa",
        56: "garoa congelante", 57: "garoa congelante intensa", 61: "chuva leve", 63: "chuva moderada", 65: "chuva forte",
        66: "chuva congelante", 67: "chuva congelante forte", 71: "neve leve", 73: "neve moderada", 75: "neve forte",
        77: "granizo de neve", 80: "pancadas leves", 81: "pancadas moderadas", 82: "pancadas fortes",
        85: "pancadas de neve", 86: "pancadas de neve fortes", 95: "trovoada", 96: "trovoada com granizo leve", 99: "trovoada com granizo forte"
    };
    return map[code] || "condição não identificada";
}

async function fetchJSON(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Open-Meteo HTTP ${response.status}`);
    return response.json();
}

async function fetchClimateData(city) {
    if (climateCache.has(city.id)) return climateCache.get(city.id);

    const now = new Date();
    const currentYear = now.getFullYear();
    const pastYear = currentYear - 10;
    const futureYear = currentYear + 10;

    const currentParams = new URLSearchParams({
        latitude: city.lat,
        longitude: city.lon,
        current: "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m",
        timezone: "auto",
        temperature_unit: "celsius",
        wind_speed_unit: "kmh"
    });

    const pastParams = new URLSearchParams({
        latitude: city.lat,
        longitude: city.lon,
        start_date: `${pastYear}-01-01`,
        end_date: `${pastYear}-12-31`,
        daily: "temperature_2m_mean",
        timezone: "auto",
        temperature_unit: "celsius"
    });

    const futureParams = new URLSearchParams({
        latitude: city.lat,
        longitude: city.lon,
        start_date: `${futureYear}-01-01`,
        end_date: `${futureYear}-12-31`,
        models: CLIMATE_MODELS,
        daily: "temperature_2m_mean",
        timezone: "auto",
        temperature_unit: "celsius"
    });

    const [current, past, future] = await Promise.all([
        fetchJSON(`${OPEN_METEO_FORECAST}?${currentParams}`),
        fetchJSON(`${OPEN_METEO_HISTORY}?${pastParams}`),
        fetchJSON(`${OPEN_METEO_CLIMATE}?${futureParams}`)
    ]);

    const pastMean = average(past.daily?.temperature_2m_mean || []);

    // A Climate API pode retornar uma série por modelo. Fazemos a média de todos os valores disponíveis,
    // reduzindo a dependência de um único modelo climático.
    const futureValues = [];
    const futureDaily = future.daily || {};
    Object.keys(futureDaily).forEach(key => {
        if (key === "time") return;
        if (Array.isArray(futureDaily[key])) {
            futureDaily[key].forEach(v => {
                if (Number.isFinite(v)) futureValues.push(v);
            });
        }
    });

    const result = {
        current: current.current?.temperature_2m,
        apparent: current.current?.apparent_temperature,
        humidity: current.current?.relative_humidity_2m,
        precipitation: current.current?.precipitation,
        wind: current.current?.wind_speed_10m,
        weather: weatherCodePT(current.current?.weather_code),
        past: pastMean,
        future: average(futureValues),
        pastYear,
        futureYear,
        updatedAt: current.current?.time
    };

    climateCache.set(city.id, result);
    return result;
}

function updateMonitorClock() {
    monitorClock.textContent = new Date().toLocaleTimeString("pt-BR");
}

monitorBtn.addEventListener("click", () => {
    monitorOverlay.classList.add("active");
    document.body.classList.add("monitor-open");

    setTimeout(() => {
        if (!globeInitialized) {
            initClimateGlobe();
        } else {
            resizeClimateGlobe();
        }
    }, 40);
});

closeMonitor.addEventListener("click", closeClimateMonitor);

monitorOverlay.addEventListener("click", event => {
    if (event.target === monitorOverlay) {
        closeClimateMonitor();
    }
});

function closeClimateMonitor() {
    monitorOverlay.classList.remove("active");
    document.body.classList.remove("monitor-open");
}

setInterval(updateMonitorClock, 1000);
updateMonitorClock();

function latLonToVector3(lat, lon, radius) {
    const phi = (90 - lat) * Math.PI / 180;
    const theta = (lon + 180) * Math.PI / 180;

    return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

function createGlowTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;

    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(64, 64, 2, 64, 64, 64);

    gradient.addColorStop(0, "rgba(120,255,180,1)");
    gradient.addColorStop(.15, "rgba(99,255,156,.9)");
    gradient.addColorStop(.4, "rgba(98,245,255,.35)");
    gradient.addColorStop(1, "rgba(98,245,255,0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);

    return new THREE.CanvasTexture(canvas);
}

function createBeam(city, radius) {
    const surface = latLonToVector3(city.lat, city.lon, radius + 0.015);
    const outer = latLonToVector3(city.lat, city.lon, radius + 0.34);

    const direction = new THREE.Vector3().subVectors(outer, surface);
    const length = direction.length();

    const beamGeometry = new THREE.CylinderGeometry(
        0.018, 0.055, length, 8, 1, true
    );

    const beamMaterial = new THREE.MeshBasicMaterial({
        color: 0x63ff9c,
        transparent: true,
        opacity: 0.48,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const beam = new THREE.Mesh(beamGeometry, beamMaterial);
    beam.position.copy(surface).add(outer).multiplyScalar(.5);
    beam.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction.normalize()
    );

    beam.userData = {
        type: "beam",
        cityId: city.id
    };

    const point = new THREE.Mesh(
        new THREE.SphereGeometry(0.07, 12, 12),
        new THREE.MeshBasicMaterial({
            color: 0x9affbd
        })
    );

    point.position.copy(surface);
    point.userData = {
        type: "city",
        cityId: city.id
    };

    const glow = new THREE.Sprite(
        new THREE.SpriteMaterial({
            map: createGlowTexture(),
            color: 0x63ff9c,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        })
    );

    glow.scale.set(.55, .55, .55);
    glow.position.copy(surface);
    glow.userData = {
        type: "city",
        cityId: city.id
    };

    globeGroup.add(beam);
    globeGroup.add(point);
    globeGroup.add(glow);
}

function initClimateGlobe() {
    const container = document.getElementById("globeContainer");

    if (!container || typeof THREE === "undefined") {
        console.error("Three.js não foi carregado.");
        return;
    }

    globeInitialized = true;

    globeScene = new THREE.Scene();

    globeCamera = new THREE.PerspectiveCamera(
        42,
        container.clientWidth / container.clientHeight,
        .1,
        100
    );

    globeCamera.position.set(0, 0, 4.6);

    globeRenderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    globeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    globeRenderer.setSize(container.clientWidth, container.clientHeight);
    globeRenderer.outputColorSpace = THREE.SRGBColorSpace;

    container.innerHTML = "";
    container.appendChild(globeRenderer.domElement);

    globeGroup = new THREE.Group();
    globeScene.add(globeGroup);

    const ambient = new THREE.AmbientLight(0x8affb2, 1.3);
    globeScene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0x9fffff, 2.8);
    keyLight.position.set(-3, 2, 4);
    globeScene.add(keyLight);

    const globeRadius = 1.55;

    const textureLoader = new THREE.TextureLoader();

    const earthTexture = textureLoader.load(
        "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
    );

    earthTexture.colorSpace = THREE.SRGBColorSpace;

    const earth = new THREE.Mesh(
        new THREE.SphereGeometry(globeRadius, 64, 64),
        new THREE.MeshPhongMaterial({
            map: earthTexture,
            shininess: 18,
            specular: new THREE.Color(0x164f31)
        })
    );

    globeGroup.add(earth);

    const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(globeRadius * 1.035, 64, 64),
        new THREE.MeshBasicMaterial({
            color: 0x63ff9c,
            transparent: true,
            opacity: .055,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending
        })
    );

    globeGroup.add(atmosphere);

    const gridMaterial = new THREE.LineBasicMaterial({
        color: 0x63ff9c,
        transparent: true,
        opacity: .07
    });

    for (let lat = -60; lat <= 60; lat += 20) {
        const points = [];

        for (let lon = -180; lon <= 180; lon += 4) {
            points.push(latLonToVector3(lat, lon, globeRadius + .012));
        }

        globeGroup.add(
            new THREE.Line(
                new THREE.BufferGeometry().setFromPoints(points),
                gridMaterial
            )
        );
    }

    for (let lon = -180; lon < 180; lon += 20) {
        const points = [];

        for (let lat = -90; lat <= 90; lat += 4) {
            points.push(latLonToVector3(lat, lon, globeRadius + .012));
        }

        globeGroup.add(
            new THREE.Line(
                new THREE.BufferGeometry().setFromPoints(points),
                gridMaterial
            )
        );
    }

    climateCities.forEach(city => createBeam(city, globeRadius));

    globeRaycaster = new THREE.Raycaster();
    globeMouse = new THREE.Vector2();

    container.addEventListener("pointerdown", onGlobePointerDown);
    window.addEventListener("pointermove", onGlobePointerMove);
    window.addEventListener("pointerup", onGlobePointerUp);
    container.addEventListener("wheel", onGlobeWheel, { passive: false });
    container.addEventListener("click", onGlobeClick);

    globeResizeObserver = new ResizeObserver(resizeClimateGlobe);
    globeResizeObserver.observe(container);

    selectClimateCity(climateCities[0]);

    animateClimateGlobe();
}

function onGlobePointerDown(event) {
    globeDrag = true;
    globeDragged = false;
    globeLastX = event.clientX;
    globeLastY = event.clientY;
}

function onGlobePointerMove(event) {
    if (!globeDrag || !globeGroup) return;

    const dx = event.clientX - globeLastX;
    const dy = event.clientY - globeLastY;

    if (Math.abs(dx) + Math.abs(dy) > 2) {
        globeDragged = true;
    }

    globeGroup.rotation.y += dx * .006;
    globeGroup.rotation.x += dy * .004;

    globeGroup.rotation.x = Math.max(
        -Math.PI / 2.2,
        Math.min(Math.PI / 2.2, globeGroup.rotation.x)
    );

    globeLastX = event.clientX;
    globeLastY = event.clientY;
}

function onGlobePointerUp() {
    globeDrag = false;
}

function onGlobeWheel(event) {
    event.preventDefault();

    globeZoom += event.deltaY * -0.001;
    globeZoom = Math.max(.72, Math.min(1.35, globeZoom));

    globeCamera.position.z = 4.6 / globeZoom;
}

function onGlobeClick(event) {
    if (globeDragged) return;

    const rect = globeRenderer.domElement.getBoundingClientRect();

    globeMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    globeMouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    globeRaycaster.setFromCamera(globeMouse, globeCamera);

    const objects = globeGroup.children.filter(
        object => object.userData && object.userData.cityId
    );

    const hits = globeRaycaster.intersectObjects(objects, true);

    if (hits.length) {
        const cityId = hits[0].object.userData.cityId;
        const city = climateCities.find(item => item.id === cityId);

        if (city) {
            selectClimateCity(city);
            pulseSelectedCity(cityId);
        }
    }
}

function pulseSelectedCity(cityId) {
    const selected = globeGroup.children.find(
        object =>
            object.userData &&
            object.userData.cityId === cityId &&
            object.userData.type === "city" &&
            object.material &&
            object.material.color
    );

    if (!selected) return;

    const original = selected.scale.x;
    selected.scale.setScalar(original * 1.8);

    setTimeout(() => {
        selected.scale.setScalar(original);
    }, 260);
}

async function selectClimateCity(city) {
    document.getElementById("monitorCode").textContent =
        `${city.country === "Brasil" ? "BR" : "GLB"} / ${String(climateCities.indexOf(city) + 1).padStart(2, "0")}`;

    document.getElementById("monitorCity").textContent = city.city;
    document.getElementById("monitorCountry").textContent = city.country;
    document.getElementById("monitorCoords").textContent =
        `${Math.abs(city.lat).toFixed(2)}° ${city.lat >= 0 ? "N" : "S"} / ${Math.abs(city.lon).toFixed(2)}° ${city.lon >= 0 ? "E" : "W"}`;
    document.getElementById("monitorRegion").textContent = city.region;

    ["monitorTemp", "monitorPast", "monitorFuture", "monitorDelta"].forEach(id => {
        document.getElementById(id).textContent = "...";
    });
    document.getElementById("monitorWeather").textContent = "CONSULTANDO OPEN-METEO...";
    document.getElementById("monitorRisk").textContent = city.risk;
    document.getElementById("monitorRiskText").textContent = city.riskText;
    document.getElementById("monitorContext").textContent = "Buscando dados climáticos atuais, históricos e projeções climáticas para esta localização...";

    document.getElementById("tagHeat").textContent = city.tags[0];
    document.getElementById("tagWater").textContent = city.tags[1] || "ÁGUA";
    document.getElementById("tagExtreme").textContent = city.tags[2] || "ADAPTAÇÃO";

    try {
        const data = await fetchClimateData(city);
        const deltaPast = data.current - data.past;
        const deltaFuture = data.future - data.current;

        document.getElementById("monitorTemp").textContent = `${data.current.toFixed(1)}°C`;
        document.getElementById("monitorWeather").textContent =
            `${data.weather.toUpperCase()} · SENSAÇÃO ${data.apparent.toFixed(1)}°C`;
        document.getElementById("monitorPast").textContent = `${data.past.toFixed(1)}°C`;
        document.getElementById("monitorFuture").textContent = `${data.future.toFixed(1)}°C`;
        document.getElementById("monitorDelta").textContent = `${deltaFuture >= 0 ? "+" : ""}${deltaFuture.toFixed(1)}°C`;

        document.getElementById("monitorContext").textContent =
            `${city.context} Hoje: umidade ${data.humidity.toFixed(0)}%, vento ${data.wind.toFixed(1)} km/h e precipitação ${data.precipitation.toFixed(1)} mm. A média histórica de ${data.pastYear} e a projeção média de ${data.futureYear} são calculadas a partir das séries da Open-Meteo.`;

        const liveLabel = document.querySelector(".monitor-live");
        if (liveLabel) {
            liveLabel.innerHTML = `<span class="status-dot"></span> DADOS AO VIVO <small>Open-Meteo · ${new Date(data.updatedAt).toLocaleString("pt-BR")}</small>`;
        }
    } catch (error) {
        console.error("Erro ao consultar Open-Meteo:", error);
        document.getElementById("monitorWeather").textContent = "ERRO AO CONSULTAR DADOS";
        document.getElementById("monitorContext").textContent =
            "Não foi possível consultar a API agora. Verifique sua conexão com a internet e tente selecionar o ponto novamente.";
    }
}

function resizeClimateGlobe() {
    if (!globeRenderer || !globeCamera) return;

    const container = document.getElementById("globeContainer");

    if (!container || !container.clientWidth || !container.clientHeight) return;

    globeCamera.aspect = container.clientWidth / container.clientHeight;
    globeCamera.updateProjectionMatrix();

    globeRenderer.setSize(
        container.clientWidth,
        container.clientHeight
    );
}

function animateClimateGlobe() {
    globeAnimationFrame = requestAnimationFrame(animateClimateGlobe);

    if (!globeRenderer || !globeScene || !globeCamera) return;

    if (!globeDrag && globeGroup) {
        globeGroup.rotation.y += .00055;
    }

    globeRenderer.render(globeScene, globeCamera);
}


/* ================= TECH CARDS ================= */

document.querySelectorAll(".tech-more").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".tech-card");

        const title = card.querySelector("h3").textContent;

        button.textContent = "✓ EXPLORANDO";

        setTimeout(() => {
            button.textContent = "EXPLORAR →";
        }, 1500);

        console.log("Tecnologia selecionada:", title);

    });

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {

    const nav = document.querySelector("nav");

    if (nav.style.display === "flex") {

        nav.style.display = "";

    } else {

        nav.style.display = "flex";

        nav.style.position = "fixed";
        nav.style.top = "78px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.background = "#050807";
        nav.style.padding = "30px";
        nav.style.flexDirection = "column";
        nav.style.borderBottom = "1px solid rgba(99,255,156,.15)";

    }

});


/* ================= EASTER EGG ================= */

let logoClicks = 0;

document.querySelector(".logo-symbol").addEventListener("click", () => {

    logoClicks++;

    if (logoClicks >= 5) {

        alert(
            "◉ SINAL DESCOBERTO\n\n" +
            "Agora procure uma solução,\n" +
            "não apenas um problema."
        );

        logoClicks = 0;

    }

});


/* ================= KEYBOARD ================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modal.classList.remove("active");
        monitorOverlay.classList.remove("active");

    }

});




/* ================= ACESSIBILIDADE EXTRA ================= */
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        if (modal) modal.classList.remove("active");
        if (techModal) techModal.classList.remove("active");
    }
});
