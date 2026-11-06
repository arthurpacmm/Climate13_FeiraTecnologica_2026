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

    window.CLIMATE13_I18N?.refresh(document.getElementById("cityGame"));

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

    window.CLIMATE13_I18N?.refresh(cityResult);


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

