/* =========================================================
   BRASIL INTERATIVO
   ========================================================= */

const brazilInterface = document.getElementById("brazilInterface");
const regionInfo = document.getElementById("regionInfo");
const brazilRealShape = document.getElementById("brazilRealShape");
const brazilRegionsMap = document.getElementById("brazilRegionsMap");
const natureModal = document.getElementById("brazilNatureModal");
const closeBrazilModal = document.getElementById("closeBrazilModal");
const brazilModeToggle = document.getElementById("brazilModeToggle");
const brazilModalTitle = document.getElementById("brazilModalTitle");
const brazilModalKicker = document.getElementById("brazilModalKicker");
const brazilCarouselImage = document.getElementById("brazilCarouselImage");
const brazilCarouselCaption = document.getElementById("brazilCarouselCaption");
const brazilCarouselDots = document.getElementById("brazilCarouselDots");
const brazilPrev = document.getElementById("brazilPrev");
const brazilNext = document.getElementById("brazilNext");

// Estes textos são renderizados pelo estado da galeria, inclusive no idioma ativo.
[
    brazilModalKicker,
    brazilModalTitle,
    brazilModeToggle,
    brazilCarouselImage,
    brazilCarouselCaption,
    brazilCarouselDots
].forEach(element => element.setAttribute("data-i18n-skip", ""));

const BRAZIL_TOPO_URL =
    "https://cdn.jsdelivr.net/gh/betafcc/Brasil-Topojsons@master/min/regioes.topo.json";

const brazilRegionIds = {
    "1": "norte",
    "2": "nordeste",
    "3": "sudeste",
    "4": "sul",
    "5": "centro"
};

const fallbackBrazilImage =
    "https://cdn.sanity.io/images/71jmx9y3/production/8eb4b80573d4ce74e35d6f42c1515b09ac2832be-5426x3611.jpg?auto=format&fit=max&q=75&w=1600";

let currentRegion = "norte";
let selectedRegion = "";
let currentGalleryMode = "nature";
let currentSlide = 0;
let displayedSlideUrl = "";
let galleryPreloads = [];

function photo(url, caption) {
    return { url, caption };
}

function bt(text) {
    return window.CLIMATE13_I18N?.t(text) || text;
}

function regionTitle(region) {
    return bt(region.title);
}

function galleryModeLabel(mode) {
    return mode === "nature" ? bt("vida natural") : bt("impactos ambientais");
}

