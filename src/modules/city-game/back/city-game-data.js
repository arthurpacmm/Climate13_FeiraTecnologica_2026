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