const regions = {
    norte: {
        code: "BR / NORTE",
        title: "Norte",
        text: "A Região Norte abriga a maior parte da Amazônia brasileira, uma das áreas mais importantes do planeta para biodiversidade, água, regulação do clima e culturas tradicionais.",
        tags: ["AMAZÔNIA", "RIOS VOADORES", "POVOS TRADICIONAIS"],
        stats: [
            ["BIOMAS", "Amazônia, Cerrado e áreas de transição"],
            ["IMPORTÂNCIA", "Regula chuvas e armazena carbono"],
            ["BIODIVERSIDADE", "Uma das maiores concentrações do mundo"],
            ["RISCO", "Desmatamento, fogo, seca e garimpo"]
        ],
        details: [
            ["ÁGUA", "A bacia amazônica influencia chuvas no Brasil e na América do Sul."],
            ["MUNDO", "A floresta ajuda a estabilizar o clima global e conservar espécies únicas."]
        ],
        galleries: {
            nature: [
                photo(
                    "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Amazon_CIAT_%285%29.jpg/960px-Amazon_CIAT_%285%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20130919122551",
                    "Floresta amazônica vista do alto, com cobertura preservada."
                ),
                photo(
                    "https://uselinus.com.br/cdn/shop/articles/34_844562e1-8641-416e-8502-0b1fb73f55e6.jpg?v=1789594265&width=1100",
                    "Floresta tropical densa e úmida, como a paisagem amazônica."
                ),
                photo(
                    "https://faunanews.com.br/wp-content/uploads/2023/01/Capa-1.jpg",
                    "Mata fechada e alta biodiversidade."
                ),
                photo(
                    "https://i0.wp.com/florestalbrasil.com/wp-content/uploads/2024/10/pantanal-do-mato-grosso_mata_ciliar.jpg?fit=650%2C450&ssl=1&utm_source=chatgpt.com",
                    "Rios e vegetação formando corredores ecológicos."
                )
            ],

            impact: [
                photo(
                    "https://images.openai.com/static-rsc-4/jwGIN1RqhhTCPhyL1uYP-heUCkwt-LWcizhUAelzkxtFX4YanCqr2zgzmDVd2NMbnc9uIhv77vAN9CcX997dHrGGxY1yay1izThkiQ1OPC34j_ntal4tCcpfdX39QM4wIZLn-bhaShiX4UxBcH3M41ZUR55jchT4EfkgrZuq3-ymEZHo4etAWM79uWhz1jud?purpose=fullsize",
                    "Garimpo e abertura de clareiras na floresta amazônica."
                ),
                photo(
                    "https://souecologico.com.br/site/assets/files/18934/secaamazonia.729x0-is.jpg",
                    "Paisagem seca, sinal de perda de umidade e estresse ambiental."
                ),
                photo(
                    "https://services.meteored.com/img/article/los-tropicos-lluviosos-podrian-enfrentar-sequias-sin-precedentes-con-la-desaceleracion-de-la-corriente-atlantica-1754881275239_1024.png",
                    "Céu carregado e extremos climáticos afetando ecossistemas."
                ),
                photo(
                    "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/6O4DHUAARFMKTKD5FXXYDLGKBY.jpg",
                    "Solo exposto e vegetação pressionada por degradação."
                )
            ]
        }
    },

    nordeste: {
        code: "BR / NORDESTE",
        title: "Nordeste",
        text: "O Nordeste combina Caatinga, Mata Atlântica, Cerrado e zonas costeiras. A Caatinga é exclusivamente brasileira e tem espécies adaptadas ao semiárido.",
        tags: ["CAATINGA", "SEMIÁRIDO", "LITORAL"],
        stats: [
            ["BIOMAS", "Caatinga, Mata Atlântica, Cerrado e manguezais"],
            ["IMPORTÂNCIA", "Resiliência à seca e diversidade cultural"],
            ["BIODIVERSIDADE", "Espécies adaptadas ao calor e pouca água"],
            ["RISCO", "Desertificação, seca, erosão costeira"]
        ],
        details: [
            ["ÁGUA", "A segurança hídrica depende de convivência com o semiárido e gestão de reservatórios."],
            ["MUNDO", "Mostra soluções de adaptação para regiões secas e vulneráveis."]
        ],
        galleries: {
            nature: [
                photo(
                    "https://upload.wikimedia.org/wikipedia/commons/a/ad/Manguezal_Pernambuco_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Manguezal no Nordeste, berçário natural de muitas espécies."
                ),
                photo(                          "https://upload.wikimedia.org/wikipedia/commons/2/29/Dunas_e_lagoas_nos_Len%C3%A7%C3%B3is_Maranhenses.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Dunas e paisagens costeiras parecidas com áreas do Nordeste brasileiro."
                ),
                photo(                  "https://sgb.gov.br/geossit/img/uploads/dado_grafico/thumb/grande/Vista_panoramica_aerea_do_geossitio_Recifes_de_Arenito_e_Corais_de_Porto_de_Galinhas.jpg",
                    "Litoral, recifes e ecossistemas costeiros sensíveis."
                ),
                photo(
                    "https://upload.wikimedia.org/wikipedia/commons/c/c0/Caatinga_-_Sert%C3%A3o_nordestino.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Paisagem seca parecida com áreas de Caatinga no semiárido."
                )
            ],

            impact: [
                photo(
                    "https://cdn.folhape.com.br/img/c/1200/900/dn_arquivo/2022/05/284627485-1432778860558673-6700554480095279334-n.jpg?utm_source=chatgpt.com",
                    "Chuvas extremas e enchentes no Nordeste."
                ),
                photo(
                    "https://upload.wikimedia.org/wikipedia/commons/c/ce/Auge_da_Seca.JPG?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Seca prolongada no semiárido."
                ),
                photo(
                    "https://upload.wikimedia.org/wikipedia/commons/7/7e/Rio_seco_na_Caatinga.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Solo ressecado e vegetação sob estresse hídrico."
                ),
                photo(
                    "https://s2.glbimg.com/K04iC3oEhtGI6xcanHAV2hN-iYA%3D/1600x0/smart/filters%3Astrip_icc%28%29/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/7/a/eSn56AShuBD4CUshL7bw/99358174-recife-pe-28-05-2022-alerta-de-fortes-chuvas-em-pernambuco-no-recife-a-chuva-teve-inici.jpg?utm_source=chatgpt.com",
                    "Tempestades fortes aumentam riscos urbanos e costeiros."
                )
            ]
        }
    },

    centro: {
        code: "BR / CENTRO-OESTE",
        title: "Centro-Oeste",
        text: "O Centro-Oeste concentra Cerrado e Pantanal. O Cerrado é berço de grandes bacias hidrográficas, e o Pantanal é a maior planície alagável tropical do mundo.",
        tags: ["CERRADO", "PANTANAL", "ÁGUA"],
        stats: [
            ["BIOMAS", "Cerrado, Pantanal e Amazônia no norte de MT"],
            ["IMPORTÂNCIA", "Nascentes, agricultura e planícies alagáveis"],
            ["BIODIVERSIDADE", "Savanas, veredas, aves, peixes e mamíferos"],
            ["RISCO", "Fogo, desmatamento e alteração das chuvas"]
        ],
        details: [
            ["ÁGUA", "O Cerrado alimenta bacias como Tocantins-Araguaia, São Francisco e Paraná."],
            ["MUNDO", "O Pantanal ajuda a regular ciclos de cheia e abriga fauna de importância global."]
        ],
        galleries: {
            nature: [
                photo(
                    "https://traveldojo.b-cdn.net/wikimedia/1590/1590285.webp?quality=78&width=1200&utm_source=chatgpt.com",
                    "Cerrado, savana brasileira rica em nascentes e espécies nativas."
                ),
                photo(
                    "https://upload.wikimedia.org/wikipedia/commons/9/94/On%C3%A7a-pintada_no_Porto_Jofre.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Onça-pintada, símbolo da fauna do Pantanal."
                ),
                photo(
                    "https://www.gov.br/ana/pt-br/imagens/imagens-das-regioes-hidrograficas/regiao-hidrografica-paraguai/parg_037-npa106-parque-nacional-do-pantanal-matogrossense-zig-koch.png/@@images/image",
                    "Áreas úmidas e corredores de água sustentam biodiversidade."
                ),
                photo(
                    "https://upload.wikimedia.org/wikipedia/commons/2/2c/Cerrado_-_Parque_Nacional_Chapada_dos_veadeiros_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Campos abertos e vegetação natural do interior."
                )
            ],

            impact: [
                photo(
                    "https://static.dw.com/image/46078521_803.jpg",
                    "Desmatamento e conversão de vegetação nativa no Cerrado."
                ),
                photo(
                    "https://f.i.uol.com.br/fotografia/2024/08/08/172312325066b4c632dfeef_1723123250_3x2_rt.jpg?utm_source=chatgpt.com",
                    "Incêndios no Pantanal durante períodos de seca extrema."
                ),
                photo(                    "https://s2.glbimg.com/FtYPAqTRy3l7Scc2K7OhQhjZMWw%3D/e.glbimg.com/og/ed/f/original/2020/09/09/50237264643_2f10a374b8_o.jpg?utm_source=chatgpt.com",
                    "Fogo e fumaça pressionando áreas úmidas."
                ),
                photo(
                    "https://ddc514qh7t05d.cloudfront.net/dA/8ab1e19de0c34645a679f3bdee7d7168/1000w/80q",
                    "Expansão agropecuária reduz habitats naturais."
                )
            ]
        }
    },

    sudeste: {
        code: "BR / SUDESTE",
        title: "Sudeste",
        text: "O Sudeste reúne grande população, indústria e fragmentos importantes de Mata Atlântica e Cerrado. É central para economia, energia, água e recuperação ambiental.",
        tags: ["MATA ATLÂNTICA", "CIDADES", "ÁGUA"],
        stats: [
            ["BIOMAS", "Mata Atlântica, Cerrado e áreas costeiras"],
            ["IMPORTÂNCIA", "Abastecimento, economia e restauração florestal"],
            ["BIODIVERSIDADE", "Alto endemismo em áreas muito pressionadas"],
            ["RISCO", "Calor urbano, enchentes, deslizamentos"]
        ],
        details: [
            ["ÁGUA", "Reservatórios e serras influenciam abastecimento de grandes metrópoles."],
            ["MUNDO", "A Mata Atlântica é hotspot global de biodiversidade e restauração."]
        ],
        galleries: {
            nature: [
                photo(
                    "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/PSX_20170623_124820.jpg/960px-PSX_20170623_124820.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
                    "Mata Atlântica, hotspot global de biodiversidade."
                ),
                photo(
                    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Cachoeira_Mata_Atl%C3%A2ntica_-_SP.JPG?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Cachoeiras e nascentes em florestas de serra."
                ),
                photo(
                    "https://upload.wikimedia.org/wikipedia/commons/a/a1/Serra_do_Mar_-_Mata_Atl%C3%A2ntica.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Floresta densa ajudando a regular água e temperatura."
                ),
                photo(
                    "https://www.jornalcruzeiro.com.br/_midias/jpg/2024/05/22/csa230524a003f01-1323906.jpg",
                    "Vales, rios e cobertura vegetal de montanha."
                )
            ],

            impact: [
                photo(
                    "https://smastr16.blob.core.windows.net/2001/sites/261/2023/03/recomposicao-florestal-destaq2-1024x576.jpg",
                    "Encostas e florestas pressionadas por chuva extrema e ocupação."
                ),
                photo(
                    "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/desastre-crise-climatica-petropolis-5.jpg?w=1600",
                    "Deslizamentos associados a temporais intensos."
                ),
                photo(
                    "https://offloadmedia.feverup.com/saopaulosecreto.com/wp-content/uploads/2020/02/28082248/%40ap.ferreira-2-1024x631.jpg",
                    "Tempestades severas em áreas urbanizadas."
                ),
                photo(
                    "https://www.observatoriodasmetropoles.net.br/wp-content/uploads/2019/03/alagamento-rj_tomaz-silva_agencia-brasil.jpg",
                    "Cidades densas ampliam ilhas de calor e enchentes."
                )
            ]
        }
    },

    sul: {
        code: "BR / SUL",
        title: "Sul",
        text: "A Região Sul concentra Pampa, Mata Atlântica e florestas com araucária. Campos, rios e produção agrícola convivem com enchentes, estiagens e temporais mais intensos.",
        tags: ["PAMPA", "ARAUCÁRIA", "ENCHENTES"],
        stats: [
            ["BIOMAS", "Pampa e Mata Atlântica"],
            ["IMPORTÂNCIA", "Campos nativos, rios e produção de alimentos"],
            ["BIODIVERSIDADE", "Espécies campestres e florestas de araucária"],
            ["RISCO", "Enchentes, estiagens, granizo e perda de campos"]
        ],
        details: [
            ["ÁGUA", "Bacias e planícies urbanas exigem drenagem, alerta e restauração de áreas naturais."],
            ["MUNDO", "O Pampa é uma paisagem campestre rara no Brasil e importante para carbono no solo."]
        ],
        galleries: {
            nature: [
                photo(
                    "https://upload.wikimedia.org/wikipedia/commons/9/98/Pampa_ga%C3%BAcho.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Campos do Pampa no Rio Grande do Sul."
                ),
                photo(
                    "https://upload.wikimedia.org/wikipedia/commons/f/fb/Rio_Uruguai_-_S%C3%A3o_Borja-RS.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Rios e vales do Sul, essenciais para abastecimento e agricultura."
                ),
                photo(
                    "https://upload.wikimedia.org/wikipedia/commons/1/11/Campos_de_cima_da_serra%2C_Rio_Grande_do_Sul.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Paisagens campestres e áreas naturais abertas."
                ),
                photo(                    "https://upload.wikimedia.org/wikipedia/commons/2/2a/Serra_do_Mar%2C_Mata_Atl%C3%A2ntica%2C_rio_e_ferrovia.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Florestas do Sul protegem encostas, água e biodiversidade."
                )
            ],

            impact: [
                photo(                    "https://upload.wikimedia.org/wikipedia/commons/8/83/Enchentes_causam_estragos_em_bairros_de_S%C3%A3o_Leopoldo_-_Rio_Grande_do_Sul_%2853846172413%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Enchentes severas no Rio Grande do Sul."
                ),
                photo(
                    "https://upload.wikimedia.org/wikipedia/commons/3/3c/IBPA_134142_-_Centro_Hist%C3%B3rico_de_Porto_Alegre_alagado_pela_-_2024-05-05_-_Gustavo_Garbino-PMPA.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
                    "Cheia do Guaíba durante evento extremo."
                ),
                photo(                    "https://bancodeimagens.portoalegre.rs.gov.br/sites/default/files/styles/img_m/public/2024/05/10/20240506_Julio%20Ferreira_001.jpg",
                    "Temporais mais intensos elevam riscos de danos e alagamentos."
                ),
                photo(
                    "https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrxwvt1bpmm/b/wp-extraclasse-uploads/o/uploads/2025/03/O-avanco-da-soja-sobre-o-Pampa-acelera-a-extincao-do-gaucho-7-Foto-Marcelo-Camargo-Agencia-Brasil.webp?utm_source=chatgpt.com",
                    "Conversão de campos nativos para uso agropecuário."
                )
            ]
        }
    }
};

function collectCoordinates(coordinates, result = []) {
    if (
        Array.isArray(coordinates) &&
        typeof coordinates[0] === "number" &&
        typeof coordinates[1] === "number"
    ) {
        result.push(coordinates);
        return result;
    }

    if (Array.isArray(coordinates)) {
        coordinates.forEach(item => collectCoordinates(item, result));
    }

    return result;
}

function ringToSvgPath(ring, project) {
    if (!ring.length) return "";

    return ring
        .map((point, index) => {
            const [x, y] = project(point);

            return index === 0
                ? `M ${x.toFixed(2)} ${y.toFixed(2)}`
                : `L ${x.toFixed(2)} ${y.toFixed(2)}`;
        })
        .join(" ") + " Z";
}

function geometryToSvgPath(geometry, project) {
    if (!geometry) return "";

    if (geometry.type === "Polygon") {
        return geometry.coordinates
            .map(ring => ringToSvgPath(ring, project))
            .join(" ");
    }

    if (geometry.type === "MultiPolygon") {
        return geometry.coordinates
            .map(
                polygon =>
                    polygon
                        .map(ring => ringToSvgPath(ring, project))
                        .join(" ")
            )
            .join(" ");
    }

    return "";
}

async function buildBrazilMap() {
    try {
        if (!window.topojson) {
            throw new Error("Biblioteca TopoJSON não carregou.");
        }

        const response = await fetch(
            BRAZIL_TOPO_URL,
            {
                cache: "force-cache"
            }
        );

        if (!response.ok) {
            throw new Error("Não foi possível carregar o mapa.");
        }

        const topology = await response.json();

        const objectName =
            Object.keys(topology.objects)[0];

        const geoData =
            topojson.feature(
                topology,
                topology.objects[objectName]
            );

        const features =
            geoData.type === "FeatureCollection"
                ? geoData.features
                : [geoData];

        const allPoints = [];

        features.forEach(feature => {
            collectCoordinates(
                feature.geometry.coordinates,
                allPoints
            );
        });

        if (!allPoints.length) {
            throw new Error("O mapa não possui coordenadas.");
        }

        const longitudes =
            allPoints.map(point => point[0]);

        const latitudes =
            allPoints.map(point => point[1]);

        const minLon = Math.min(...longitudes);
        const maxLon = Math.max(...longitudes);
        const minLat = Math.min(...latitudes);
        const maxLat = Math.max(...latitudes);

        const viewWidth = 760;
        const viewHeight = 760;
        const padding = 34;

        const usableWidth =
            viewWidth - padding * 2;

        const usableHeight =
            viewHeight - padding * 2;

        const geographicWidth =
            maxLon - minLon;

        const geographicHeight =
            maxLat - minLat;

        const scale =
            Math.min(
                usableWidth / geographicWidth,
                usableHeight / geographicHeight
            );

        const mapWidth =
            geographicWidth * scale;

        const mapHeight =
            geographicHeight * scale;

        const offsetX =
            (viewWidth - mapWidth) / 2;

        const offsetY =
            (viewHeight - mapHeight) / 2;

        function project(point) {
            const longitude = point[0];
            const latitude = point[1];

            return [
                offsetX +
                    (longitude - minLon) *
                    scale,

                offsetY +
                    (maxLat - latitude) *
                    scale
            ];
        }

        brazilRegionsMap.innerHTML = "";

        const svgNamespace =
            "http://www.w3.org/2000/svg";

        features.forEach(feature => {
            const regionKey =
                brazilRegionIds[
                    String(feature.id)
                ];

            if (!regionKey) return;

            const path =
                document.createElementNS(
                    svgNamespace,
                    "path"
                );

            path.setAttribute(
                "d",
                geometryToSvgPath(
                    feature.geometry,
                    project
                )
            );

            path.setAttribute(
                "class",
                "brazil-region-path"
            );

            path.setAttribute(
                "data-region",
                regionKey
            );

            path.setAttribute(
                "fill-rule",
                "evenodd"
            );

            path.setAttribute(
                "tabindex",
                "0"
            );

            path.setAttribute(
                "role",
                "button"
            );

            path.setAttribute(
                "aria-label",
                regionTitle(regions[regionKey])
            );

            path.addEventListener(
                "mouseenter",
                () => {
                    setActiveRegion(regionKey);
                }
            );

            path.addEventListener(
                "mouseleave",
                () => {
                    setActiveRegion(selectedRegion);
                }
            );

            path.addEventListener(
                "click",
                () => {
                    renderRegion(regionKey);
                }
            );

            path.addEventListener(
                "keydown",
                event => {
                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {
                        event.preventDefault();
                        renderRegion(regionKey);
                    }
                }
            );

            brazilRegionsMap.appendChild(path);
        });

        brazilRealShape.classList.add(
            "map-ready"
        );

        brazilRealShape.classList.remove(
            "map-error"
        );
    }

    catch (error) {
        console.error(
            "Erro no mapa do Brasil:",
            error
        );

        brazilRealShape.classList.add(
            "map-error"
        );
    }
}

function setActiveRegion(regionKey = "") {
    const paths =
        brazilRegionsMap.querySelectorAll(
            ".brazil-region-path"
        );

    paths.forEach(path => {
        path.classList.toggle(
            "active",

            Boolean(regionKey) &&
            path.dataset.region ===
                regionKey
        );
    });

    brazilRegionsMap.classList.toggle(
        "has-active",
        Boolean(regionKey)
    );
}

function renderRegion(regionKey) {
    const data =
        regions[regionKey];

    if (!data) return;

    if (currentRegion !== regionKey) {
        currentGalleryMode = "nature";
        currentSlide = 0;
    }

    currentRegion =
        regionKey;

    selectedRegion =
        regionKey;

    brazilInterface.classList.add(
        "has-selection"
    );

    setActiveRegion(regionKey);

    const gridItems = [
        ...data.stats,
        ...data.details
    ];

    regionInfo.innerHTML = `

        <span class="region-code">
            ${data.code}
        </span>

        <h3>
            ${regionTitle(data)}
        </h3>

        <p>
            ${bt(data.text)}
        </p>

        <div class="region-tags">

            ${data.tags
                .map(
                    tag =>
                        `<span>${bt(tag)}</span>`
                )
                .join("")}

        </div>

        <div class="region-grid">

            ${gridItems
                .map(
                    item => `
                        <div class="region-grid-item">

                            <span>
                                ${bt(item[0])}
                            </span>

                            <strong>
                                ${bt(item[1])}
                            </strong>

                        </div>
                    `
                )
                .join("")}

        </div>

        <button
            class="region-explore-btn"
            id="exploreRegion"
            type="button"
        >
            ${bt("EXPLORAR")}
        </button>

    `;

    document
        .getElementById(
            "exploreRegion"
        )
        .addEventListener(
            "click",
            openBrazilModal
        );

}

function openBrazilModal() {
    currentGalleryMode =
        "nature";

    currentSlide = 0;

    natureModal.classList.add(
        "active"
    );

    natureModal.setAttribute(
        "aria-hidden",
        "false"
    );

    renderBrazilCarousel();
    preloadBrazilGallery();
}

function closeModal() {
    natureModal.classList.remove(
        "active"
    );

    natureModal.setAttribute(
        "aria-hidden",
        "true"
    );
}

function getCurrentGallery() {
    return regions[currentRegion]
        .galleries[currentGalleryMode];
}

function preloadBrazilGallery() {
    galleryPreloads = getCurrentGallery().map(slide => {
        const image = new Image();
        image.src = slide.url;
        return image;
    });
}

function renderBrazilCarousel() {
    const region =
        regions[currentRegion];

    const gallery =
        getCurrentGallery();

    const slide =
        gallery[currentSlide];

    brazilModalKicker.textContent =
        currentGalleryMode === "nature"
            ? bt("NATUREZA PRESERVADA")
            : bt("IMPACTOS E DEGRADAÇÃO");

    brazilModalTitle.textContent =
        `${regionTitle(region)} // ${galleryModeLabel(currentGalleryMode)}`;

    brazilModeToggle.textContent =
        currentGalleryMode === "nature"
            ? bt("Ver impactos")
            : bt("Ver vida natural");

    brazilCarouselImage.alt =
        bt(slide.caption);

    if (displayedSlideUrl !== slide.url) {
        displayedSlideUrl = slide.url;
        brazilCarouselImage.onerror = () => {
            brazilCarouselImage.onerror = null;
            brazilCarouselImage.src = fallbackBrazilImage;
        };
        brazilCarouselImage.src = slide.url;
    }

    brazilCarouselCaption.textContent =
        bt(slide.caption);

    if (brazilCarouselDots.children.length !== gallery.length) {
        brazilCarouselDots.innerHTML = gallery
            .map(() => '<button type="button"></button>')
            .join("");
    }

    Array.from(brazilCarouselDots.children).forEach((button, index) => {
        button.classList.toggle("active", index === currentSlide);
        button.setAttribute("aria-label", `${bt("Foto")} ${index + 1}`);
        button.setAttribute("aria-current", index === currentSlide ? "true" : "false");
    });

}

brazilCarouselDots.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button || !brazilCarouselDots.contains(button)) return;

    currentSlide = Array.from(brazilCarouselDots.children).indexOf(button);
    renderBrazilCarousel();
});

function moveBrazilSlide(direction) {
    const gallery =
        getCurrentGallery();

    currentSlide =
        (
            currentSlide +
            direction +
            gallery.length
        ) %
        gallery.length;

    renderBrazilCarousel();
}

brazilModeToggle.addEventListener(
    "click",
    () => {

        currentGalleryMode =
            currentGalleryMode ===
            "nature"
                ? "impact"
                : "nature";

        currentSlide = 0;

        renderBrazilCarousel();
        preloadBrazilGallery();
    }
);

brazilPrev.addEventListener(
    "click",
    () => {
        moveBrazilSlide(-1);
    }
);

brazilNext.addEventListener(
    "click",
    () => {
        moveBrazilSlide(1);
    }
);

closeBrazilModal.addEventListener(
    "click",
    closeModal
);

natureModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            natureModal
        ) {
            closeModal();
        }
    }
);

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            natureModal.classList.contains(
                "active"
            )
        ) {
            closeModal();
        }
    }
);

buildBrazilMap();

window.addEventListener("climate13:languagechange", () => {
    if (currentRegion) {
        renderRegion(currentRegion);
    }

    if (natureModal.classList.contains("active")) {
        renderBrazilCarousel();
    }

    brazilRegionsMap.querySelectorAll(".brazil-region-path").forEach(path => {
        const region = regions[path.dataset.region];
        if (region) path.setAttribute("aria-label", regionTitle(region));
    });
});
