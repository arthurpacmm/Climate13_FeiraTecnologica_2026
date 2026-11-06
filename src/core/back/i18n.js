/* ================= IDIOMA ================= */

(() => {
    const STORAGE_KEY = "climate13-language";
    const textBindings = [];
    const elementBindings = [];
    const attrBindings = [];
    const boundTextNodes = new WeakSet();
    const boundElementNodes = new WeakSet();
    const boundAttrNodes = new WeakMap();
    const savedLang = localStorage.getItem(STORAGE_KEY);
    let currentLang = savedLang === "pt" || savedLang === "en" ? savedLang : "en";
    let applying = false;

    const en = {
        "ONU": "UN",
        "ODS 13 / 2026": "SDG 13 / 2026",
        "Tem alguma dúvida ou sugestão sobre o Climate/13? Envie sua mensagem pelo formulário abaixo. Nossa equipe responderá em até 48 horas.": "Have a question or suggestion about Climate/13? Send us a message using the form below. Our team will reply within 48 hours.",
        "CORRIJA OS CAMPOS": "CHECK THE FIELDS",
        "ENVIANDO...": "SENDING...",
        "ENVIANDO": "SENDING",
        "ENVIADO": "SENT",
        "ERRO NO ENVIO": "SEND FAILED",
        "Não foi possível enviar agora. Tente novamente em instantes ou escreva diretamente para climate13.etecmcm@gmail.com.": "Your message could not be sent. Please try again shortly or email climate13.etecmcm@gmail.com directly.",
        "Nova mensagem — site Climate/13": "New message — Climate/13 website",
        "Abrir menu": "Open menu",
        "E-MAIL": "EMAIL",

        "INICIALIZANDO SISTEMA CLIMÁTICO...": "INITIALIZING CLIMATE SYSTEM...",
        "Projeto": "Project",
        "ODS 13": "SDG 13",
        "O problema": "The problem",
        "Brasil": "Brazil",
        "Soluções": "Solutions",
        "Tecnologia": "Technology",
        "Desafio": "Challenge",
        "Contato": "Contact",
        "MONITORAMENTO": "MONITORING",
        "VOLTAR AO SITE": "BACK TO SITE",
        "Voltar ao topo": "Back to top",

        "OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL": "SUSTAINABLE DEVELOPMENT GOALS",
        "E SE O": "WHAT IF THE",
        "FUTURO": "FUTURE",
        "COMEÇASSE": "STARTED",
        "AGORA?": "NOW?",
        "A mudança climática não é apenas uma ameaça distante. É uma realidade que já está transformando o planeta.": "Climate change is not just a distant threat. It is a reality already transforming the planet.",
        "EXPLORAR O FUTURO": "EXPLORE THE FUTURE",
        "CONHEÇA NOSSA EQUIPE": "MEET OUR TEAM",
        "ACEITAR DESAFIO": "TAKE THE CHALLENGE",
        "SCROLL PARA EXPLORAR": "SCROLL TO EXPLORE",
        "OBJETIVO": "GOAL",
        "FOCO": "FOCUS",
        "AÇÃO CLIMÁTICA": "CLIMATE ACTION",
        "ESCALA": "SCALE",
        "GLOBAL": "GLOBAL",
        "TEMPERATURA": "TEMPERATURE",
        "CO₂ ATMOSFÉRICO": "ATMOSPHERIC CO₂",
        "STATUS": "STATUS",
        "ATENÇÃO": "WARNING",

        "00 / PROJETO": "00 / PROJECT",
        "Projeto de": "Technology fair",
        "feira tecnológica.": "project.",
        "O CLIMATE/13 é uma experiência interativa criada por estudantes da Etec Profª Maria Cristina Medeiros, em Ribeirão Pires, para explicar o ODS 13 usando dados, visualização e tecnologia.": "CLIMATE/13 is an interactive experience created by students from Etec Profª Maria Cristina Medeiros, in Ribeirão Pires, to explain SDG 13 using data, visualization and technology.",
        "ROTEIRO DA APRESENTAÇÃO": "PRESENTATION ROUTE",
        "VER MONITORAMENTO": "OPEN MONITORING",
        "ESCOLA": "SCHOOL",
        "ETEC MCM": "ETEC MCM",
        "Centro Paula Souza · Ribeirão Pires/SP": "Centro Paula Souza · Ribeirão Pires/SP",
        "TEMA": "TOPIC",
        "Ação contra a mudança global do clima.": "Climate action against global climate change.",
        "TECNOLOGIAS": "TECHNOLOGIES",
        "Dados + Web": "Data + Web",
        "API climática, gráficos, globo 3D e simulação.": "Climate API, charts, 3D globe and simulation.",
        "EXPERIÊNCIA": "EXPERIENCE",
        "Interativa": "Interactive",
        "Explore, responda, simule e compare escolhas.": "Explore, answer, simulate and compare choices.",
        "4 passos para entender o projeto": "4 steps to understand the project",
        "Entender": "Understand",
        "Comece pelo ODS 13 e pelo problema climático.": "Start with SDG 13 and the climate problem.",
        "Explorar": "Explore",
        "Veja sinais, impactos e dados do Brasil.": "See signs, impacts and data from Brazil.",
        "Interagir": "Interact",
        "Use o quiz, a simulação e o monitoramento.": "Use the quiz, simulation and monitoring.",
        "Agir": "Act",
        "Compare soluções e feche com ações práticas.": "Compare solutions and finish with practical actions.",

        "01 / O FUTURO": "01 / THE FUTURE",
        "Uma linha do tempo": "A timeline",
        "do impacto humano.": "of human impact.",
        "De 1492 a 2100, veja como revoluções, indústrias, tecnologias e decisões políticas mudaram a relação entre sociedade e meio ambiente.": "From 1492 to 2100, see how revolutions, industries, technologies and political decisions changed the relationship between society and the environment.",
        "ARQUIVO // LINHA DO TEMPO AMBIENTAL": "ARCHIVE // ENVIRONMENTAL TIMELINE",
        "ESCALA DA TRANSFORMAÇÃO": "SCALE OF TRANSFORMATION",

        "02 / ODS 13": "02 / SDG 13",
        "Uma meta para": "A goal for",
        "um planeta possível.": "a possible planet.",
        "O ODS 13 faz parte da Agenda 2030 da ONU. Ele mostra que enfrentar a crise climática depende de ciência, tecnologia, educação e decisões públicas bem planejadas.": "SDG 13 is part of the UN 2030 Agenda. It shows that facing the climate crisis depends on science, technology, education and well-planned public decisions.",
        "AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA": "CLIMATE ACTION",
        "Tomar medidas urgentes para combater a mudança do clima e seus impactos.": "Take urgent action to combat climate change and its impacts.",
        "A proposta vai além de preservar áreas verdes. Ela envolve reduzir emissões, preparar cidades para eventos extremos, usar dados para prever riscos e ampliar a educação climática.": "The proposal goes beyond preserving green areas. It involves reducing emissions, preparing cities for extreme events, using data to predict risks and expanding climate education.",
        "AGENDA": "AGENDA",
        "meta global da Agenda da ONU": "UN Agenda global target",
        "PARIS": "PARIS",
        "referência de segurança climática": "climate safety reference",
        "AÇÃO": "ACTION",
        "agora": "now",
        "mitigação + adaptação": "mitigation + adaptation",
        "Mitigação": "Mitigation",
        "Reduzir emissões na energia, no transporte, na produção e no uso do solo.": "Reduce emissions in energy, transport, production and land use.",
        "Na prática": "In practice",
        "Trocar combustíveis fósseis por fontes renováveis, aumentar eficiência energética, reduzir desperdício e proteger áreas que capturam carbono.": "Replace fossil fuels with renewables, increase energy efficiency, reduce waste and protect carbon-capturing areas.",
        "Adaptação": "Adaptation",
        "Preparar pessoas, cidades e infraestrutura para enchentes, calor extremo, secas e deslizamentos.": "Prepare people, cities and infrastructure for floods, extreme heat, droughts and landslides.",
        "Criar drenagem urbana, alertas de risco, sombra nas ruas, planos de evacuação e infraestrutura capaz de continuar funcionando durante eventos extremos.": "Create urban drainage, risk alerts, street shade, evacuation plans and infrastructure able to keep working during extreme events.",
        "Educação": "Education",
        "Transformar dados e ciência em linguagem clara para escolas, governos e comunidades.": "Turn data and science into clear language for schools, governments and communities.",
        "Ensinar ciência climática, interpretar dados, combater desinformação e treinar pessoas para responder melhor a enchentes, ondas de calor e secas.": "Teach climate science, interpret data, fight misinformation and train people to respond better to floods, heat waves and droughts.",
        "Cooperação": "Cooperation",
        "Compartilhar tecnologia, financiamento e conhecimento para proteger regiões mais vulneráveis.": "Share technology, funding and knowledge to protect more vulnerable regions.",
        "Unir governos, ciência, empresas e comunidades para financiar soluções, transferir tecnologia limpa e apoiar regiões vulneráveis.": "Bring governments, science, companies and communities together to fund solutions, transfer clean technology and support vulnerable regions.",
        "METAS DO ODS 13": "SDG 13 TARGETS",
        "Fortalecer resiliência e capacidade de adaptação a riscos climáticos e desastres naturais.": "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters.",
        "Integrar medidas climáticas em políticas, estratégias e planejamentos nacionais.": "Integrate climate measures into policies, strategies and national planning.",
        "Ampliar educação, conscientização, capacidade humana e alertas sobre mudança do clima.": "Improve education, awareness, human capacity and warnings on climate change.",

        "03 / SINAIS": "03 / SIGNS",
        "O planeta está": "The planet is",
        "dando sinais.": "sending signals.",
        "Atualizando sinais climáticos...": "Updating climate signals...",
        "TEMPERATURA GLOBAL": "GLOBAL TEMPERATURE",
        "O aquecimento global intensifica ondas de calor, chuvas extremas e secas. A meta de 1,5°C é um limite de segurança climática, não uma zona confortável.": "Global warming intensifies heat waves, extreme rainfall and droughts. The 1.5°C target is a climate safety limit, not a comfortable zone.",
        "IPCC · tendência global": "IPCC · global trend",
        "Mais CO₂ prende mais calor na atmosfera. A curva segue subindo porque emissões de energia, transporte e uso do solo ainda superam a remoção natural.": "More CO₂ traps more heat in the atmosphere. The curve keeps rising because emissions from energy, transport and land use still exceed natural removal.",
        "Fonte: NOAA": "Source: NOAA",
        "OCEANOS": "OCEANS",
        "NÍVEL DO MAR": "SEA LEVEL",
        "Oceanos absorvem calor, expandem e recebem água do gelo continental. Isso aumenta risco em cidades costeiras.": "Oceans absorb heat, expand and receive water from land ice. This increases risk in coastal cities.",
        "Fonte: NASA": "Source: NASA",

        "04 / IMPACTO": "04 / IMPACT",
        "Não é só sobre": "It is not only about",
        "o planeta.": "the planet.",
        "A crise climática aparece no cotidiano: no calor, na água, nos alimentos, na saúde e no planejamento das cidades.": "The climate crisis appears in daily life: in heat, water, food, health and city planning.",
        "Sociedade": "Society",
        "Quem tem menos estrutura sente primeiro os efeitos dos eventos extremos.": "Those with less infrastructure feel extreme events first.",
        "Água": "Water",
        "Secas e chuvas fortes pressionam abastecimento, drenagem e qualidade.": "Droughts and heavy rains pressure supply, drainage and quality.",
        "Agricultura": "Agriculture",
        "Temperatura e chuva influenciam safras, preço dos alimentos e renda.": "Temperature and rainfall affect crops, food prices and income.",
        "Saúde": "Health",
        "Calor, enchentes e fumaça aumentam riscos para crianças e idosos.": "Heat, floods and smoke increase risks for children and older people.",
        "Cidades": "Cities",
        "Mobilidade, drenagem, moradia e energia precisam resistir melhor.": "Mobility, drainage, housing and energy need to become more resilient.",
        "Biodiversidade": "Biodiversity",
        "Ecossistemas perdem equilíbrio quando clima e território mudam rápido.": "Ecosystems lose balance when climate and territory change quickly.",

        "05 / BRASIL": "05 / BRAZIL",
        "E o": "What about",
        "Brasil?": "Brazil?",
        "Passe o mouse pelas regiões e clique para ver biomas, biodiversidade, importância ecológica e riscos climáticos.": "Hover over the regions and click to see biomes, biodiversity, ecological importance and climate risks.",
        "PASSE O MOUSE E SELECIONE UMA REGIÃO": "HOVER AND SELECT A REGION",
        "Mapa do Brasil dividido por regiões": "Map of Brazil divided by regions",
        "Mapa do Brasil": "Map of Brazil",
        "Fechar galeria": "Close gallery",
        "Imagem anterior": "Previous image",
        "Próxima imagem": "Next image",

        "06 / SOLUÇÕES": "06 / SOLUTIONS",
        "O futuro ainda": "The future can still",
        "pode ser diferente.": "be different.",
        "Soluções climáticas combinam tecnologia, planejamento e mudança de comportamento. O importante é reduzir o problema e, ao mesmo tempo, preparar a sociedade para seus impactos.": "Climate solutions combine technology, planning and behavior change. The key is reducing the problem while preparing society for its impacts.",
        "MITIGAÇÃO": "MITIGATION",
        "Reduzir": "Reduce",
        "o problema.": "the problem.",
        "Mitigação é atacar a causa: diminuir emissões e proteger sistemas naturais que ajudam a regular o clima.": "Mitigation means attacking the cause: lowering emissions and protecting natural systems that help regulate climate.",
        "Energia renovável e eficiência energética": "Renewable energy and energy efficiency",
        "Transporte público, ciclovias e mobilidade limpa": "Public transport, bike lanes and clean mobility",
        "Proteção de florestas e áreas verdes": "Protection of forests and green areas",
        "Produção com menos desperdício": "Production with less waste",
        "Dados para medir emissões e acompanhar metas": "Data to measure emissions and track goals",
        "ADAPTAÇÃO": "ADAPTATION",
        "Preparar-se": "Prepare",
        "para o impacto.": "for impact.",
        "Adaptação é reduzir danos: preparar bairros, escolas, serviços públicos e infraestrutura para eventos extremos.": "Adaptation means reducing damage: preparing neighborhoods, schools, public services and infrastructure for extreme events.",
        "Sistemas de alerta com previsão e sensores": "Alert systems with forecasting and sensors",
        "Drenagem, sombra e áreas permeáveis": "Drainage, shade and permeable areas",
        "Gestão inteligente da água": "Smart water management",
        "Mapeamento de risco e planejamento urbano": "Risk mapping and urban planning",
        "Proteção de comunidades vulneráveis": "Protection of vulnerable communities",

        "07 / TECNOLOGIA": "07 / TECHNOLOGY",
        "A tecnologia": "Technology",
        "pode ajudar.": "can help.",
        "O projeto mostra como dados, APIs, sensores, imagens e sistemas interativos podem transformar ciência climática em informação fácil de apresentar.": "The project shows how data, APIs, sensors, images and interactive systems can turn climate science into easy-to-present information.",
        "Inteligência Artificial": "Artificial Intelligence",
        "Analisa grandes volumes de dados e identifica padrões que ajudam na previsão de riscos.": "Analyzes large volumes of data and identifies patterns that help predict risks.",
        "Satélites": "Satellites",
        "Observam atmosfera, oceanos, florestas e cidades em escalas impossíveis apenas no solo.": "Observe the atmosphere, oceans, forests and cities at scales impossible from the ground alone.",
        "Energia Solar": "Solar Energy",
        "Gera eletricidade limpa e reduz dependência de fontes que liberam gases de efeito estufa.": "Generates clean electricity and reduces dependence on sources that release greenhouse gases.",
        "Cidades Inteligentes": "Smart Cities",
        "Usam sensores, mapas e dados para melhorar mobilidade, água, energia e alertas.": "Use sensors, maps and data to improve mobility, water, energy and alerts.",
        "EXPLORAR →": "EXPLORE →",
        "⚠ IMPORTANTE": "⚠ IMPORTANT",
        "Tecnologia é ferramenta.": "Technology is a tool.",
        "A escolha é nossa.": "The choice is ours.",

        "08 / ESCOLHAS": "08 / CHOICES",
        "Você pode": "You can",
        "mudar o futuro.": "change the future.",
        "Grandes transformações dependem de decisões individuais, coletivas, políticas e econômicas.": "Major transformations depend on individual, collective, political and economic decisions.",
        "ESCOLHA": "CHOICE",
        "Carregando pergunta...": "Loading question...",
        "REFAZER ESCOLHAS": "RESTART CHOICES",

        "09 / SIMULAÇÃO": "09 / SIMULATION",
        "Cidade": "City",
        "Você recebeu o controle do planejamento climático de uma cidade. O orçamento é limitado: cada decisão traz benefícios, custos e consequências. Escolha com cuidado e descubra como sua cidade chega em 2040.": "You control the climate planning of a city. The budget is limited: each decision has benefits, costs and consequences. Choose carefully and discover how your city reaches 2040.",
        "SISTEMA // PLANEJAMENTO URBANO": "SYSTEM // URBAN PLANNING",
        "CIDADE 2035": "CITY 2035",
        "RECURSOS DISPONÍVEIS": "AVAILABLE RESOURCES",
        "EMISSÕES": "EMISSIONS",
        "MENOR É MELHOR": "LOWER IS BETTER",
        "RESILIÊNCIA": "RESILIENCE",
        "PREPARO CONTRA EVENTOS EXTREMOS": "PREPARATION AGAINST EXTREME EVENTS",
        "SEGURANÇA HÍDRICA": "WATER SECURITY",
        "POPULAÇÃO": "POPULATION",
        "BEM-ESTAR E QUALIDADE DE VIDA": "WELL-BEING AND QUALITY OF LIFE",
        "ECONOMIA": "ECONOMY",
        "ATIVIDADE ECONÔMICA": "ECONOMIC ACTIVITY",
        "SAÚDE DOS ECOSSISTEMAS": "ECOSYSTEM HEALTH",
        "SUAS DECISÕES": "YOUR DECISIONS",
        "Você começa com 100 CR. Não existe limite de projetos, mas decisões confirmadas não podem ser desfeitas. Escolhas azuis e laranjas geram CR e só podem ser usadas 3 vezes.": "You start with 100 CR. There is no project limit, but confirmed decisions cannot be undone. Blue and orange choices generate CR and can only be used 3 times.",
        "DECISÕES TOMADAS": "DECISIONS MADE",
        "← COM O MOUSE SOBRE OS CARDS: RODE PARA ESQUERDA OU DIREITA →": "← WITH THE MOUSE OVER THE CARDS: SCROLL LEFT OR RIGHT →",
        "SIMULAR 2040": "SIMULATE 2040",
        "⚠ EVENTO CLIMÁTICO DETECTADO": "⚠ CLIMATE EVENT DETECTED",
        "RESULTADO // CIDADE 2040": "RESULT // CITY 2040",
        "RESPOSTA AO EVENTO": "EVENT RESPONSE",
        "ÍNDICE GERAL": "GENERAL INDEX",
        "NOVA SIMULAÇÃO": "NEW SIMULATION",

        "10 / EQUIPE": "10 / TEAM",
        "Conheça nossa": "Meet our",
        "equipe.": "team.",
        "ETEC MCM · TECNOLOGIA": "ETEC MCM · TECHNOLOGY",
        "ETEC MCM · TECNOLOGIA E HARDWARE": "ETEC MCM · TECHNOLOGY AND HARDWARE",
        "ETEC MCM · DESENVOLVIMENTO WEB": "ETEC MCM · WEB DEVELOPMENT",
        "ETEC MCM · TECNOLOGIA E COMPOSIÇÃO": "ETEC MCM · TECHNOLOGY AND COMPOSITION",
        "ETEC MCM · INFORMÁTICA E DESENVOLVIMENTO": "ETEC MCM · COMPUTING AND DEVELOPMENT",
        "ETEC MCM · INFORMÁTICA PARA INTERNET": "ETEC MCM · INTERNET COMPUTING",
        "ETEC MCM · TECNOLOGIA E PRODUÇÃO": "ETEC MCM · TECHNOLOGY AND PRODUCTION",
        "ETEC MCM · TECNOLOGIA E CRIAÇÃO": "ETEC MCM · TECHNOLOGY AND CREATION",
        "ETEC MCM · INFORMÁTICA": "ETEC MCM · COMPUTING",
        "ETEC MCM · TECNOLOGIA DA INFORMAÇÃO": "ETEC MCM · INFORMATION TECHNOLOGY",
        "Contribuições": "Contributions",
        "Estudante da ETEC MCM, interessado em hardware, desenvolvimento e projetos tecnológicos aplicados.": "ETEC MCM student interested in hardware, development and applied technology projects.",
        "Estudante curioso e proativo, com interesse em inteligência artificial, idiomas, cibersegurança e desenvolvimento web.": "Curious and proactive student interested in artificial intelligence, languages, cybersecurity and web development.",
        "Estudante da área de TI, com perfil criativo e interesse em tecnologia, música e desenvolvimento de novas habilidades.": "IT student with a creative profile and interest in technology, music and new skills.",
        "Estudante de Informática na ETEC MCM, com interesse em inteligência artificial e desenvolvimento de projetos em equipe.": "Computing student at ETEC MCM interested in artificial intelligence and team projects.",
        "Estudante dedicado ao desenvolvimento técnico, com foco em aprendizado, produtividade e contribuição em projetos de tecnologia.": "Student dedicated to technical development, focused on learning, productivity and contribution to technology projects.",
        "Estudante da ETEC MCM, interessado em seguir na área de tecnologia e construir projetos práticos durante a formação.": "ETEC MCM student interested in pursuing technology and building practical projects during training.",

        "SISTEMA CLIMÁTICO // REFLEXÃO FINAL": "CLIMATE SYSTEM // FINAL REFLECTION",
        "Não existe": "There is no",
        "planeta B.": "planet B.",
        "Mas ainda existem escolhas.": "But choices still exist.",
        "O FUTURO COMEÇA NAS DECISÕES QUE TOMAMOS HOJE.": "THE FUTURE STARTS WITH THE DECISIONS WE MAKE TODAY.",
        "O QUE DÁ PARA FAZER AGORA?": "WHAT CAN WE DO NOW?",
        "Reduzir desperdício de energia, água e materiais no dia a dia.": "Reduce waste of energy, water and materials in everyday life.",
        "Preferir escolhas com menor emissão sempre que for possível.": "Prefer lower-emission choices whenever possible.",
        "Apoiar ciência, educação climática e políticas públicas responsáveis.": "Support science, climate education and responsible public policy.",
        "ABRIR CONTATO ↗": "OPEN CONTACT ↗",
        "VOLTAR AO INÍCIO ↑": "BACK TO TOP ↑",

        "FONTES": "SOURCES",
        "FEIRA TECNOLÓGICA": "TECHNOLOGY FAIR",
        "ETEC MCM · RIBEIRÃO PIRES": "ETEC MCM · RIBEIRÃO PIRES",
        "Uma experiência interativa sobre a ODS 13 — Ação Contra a Mudança Global do Clima.": "An interactive experience about SDG 13 — Climate Action.",
        "Uma experiência interativa sobre o ODS 13 — Ação Contra a Mudança Global do Clima.": "An interactive experience about SDG 13 — Climate Action.",

        "CLIMATE MONITOR // GLOBAL": "CLIMATE MONITOR // GLOBAL",
        "SISTEMA DE OBSERVAÇÃO CLIMÁTICA": "CLIMATE OBSERVATION SYSTEM",
        "Monitoramento": "Monitoring",
        "do planeta.": "the planet.",
        "Arraste o globo para explorar. Os feixes indicam pontos de monitoramento. Clique em um deles para analisar os dados climáticos.": "Drag the globe to explore. The beams indicate monitoring points. Click one to analyze climate data.",
        "DADOS AO VIVO": "LIVE DATA",
        "Open-Meteo · clique em um ponto": "Open-Meteo · click a point",
        "Selecione um ponto": "Select a point",
        "no globo": "on the globe",
        "MONITORAMENTO CLIMÁTICO": "CLIMATE MONITORING",
        "TEMPERATURA ATUAL": "CURRENT TEMPERATURE",
        "Aguardando seleção": "Waiting for selection",
        "20 ANOS ATRÁS": "20 YEARS AGO",
        "média anual": "annual average",
        "DAQUI 20 ANOS": "20 YEARS FROM NOW",
        "projeção média": "average projection",
        "VARIAÇÃO": "CHANGE",
        "ritmo global por década": "global pace per decade",
        "RISCO CLIMÁTICO": "CLIMATE RISK",
        "selecione um ponto": "select a point",
        "PREVISÃO // 7 DIAS": "FORECAST // 7 DAYS",
        "Aguardando dados da Open-Meteo": "Waiting for Open-Meteo data",
        "CALOR": "HEAT",
        "EVENTOS EXTREMOS": "EXTREME EVENTS",
        "DESMATAMENTO": "DEFORESTATION",
        "CONTEXTO ODS 13": "SDG 13 CONTEXT",
        "Selecione uma cidade para visualizar como temperatura, água, eventos extremos e adaptação se relacionam à ação climática.": "Select a city to see how temperature, water, extreme events and adaptation relate to climate action.",
        "ARRASTE PARA GIRAR": "DRAG TO ROTATE",
        "GLOBO INTERATIVO // OPEN-METEO // 2026": "INTERACTIVE GLOBE // OPEN-METEO // 2026",

        "FALE COM O PROJETO": "TALK TO THE PROJECT",
        "ENTRE EM": "GET IN",
        "CONTATO": "TOUCH",
        "Tem uma dúvida, sugestão ou quer saber mais sobre o projeto Climate/13? Preencha o formulário abaixo e nossa equipe retorna o quanto antes.": "Have a question, suggestion or want to know more about Climate/13? Fill out the form below and our team will reply as soon as possible.",
        "RESPOSTA": "RESPONSE",
        "ATÉ 48H": "UP TO 48H",
        "CANAL": "CHANNEL",
        "FORMULÁRIO DIRETO": "DIRECT FORM",
        "FORMULÁRIO // MENSAGEM DIRETA": "FORM // DIRECT MESSAGE",
        "PRONTO": "READY",
        "Nome": "Name",
        "E-mail": "Email",
        "Assunto": "Subject",
        "Mensagem": "Message",
        "Digite seu nome.": "Enter your name.",
        "Digite um e-mail válido.": "Enter a valid email.",
        "Digite o assunto da mensagem.": "Enter the message subject.",
        "Escreva uma mensagem com pelo menos 10 caracteres.": "Write a message with at least 10 characters.",
        "ENVIAR MENSAGEM": "SEND MESSAGE",
        "Sua mensagem é enviada diretamente para o e-mail do projeto Climate/13, através do serviço gratuito FormSubmit. Nenhum dado é armazenado em banco de dados ou servidor próprio.": "Your message is sent directly to the Climate/13 project email through the free FormSubmit service. No data is stored in our own database or server.",
        "Mensagem enviada!": "Message sent!",
        "Obrigado pelo contato. Sua mensagem foi enviada para o e-mail do projeto.": "Thank you for contacting us. Your message was sent to the project email.",
        "ENVIAR OUTRA MENSAGEM": "SEND ANOTHER MESSAGE",
        "EQUIPE ONLINE": "TEAM ONLINE",
        "CANAIS DE CONTATO": "CONTACT CHANNELS",
        "PROJETO": "PROJECT",
        "SOBRE O PROJETO": "ABOUT THE PROJECT",
        "Uma experiência interativa sobre a ODS 13 e a ação contra a mudança global do clima, criada como projeto de feira tecnológica.": "An interactive experience about SDG 13 and climate action, created as a technology fair project.",
        "Uma experiência interativa sobre o ODS 13 e a ação contra a mudança global do clima, criada como projeto de feira tecnológica.": "An interactive experience about SDG 13 and climate action, created as a technology fair project.",

        "Sua cidade quer reduzir emissões do transporte sem dificultar a mobilidade da população. Qual estratégia você prioriza?": "Your city wants to reduce transport emissions without making mobility harder. Which strategy do you prioritize?",
        "Ampliar vias para diminuir congestionamentos e melhorar o fluxo dos carros": "Expand roads to reduce traffic jams and improve car flow",
        "Expandir transporte público, ciclovias e áreas para pedestres, integrando diferentes meios de transporte": "Expand public transport, bike lanes and pedestrian areas, integrating different transport modes",
        "Substituir gradualmente os carros atuais por carros elétricos, mantendo o modelo de mobilidade existente": "Gradually replace current cars with electric cars while keeping the current mobility model",
        "A melhor estratégia é reduzir a dependência do carro individual. Transporte público e mobilidade ativa podem diminuir emissões e ainda melhorar a mobilidade urbana.": "The best strategy is to reduce dependence on individual cars. Public transport and active mobility can reduce emissions while improving urban mobility.",
        "Uma região agrícola começou a enfrentar períodos de seca mais longos, mas também chuvas intensas em alguns meses. Qual decisão aumenta mais sua capacidade de adaptação?": "An agricultural region has started facing longer droughts, but also intense rainfall in some months. Which decision most improves adaptation?",
        "Investir em irrigação eficiente, conservação do solo, armazenamento de água e culturas mais resistentes às novas condições": "Invest in efficient irrigation, soil conservation, water storage and crops more resistant to new conditions",
        "Melhorar as condições do solo nas áreas agrícolas para que consigam suportar épocas de seca": "Improve soil conditions in agricultural areas so they can handle dry periods",
        "Concentrar os investimentos em grandes reservatórios para guardar água durante os períodos de chuva": "Concentrate investments in large reservoirs to store water during rainy periods",
        "Combinar gestão da água, conservação do solo e adaptação das culturas torna a agricultura mais preparada para diferentes extremos climáticos.": "Combining water management, soil conservation and crop adaptation makes agriculture more prepared for different climate extremes.",
        "Uma indústria quer reduzir seu impacto climático sem diminuir sua produção. Qual plano seria mais completo?": "An industry wants to reduce its climate impact without reducing production. Which plan is most complete?",
        "Investir em reflorestamento e preservar áreas verdes para compensar suas emissões": "Invest in reforestation and preserve green areas to offset emissions",
        "Trocar parte da eletricidade por energia renovável para seus processor mais poluentes": "Replace part of the electricity with renewable energy for its most polluting processes",
        "Medir suas emissões, aumentar a eficiência energética, substituir fontes fósseis quando possível e usar energia renovável": "Measure emissions, increase energy efficiency, replace fossil sources when possible and use renewable energy",
        "O plano mais completo começa identificando as emissões e reduzindo-as diretamente com eficiência, mudanças nos processos e fontes de energia de menor emissão.": "The most complete plan starts by identifying emissions and reducing them directly through efficiency, process changes and lower-emission energy sources.",
        "3/3 — Você realmente explorou o site. Nenhum detalhe passou despercebido.": "3/3 — You really explored the site. No detail went unnoticed.",
        "2/3 — Quase perfeito. Um detalhe passou despercebido.": "2/3 — Almost perfect. One detail went unnoticed.",

        "MOBILIDADE": "MOBILITY",
        "Transporte integrado": "Integrated transport",
        "Expanda transporte público, corredores rápidos, ciclovias e integração entre diferentes meios de transporte.": "Expand public transport, rapid corridors, bike lanes and integration between transport modes.",
        "ENERGIA": "ENERGY",
        "Energia solar urbana": "Urban solar energy",
        "Instale geração solar em escolas, hospitais e prédios públicos, reduzindo a dependência de fontes mais poluentes.": "Install solar generation in schools, hospitals and public buildings, reducing dependence on more polluting sources.",
        "AMBIENTE": "ENVIRONMENT",
        "Corredores verdes": "Green corridors",
        "Crie parques, arborização, áreas permeáveis e conexões verdes entre diferentes partes da cidade.": "Create parks, urban trees, permeable areas and green connections between different parts of the city.",
        "INFRAESTRUTURA": "INFRASTRUCTURE",
        "Drenagem inteligente": "Smart drainage",
        "Modernize galerias, reservatórios e estruturas de retenção para reduzir os danos de chuvas intensas.": "Modernize galleries, reservoirs and retention structures to reduce damage from intense rainfall.",
        "Rede de alerta climático": "Climate alert network",
        "Sensores, previsão e comunicação avisam moradores antes de enchentes, ondas de calor e outros eventos.": "Sensors, forecasts and communication warn residents before floods, heat waves and other events.",
        "RECURSOS": "RESOURCES",
        "Reúso de água": "Water reuse",
        "Reduza perdas da rede, trate e reaproveite água em prédios públicos, residências e empresas.": "Reduce network losses, treat and reuse water in public buildings, homes and companies.",
        "NATUREZA": "NATURE",
        "Recuperação dos rios": "River recovery",
        "Restaure margens, nascentes, matas ciliares e trechos degradados para melhorar o sistema natural de água da cidade.": "Restore riverbanks, springs, riparian forests and degraded stretches to improve the city's natural water system.",
        "Moradia resiliente": "Resilient housing",
        "Reforce moradias vulneráveis e retire famílias de áreas com risco elevado de enchentes e deslizamentos.": "Strengthen vulnerable housing and move families away from high-risk flood and landslide areas.",
        "RESÍDUOS": "WASTE",
        "Economia circular": "Circular economy",
        "Amplie reciclagem, compostagem, logística reversa e reaproveitamento de materiais.": "Expand recycling, composting, reverse logistics and material reuse.",
        "EFICIÊNCIA": "EFFICIENCY",
        "Prédios eficientes": "Efficient buildings",
        "Modernize iluminação, climatização, isolamento e equipamentos dos prédios públicos.": "Modernize lighting, cooling, insulation and equipment in public buildings.",
        "Tarifa progressiva de água": "Progressive water pricing",
        "Consumos elevados pagam mais. A medida reduz desperdícios e gera receita, mas pesa no orçamento de famílias e empresas.": "High consumption pays more. The measure reduces waste and generates revenue, but affects family and company budgets.",
        "POLÍTICA": "POLICY",
        "Taxa sobre grandes emissores": "Fee on major emitters",
        "Grandes emissores passam a pagar mais. A cidade arrecada e desestimula emissões, mas empresas podem repassar parte dos custos.": "Major emitters pay more. The city raises funds and discourages emissions, but companies may pass on part of the costs.",
        "Pedágio urbano": "Urban toll",
        "Veículos pagam para acessar áreas congestionadas. O tráfego e as emissões caem, mas deslocamentos ficam mais caros.": "Vehicles pay to access congested areas. Traffic and emissions fall, but commuting becomes more expensive.",
        "INDÚSTRIA": "INDUSTRY",
        "Expansão industrial fóssil": "Fossil industrial expansion",
        "Autorize uma grande expansão industrial baseada em combustíveis fósseis. A arrecadação e a atividade econômica crescem, mas os impactos climáticos aumentam.": "Authorize a major industrial expansion based on fossil fuels. Revenue and economic activity grow, but climate impacts increase.",
        "ORÇAMENTO": "BUDGET",
        "Cortar manutenção preventiva": "Cut preventive maintenance",
        "Adie manutenção de drenagem e infraestrutura para liberar recursos agora. A economia imediata aumenta o risco de falhas futuras.": "Postpone drainage and infrastructure maintenance to free resources now. Immediate savings increase future failure risks.",
        "URBANIZAÇÃO": "URBANIZATION",
        "Liberar área verde para construção": "Release green area for construction",
        "Libere uma área ambiental protegida para novos empreendimentos. A arrecadação cresce, mas a cidade perde vegetação e solo permeável.": "Release a protected environmental area for new development. Revenue grows, but the city loses vegetation and permeable soil.",
        "VOCÊ POSSUI 100 CR. ESCOLHA COM CUIDADO. GANHO DE CR: 0/3.": "YOU HAVE 100 CR. CHOOSE CAREFULLY. CR GAIN: 0/3.",
        "RECURSOS INSUFICIENTES PARA ESSA DECISÃO.": "NOT ENOUGH RESOURCES FOR THIS DECISION.",
        "LIMITE DE 3 ESCOLHAS QUE GERAM CR ATINGIDO.": "LIMIT OF 3 CR-GENERATING CHOICES REACHED.",
        "TOME PELO MENOS UMA DECISÃO ANTES DA SIMULAÇÃO.": "MAKE AT LEAST ONE DECISION BEFORE SIMULATING.",
        "CHUVAS EXTREMAS": "EXTREME RAINFALL",
        "Uma sequência de tempestades atinge a cidade. Rios, drenagem, moradias e serviços públicos são colocados à prova.": "A sequence of storms hits the city. Rivers, drainage, housing and public services are tested.",
        "ONDA DE CALOR": "HEAT WAVE",
        "Temperaturas extremas permanecem por vários dias. A infraestrutura, a vegetação urbana e a saúde da população são colocadas à prova.": "Extreme temperatures persist for several days. Infrastructure, urban vegetation and public health are tested.",
        "SECA PROLONGADA": "PROLONGED DROUGHT",
        "Meses de pouca chuva reduzem reservatórios, pressionam o abastecimento e afetam ecossistemas e atividades econômicas.": "Months of little rain reduce reservoirs, pressure supply and affect ecosystems and economic activities.",
        "IMPACTO CONTROLADO": "IMPACT CONTROLLED",
        "DANOS LIMITADOS": "LIMITED DAMAGE",
        "DANOS SIGNIFICATIVOS": "SIGNIFICANT DAMAGE",
        "COLAPSO PARCIAL": "PARTIAL COLLAPSE",
        "CIDADE MODELO": "MODEL CITY",
        "CIDADE RESILIENTE": "RESILIENT CITY",
        "CIDADE EM TRANSIÇÃO": "CITY IN TRANSITION",
        "CIDADE EM RISCO": "CITY AT RISK",
        "Seu planejamento conseguiu equilibrar clima, população, economia e meio ambiente. A cidade chega a 2040 com boa capacidade de enfrentar riscos sem depender de um único setor.": "Your planning balanced climate, population, economy and environment. The city reaches 2040 with good risk response capacity without depending on a single sector.",
        "As decisões produziram bons resultados, mas ainda existem vulnerabilidades. Um planejamento mais equilibrado poderia melhorar a resposta da cidade.": "The decisions produced good results, but vulnerabilities remain. More balanced planning could improve the city's response.",
        "Você conseguiu avanços importantes, mas alguns setores ficaram para trás. O evento climático revelou os pontos mais frágeis do planejamento.": "You achieved important progress, but some sectors were left behind. The climate event revealed the weakest points in planning.",
        "O desenvolvimento ocorreu de forma desequilibrada. A cidade chega a 2040 com vulnerabilidades ambientais, sociais ou estruturais importantes.": "Development happened in an unbalanced way. The city reaches 2040 with important environmental, social or structural vulnerabilities.",
        "SIMULAÇÃO 2040 FINALIZADA.": "2040 SIMULATION FINISHED.",

        "EXPANSAO": "EXPANSION",
        "COMERCIO": "TRADE",
        "CARVAO": "COAL",
        "INDUSTRIA": "INDUSTRY",
        "PETROLEO": "OIL",
        "ELETRICIDADE": "ELECTRICITY",
        "MASSA": "MASS",
        "SOLO": "SOIL",
        "ACELERACAO": "ACCELERATION",
        "ALERTA": "ALERT",
        "RISCO": "RISK",
        "CLIMA": "CLIMATE",
        "TRANSICAO": "TRANSITION",
        "ACORDO": "AGREEMENT",
        "RECORDE": "RECORD",
        "CENARIOS": "SCENARIOS",
        "Chegada europeia as Americas abre a troca colombiana": "European arrival in the Americas opens the Columbian exchange",
        "A partir de 1492, colonizacao, novas rotas maritimas e transferencia de plantas, animais, pessoas e doencas mudaram solos, florestas e paisagens em escala planetaria.": "From 1492 onward, colonization, new sea routes and the transfer of plants, animals, people and diseases changed soils, forests and landscapes on a planetary scale.",
        "COLONIZACAO": "COLONIZATION",
        "ROTAS": "ROUTES",
        "TROCA COLOMBIANA": "COLUMBIAN EXCHANGE",
        "INICIO DE UMA ECONOMIA EXTRATIVA GLOBAL": "START OF A GLOBAL EXTRACTIVE ECONOMY",
        "Companhia das Indias Orientais organiza comercio global": "East India Company organizes global trade",
        "A VOC ajudou a consolidar redes comerciais permanentes. Especiarias, madeira, metais e monoculturas passaram a circular em escala maior, pressionando ecossistemas coloniais.": "The VOC helped consolidate permanent trade networks. Spices, timber, metals and monocultures began circulating at a larger scale, pressuring colonial ecosystems.",
        "MONOCULTURA": "MONOCULTURE",
        "ROTAS MERCANTIS": "TRADE ROUTES",
        "RECURSOS NATURAIS VIRAM MERCADORIA GLOBAL": "NATURAL RESOURCES BECOME GLOBAL COMMODITIES",
        "Motor atmosferico de Newcomen acelera minas de carvao": "Newcomen's atmospheric engine accelerates coal mining",
        "O motor de Thomas Newcomen bombeava agua de minas e tornou mais viavel extrair carvao. Foi um passo decisivo para a mecanizacao movida por combustiveis fosseis.": "Thomas Newcomen's engine pumped water from mines and made coal extraction more viable. It was a decisive step toward fossil-fueled mechanization.",
        "VAPOR": "STEAM",
        "MINERACAO": "MINING",
        "MAQUINA A VAPOR": "STEAM ENGINE",
        "ENERGIA FOSSIL ENTRA NA MECANIZACAO": "FOSSIL ENERGY ENTERS MECHANIZATION",
        "Patente de Watt melhora a maquina a vapor": "Watt's patent improves the steam engine",
        "A melhoria de James Watt tornou motores a vapor mais eficientes. Fabrica, transporte e producao cresceram junto com a queima de carvao e a poluicao urbana.": "James Watt's improvement made steam engines more efficient. Factories, transport and production grew along with coal burning and urban pollution.",
        "WATT": "WATT",
        "FABRICAS": "FACTORIES",
        "EMISSOES": "EMISSIONS",
        "REVOLUCAO INDUSTRIAL": "INDUSTRIAL REVOLUTION",
        "PRODUCAO EM ESCALA INDUSTRIAL": "INDUSTRIAL-SCALE PRODUCTION",
        "Poco Drake inaugura a era moderna do petroleo": "Drake Well opens the modern oil era",
        "A perfuracao comercial na Pensilvania abriu caminho para motores, plasticos, fertilizantes e transporte baseados em petroleo, uma das maiores fontes de emissoes modernas.": "Commercial drilling in Pennsylvania opened the way for oil-based engines, plastics, fertilizers and transport, one of the largest sources of modern emissions.",
        "ENERGIA": "ENERGY",
        "POCO DRAKE": "DRAKE WELL",
        "EXPANSAO DOS COMBUSTIVEIS FOSSEIS": "EXPANSION OF FOSSIL FUELS",
        "Pearl Street Station inicia redes eletricas urbanas": "Pearl Street Station starts urban electric grids",
        "A usina de Thomas Edison em Nova York mostrou o poder da eletricidade centralizada. O conforto urbano cresceu, mas muitas redes dependeram de carvao, oleo e gas.": "Thomas Edison's plant in New York showed the power of centralized electricity. Urban comfort grew, but many grids depended on coal, oil and gas.",
        "CIDADES": "CITIES",
        "PEARL STREET": "PEARL STREET",
        "ENERGIA DISPONIVEL O TEMPO TODO": "ENERGY AVAILABLE ALL THE TIME",
        "Linha de montagem da Ford acelera o automovel": "Ford's assembly line accelerates the automobile",
        "A producao em massa do Model T reduziu custos e popularizou carros. Estradas, combustiveis, pneus e cidades espalhadas ampliaram impactos ambientais.": "Mass production of the Model T reduced costs and popularized cars. Roads, fuels, tires and sprawling cities expanded environmental impacts.",
        "AUTOMOVEL": "AUTOMOBILE",
        "TRANSPORTE": "TRANSPORT",
        "LINHA DE MONTAGEM": "ASSEMBLY LINE",
        "MOBILIDADE BASEADA EM COMBUSTIVEIS": "FUEL-BASED MOBILITY",
        "Dust Bowl mostra o risco de degradar o solo": "Dust Bowl shows the risk of soil degradation",
        "Seca, vento e agricultura intensiva transformaram grandes areas das planicies dos EUA em tempestades de poeira, expondo a fragilidade do solo mal protegido.": "Drought, wind and intensive agriculture turned large areas of the U.S. plains into dust storms, exposing the fragility of poorly protected soil.",
        "SECA": "DROUGHT",
        "AGRICULTURA": "AGRICULTURE",
        "TEMPESTADE DE POEIRA": "DUST STORM",
        "USO DO SOLO VIRA RISCO CLIMATICO": "LAND USE BECOMES A CLIMATE RISK",
        "Grande Aceleracao multiplica consumo e residuos": "Great Acceleration multiplies consumption and waste",
        "Depois de 1950, energia, plastico, fertilizantes, concreto, transporte e consumo cresceram rapidamente. Muitos indicadores ambientais subiram junto.": "After 1950, energy, plastic, fertilizers, concrete, transport and consumption grew rapidly. Many environmental indicators rose with them.",
        "CONSUMO": "CONSUMPTION",
        "PLASTICO": "PLASTIC",
        "RESIDUOS": "WASTE",
        "PLASTICO E CONSUMO": "PLASTIC AND CONSUMPTION",
        "IMPACTOS HUMANOS CRESCEM EM VELOCIDADE": "HUMAN IMPACTS SPEED UP",
        "Conferencia de Estocolmo leva ambiente a politica global": "Stockholm Conference brings environment into global politics",
        "A primeira grande conferencia ambiental da ONU colocou poluicao, conservacao e desenvolvimento no centro da agenda internacional.": "The UN's first major environmental conference placed pollution, conservation and development at the center of the international agenda.",
        "POLITICA": "POLITICS",
        "AMBIENTE": "ENVIRONMENT",
        "ESTOCOLMO 1972": "STOCKHOLM 1972",
        "MEIO AMBIENTE ENTRA NA AGENDA GLOBAL": "ENVIRONMENT ENTERS THE GLOBAL AGENDA",
        "Chernobyl revela impactos ambientais de longo prazo": "Chernobyl reveals long-term environmental impacts",
        "O acidente nuclear mostrou como falhas tecnologicas podem gerar contaminacao, deslocamentos humanos, risco a saude e efeitos ecologicos duradouros.": "The nuclear accident showed how technological failures can generate contamination, human displacement, health risks and long-lasting ecological effects.",
        "CONTAMINACAO": "CONTAMINATION",
        "CHERNOBYL": "CHERNOBYL",
        "TECNOLOGIA TAMBEM PRECISA DE SEGURANCA": "TECHNOLOGY ALSO NEEDS SAFETY",
        "Rio-92 consolida clima e biodiversidade": "Rio-92 consolidates climate and biodiversity",
        "A Cupula da Terra no Rio de Janeiro fortaleceu acordos sobre clima, biodiversidade e desenvolvimento sustentavel, influenciando decadas de negociacoes.": "The Earth Summit in Rio de Janeiro strengthened agreements on climate, biodiversity and sustainable development, influencing decades of negotiations.",
        "RIO-92": "RIO-92",
        "BIODIVERSIDADE": "BIODIVERSITY",
        "CUPULA DA TERRA": "EARTH SUMMIT",
        "SUSTENTABILIDADE GANHA LINGUAGEM POLITICA": "SUSTAINABILITY GAINS POLITICAL LANGUAGE",
        "Solar e eolica entram em crescimento acelerado": "Solar and wind enter accelerated growth",
        "A queda de custos, novos incentivos e preocupacao climatica fizeram renovaveis ganhar escala, abrindo uma alternativa real a matrizes baseadas em carbono.": "Falling costs, new incentives and climate concern helped renewables scale up, opening a real alternative to carbon-based energy systems.",
        "SOLAR": "SOLAR",
        "EOLICA": "WIND",
        "ENERGIA RENOVAVEL": "RENEWABLE ENERGY",
        "TECNOLOGIAS LIMPAS GANHAM ESCALA": "CLEAN TECHNOLOGIES SCALE UP",
        "Acordo de Paris define o limite de 1,5 graus": "Paris Agreement defines the 1.5-degree limit",
        "Na COP21, paises adotaram o Acordo de Paris, mirando limitar o aquecimento global e fortalecer adaptacao, financiamento e metas nacionais.": "At COP21, countries adopted the Paris Agreement, aiming to limit global warming and strengthen adaptation, finance and national targets.",
        "PARIS": "PARIS",
        "COP21": "COP21",
        "1,5C": "1.5C",
        "ACORDO DE PARIS": "PARIS AGREEMENT",
        "META GLOBAL CONTRA DANOS IRREVERSIVEIS": "GLOBAL TARGET AGAINST IRREVERSIBLE DAMAGE",
        "Recordes recentes confirmam a urgencia climatica": "Recent records confirm climate urgency",
        "Temperaturas recordes, extremos de chuva, secas, incendios e aquecimento dos oceanos mostram que a janela de acao esta ficando menor.": "Record temperatures, rainfall extremes, droughts, fires and ocean warming show that the action window is getting smaller.",
        "RECORDES": "RECORDS",
        "OCEANOS": "OCEANS",
        "EXTREMOS": "EXTREMES",
        "EVENTOS EXTREMOS": "EXTREME EVENTS",
        "SINAIS CLIMATICOS MAIS FREQUENTES": "MORE FREQUENT CLIMATE SIGNALS",
        "O clima de 2100 depende das escolhas deste seculo": "The climate of 2100 depends on this century's choices",
        "O fim do seculo pode ter cidades resilientes e energia limpa, ou impactos maiores sobre agua, comida, saude e biodiversidade. O resultado ainda esta aberto.": "The end of the century may bring resilient cities and clean energy, or greater impacts on water, food, health and biodiversity. The outcome is still open.",
        "FUTURO": "FUTURE",
        "ADAPTACAO": "ADAPTATION",
        "CENARIOS 2100": "2100 SCENARIOS",
        "O FUTURO AINDA ESTA EM DISPUTA": "THE FUTURE IS STILL AT STAKE",
        "EXPANSÃO": "EXPANSION",
        "COMÉRCIO": "TRADE",
        "CARVÃO": "COAL",
        "INDÚSTRIA": "INDUSTRY",
        "PETRÓLEO": "OIL",
        "ACELERAÇÃO": "ACCELERATION",
        "TRANSIÇÃO": "TRANSITION",
        "CENÁRIOS": "SCENARIOS",
        "Chegada europeia às Américas abre a troca colombiana": "European arrival in the Americas opens the Columbian exchange",
        "A partir de 1492, colonização, novas rotas marítimas e transferência de plantas, animais, pessoas e doenças mudaram solos, florestas e paisagens em escala planetária.": "From 1492 onward, colonization, new sea routes and the transfer of plants, animals, people and diseases changed soils, forests and landscapes on a planetary scale.",
        "COLONIZAÇÃO": "COLONIZATION",
        "INÍCIO DE UMA ECONOMIA EXTRATIVA GLOBAL": "START OF A GLOBAL EXTRACTIVE ECONOMY",
        "Companhia das Índias Orientais organiza comércio global": "East India Company organizes global trade",
        "Motor atmosférico de Newcomen acelera minas de carvão": "Newcomen's atmospheric engine accelerates coal mining",
        "O motor de Thomas Newcomen bombeava água de minas e tornou mais viável extrair carvão. Foi um passo decisivo para a mecanização movida por combustíveis fósseis.": "Thomas Newcomen's engine pumped water from mines and made coal extraction more viable. It was a decisive step toward fossil-fueled mechanization.",
        "MINERAÇÃO": "MINING",
        "MÁQUINA A VAPOR": "STEAM ENGINE",
        "ENERGIA FÓSSIL ENTRA NA MECANIZAÇÃO": "FOSSIL ENERGY ENTERS MECHANIZATION",
        "Patente de Watt melhora a máquina a vapor": "Watt's patent improves the steam engine",
        "A melhoria de James Watt tornou motores a vapor mais eficientes. Fábricas, transporte e produção cresceram junto com a queima de carvão e a poluição urbana.": "James Watt's improvement made steam engines more efficient. Factories, transport and production grew along with coal burning and urban pollution.",
        "FÁBRICAS": "FACTORIES",
        "EMISSÕES": "EMISSIONS",
        "REVOLUÇÃO INDUSTRIAL": "INDUSTRIAL REVOLUTION",
        "PRODUÇÃO EM ESCALA INDUSTRIAL": "INDUSTRIAL-SCALE PRODUCTION",
        "Poço Drake inaugura a era moderna do petróleo": "Drake Well opens the modern oil era",
        "A perfuração comercial na Pensilvânia abriu caminho para motores, plásticos, fertilizantes e transporte baseados em petróleo, uma das maiores fontes de emissões modernas.": "Commercial drilling in Pennsylvania opened the way for oil-based engines, plastics, fertilizers and transport, one of the largest sources of modern emissions.",
        "POÇO DRAKE": "DRAKE WELL",
        "EXPANSÃO DOS COMBUSTÍVEIS FÓSSEIS": "EXPANSION OF FOSSIL FUELS",
        "Pearl Street Station inicia redes elétricas urbanas": "Pearl Street Station starts urban electric grids",
        "A usina de Thomas Edison em Nova York mostrou o poder da eletricidade centralizada. O conforto urbano cresceu, mas muitas redes dependeram de carvão, óleo e gás.": "Thomas Edison's plant in New York showed the power of centralized electricity. Urban comfort grew, but many grids depended on coal, oil and gas.",
        "ENERGIA DISPONÍVEL O TEMPO TODO": "ENERGY AVAILABLE ALL THE TIME",
        "Linha de montagem da Ford acelera o automóvel": "Ford's assembly line accelerates the automobile",
        "A produção em massa do Model T reduziu custos e popularizou carros. Estradas, combustíveis, pneus e cidades espalhadas ampliaram impactos ambientais.": "Mass production of the Model T reduced costs and popularized cars. Roads, fuels, tires and sprawling cities expanded environmental impacts.",
        "AUTOMÓVEL": "AUTOMOBILE",
        "MOBILIDADE BASEADA EM COMBUSTÍVEIS": "FUEL-BASED MOBILITY",
        "Seca, vento e agricultura intensiva transformaram grandes áreas das planícies dos EUA em tempestades de poeira, expondo a fragilidade do solo mal protegido.": "Drought, wind and intensive agriculture turned large areas of the U.S. plains into dust storms, exposing the fragility of poorly protected soil.",
        "USO DO SOLO VIRA RISCO CLIMÁTICO": "LAND USE BECOMES A CLIMATE RISK",
        "Grande Aceleração multiplica consumo e resíduos": "Great Acceleration multiplies consumption and waste",
        "Depois de 1950, energia, plástico, fertilizantes, concreto, transporte e consumo cresceram rapidamente. Muitos indicadores ambientais subiram junto.": "After 1950, energy, plastic, fertilizers, concrete, transport and consumption grew rapidly. Many environmental indicators rose with them.",
        "PLÁSTICO": "PLASTIC",
        "RESÍDUOS": "WASTE",
        "PLÁSTICO E CONSUMO": "PLASTIC AND CONSUMPTION",
        "Conferência de Estocolmo leva ambiente à política global": "Stockholm Conference brings environment into global politics",
        "A primeira grande conferência ambiental da ONU colocou poluição, conservação e desenvolvimento no centro da agenda internacional.": "The UN's first major environmental conference placed pollution, conservation and development at the center of the international agenda.",
        "POLÍTICA": "POLITICS",
        "O acidente nuclear mostrou como falhas tecnológicas podem gerar contaminação, deslocamentos humanos, risco à saúde e efeitos ecológicos duradouros.": "The nuclear accident showed how technological failures can generate contamination, human displacement, health risks and long-lasting ecological effects.",
        "CONTAMINAÇÃO": "CONTAMINATION",
        "TECNOLOGIA TAMBÉM PRECISA DE SEGURANÇA": "TECHNOLOGY ALSO NEEDS SAFETY",
        "A Cúpula da Terra no Rio de Janeiro fortaleceu acordos sobre clima, biodiversidade e desenvolvimento sustentável, influenciando décadas de negociações.": "The Earth Summit in Rio de Janeiro strengthened agreements on climate, biodiversity and sustainable development, influencing decades of negotiations.",
        "CÚPULA DA TERRA": "EARTH SUMMIT",
        "SUSTENTABILIDADE GANHA LINGUAGEM POLÍTICA": "SUSTAINABILITY GAINS POLITICAL LANGUAGE",
        "Solar e eólica entram em crescimento acelerado": "Solar and wind enter accelerated growth",
        "A queda de custos, novos incentivos e preocupação climática fizeram renováveis ganhar escala, abrindo uma alternativa real a matrizes baseadas em carbono.": "Falling costs, new incentives and climate concern helped renewables scale up, opening a real alternative to carbon-based energy systems.",
        "EÓLICA": "WIND",
        "ENERGIA RENOVÁVEL": "RENEWABLE ENERGY",
        "Na COP21, países adotaram o Acordo de Paris, mirando limitar o aquecimento global e fortalecer adaptação, financiamento e metas nacionais.": "At COP21, countries adopted the Paris Agreement, aiming to limit global warming and strengthen adaptation, finance and national targets.",
        "META GLOBAL CONTRA DANOS IRREVERSÍVEIS": "GLOBAL TARGET AGAINST IRREVERSIBLE DAMAGE",
        "Recordes recentes confirmam a urgência climática": "Recent records confirm climate urgency",
        "Temperaturas recordes, extremos de chuva, secas, incêndios e aquecimento dos oceanos mostram que a janela de ação está ficando menor.": "Record temperatures, rainfall extremes, droughts, fires and ocean warming show that the action window is getting smaller.",
        "SINAIS CLIMÁTICOS MAIS FREQUENTES": "MORE FREQUENT CLIMATE SIGNALS",
        "O clima de 2100 depende das escolhas deste século": "The climate of 2100 depends on this century's choices",
        "O fim do século pode ter cidades resilientes e energia limpa, ou impactos maiores sobre água, comida, saúde e biodiversidade. O resultado ainda está aberto.": "The end of the century may bring resilient cities and clean energy, or greater impacts on water, food, health and biodiversity. The outcome is still open.",
        "ADAPTAÇÃO": "ADAPTATION",
        "CENÁRIOS 2100": "2100 SCENARIOS",
        "O FUTURO AINDA ESTÁ EM DISPUTA": "THE FUTURE IS STILL AT STAKE",

        "Norte": "North",
        "Nordeste": "Northeast",
        "Centro-Oeste": "Central-West",
        "Sudeste": "Southeast",
        "Sul": "South",
        "A Região Norte abriga a maior parte da Amazônia brasileira, uma das áreas mais importantes do planeta para biodiversidade, água, regulação do clima e culturas tradicionais.": "The North region holds most of the Brazilian Amazon, one of the planet's most important areas for biodiversity, water, climate regulation and traditional cultures.",
        "O Nordeste combina Caatinga, Mata Atlântica, Cerrado e zonas costeiras. A Caatinga é exclusivamente brasileira e tem espécies adaptadas ao semiárido.": "The Northeast combines Caatinga, Atlantic Forest, Cerrado and coastal zones. The Caatinga is exclusively Brazilian and has species adapted to the semi-arid climate.",
        "O Centro-Oeste concentra Cerrado e Pantanal. O Cerrado é berço de grandes bacias hidrográficas, e o Pantanal é a maior planície alagável tropical do mundo.": "The Central-West concentrates Cerrado and Pantanal. The Cerrado is the birthplace of major river basins, and the Pantanal is the world's largest tropical wetland.",
        "O Sudeste reúne grande população, indústria e fragmentos importantes de Mata Atlântica e Cerrado. É central para economia, energia, água e recuperação ambiental.": "The Southeast brings together a large population, industry and important fragments of Atlantic Forest and Cerrado. It is central to economy, energy, water and environmental recovery.",
        "A Região Sul concentra Pampa, Mata Atlântica e florestas com araucária. Campos, rios e produção agrícola convivem com enchentes, estiagens e temporais mais intensos.": "The South concentrates Pampa, Atlantic Forest and araucaria forests. Grasslands, rivers and agriculture coexist with floods, droughts and more intense storms.",
        "AMAZÔNIA": "AMAZON",
        "RIOS VOADORES": "FLYING RIVERS",
        "POVOS TRADICIONAIS": "TRADITIONAL PEOPLES",
        "CAATINGA": "CAATINGA",
        "SEMIÁRIDO": "SEMI-ARID",
        "LITORAL": "COAST",
        "CERRADO": "CERRADO",
        "PANTANAL": "PANTANAL",
        "MATA ATLÂNTICA": "ATLANTIC FOREST",
        "PAMPA": "PAMPA",
        "ARAUCÁRIA": "ARAUCARIA",
        "ENCHENTES": "FLOODS",
        "EXPLORAR": "EXPLORE",
        "NATUREZA PRESERVADA": "PRESERVED NATURE",
        "IMPACTOS E DEGRADAÇÃO": "IMPACTS AND DEGRADATION",
        "vida natural": "natural life",
        "pressões climáticas": "climate pressures",
        "Ver impactos": "View impacts",
        "Ver natureza": "View nature",
        "Foto": "Photo",

        "BIOMAS": "BIOMES",
        "IMPORTÂNCIA": "IMPORTANCE",
        "ÁGUA": "WATER",
        "MUNDO": "WORLD",
        "Amazônia, Cerrado e áreas de transição": "Amazon, Cerrado and transition areas",
        "Regula chuvas e armazena carbono": "Regulates rainfall and stores carbon",
        "Uma das maiores concentrações do mundo": "One of the largest concentrations in the world",
        "Desmatamento, fogo, seca e garimpo": "Deforestation, fire, drought and mining",
        "A bacia amazônica influencia chuvas no Brasil e na América do Sul.": "The Amazon basin influences rainfall in Brazil and South America.",
        "A floresta ajuda a estabilizar o clima global e conservar espécies únicas.": "The forest helps stabilize the global climate and conserve unique species.",
        "Caatinga, Mata Atlântica, Cerrado e manguezais": "Caatinga, Atlantic Forest, Cerrado and mangroves",
        "Resiliência à seca e diversidade cultural": "Drought resilience and cultural diversity",
        "Espécies adaptadas ao calor e pouca água": "Species adapted to heat and little water",
        "Desertificação, seca, erosão costeira": "Desertification, drought and coastal erosion",
        "A segurança hídrica depende de convivência com o semiárido e gestão de reservatórios.": "Water security depends on living with the semi-arid climate and managing reservoirs.",
        "Mostra soluções de adaptação para regiões secas e vulneráveis.": "It shows adaptation solutions for dry and vulnerable regions.",
        "Cerrado, Pantanal e Amazônia no norte de MT": "Cerrado, Pantanal and Amazon in northern Mato Grosso",
        "Nascentes, agricultura e planícies alagáveis": "Springs, agriculture and floodplains",
        "Savanas, veredas, aves, peixes e mamíferos": "Savannas, wetlands, birds, fish and mammals",
        "Fogo, desmatamento e alteração das chuvas": "Fire, deforestation and rainfall changes",
        "O Cerrado alimenta bacias como Tocantins-Araguaia, São Francisco e Paraná.": "The Cerrado feeds basins such as Tocantins-Araguaia, São Francisco and Paraná.",
        "O Pantanal ajuda a regular ciclos de cheia e abriga fauna de importância global.": "The Pantanal helps regulate flood cycles and shelters globally important wildlife.",
        "Mata Atlântica, Cerrado e áreas costeiras": "Atlantic Forest, Cerrado and coastal areas",
        "Abastecimento, economia e restauração florestal": "Water supply, economy and forest restoration",
        "Alto endemismo em áreas muito pressionadas": "High endemism in highly pressured areas",
        "Calor urbano, enchentes, deslizamentos": "Urban heat, floods and landslides",
        "Reservatórios e serras influenciam abastecimento de grandes metrópoles.": "Reservoirs and mountain ranges influence water supply for large metropolitan areas.",
        "A Mata Atlântica é hotspot global de biodiversidade e restauração.": "The Atlantic Forest is a global hotspot for biodiversity and restoration.",
        "Pampa e Mata Atlântica": "Pampa and Atlantic Forest",
        "Campos nativos, rios e produção de alimentos": "Native grasslands, rivers and food production",
        "Espécies campestres e florestas de araucária": "Grassland species and araucaria forests",
        "Enchentes, estiagens, granizo e perda de campos": "Floods, droughts, hail and loss of grasslands",
        "Bacias e planícies urbanas exigem drenagem, alerta e restauração de áreas naturais.": "Basins and urban plains require drainage, alerts and restoration of natural areas.",
        "O Pampa é uma paisagem campestre rara no Brasil e importante para carbono no solo.": "The Pampa is a rare grassland landscape in Brazil and important for soil carbon.",

        "Floresta amazônica vista do alto, com cobertura preservada.": "Amazon rainforest seen from above, with preserved cover.",
        "Floresta tropical densa e úmida, como a paisagem amazônica.": "Dense, humid tropical forest, like the Amazon landscape.",
        "Mata fechada e alta biodiversidade.": "Dense forest and high biodiversity.",
        "Rios e vegetação formando corredores ecológicos.": "Rivers and vegetation forming ecological corridors.",
        "Garimpo e abertura de clareiras na floresta amazônica.": "Mining and clearings opened in the Amazon rainforest.",
        "Paisagem seca, sinal de perda de umidade e estresse ambiental.": "Dry landscape, a sign of moisture loss and environmental stress.",
        "Céu carregado e extremos climáticos afetando ecossistemas.": "Heavy skies and climate extremes affecting ecosystems.",
        "Solo exposto e vegetação pressionada por degradação.": "Exposed soil and vegetation pressured by degradation.",
        "Manguezal no Nordeste, berçário natural de muitas espécies.": "Mangrove in the Northeast, a natural nursery for many species.",
        "Dunas e paisagens costeiras parecidas com áreas do Nordeste brasileiro.": "Dunes and coastal landscapes similar to areas of Brazil's Northeast.",
        "Litoral, recifes e ecossistemas costeiros sensíveis.": "Coastline, reefs and sensitive coastal ecosystems.",
        "Paisagem seca parecida com áreas de Caatinga no semiárido.": "Dry landscape similar to Caatinga areas in the semi-arid region.",
        "Chuvas extremas e enchentes no Nordeste.": "Extreme rainfall and floods in the Northeast.",
        "Seca prolongada no semiárido.": "Prolonged drought in the semi-arid region.",
        "Solo ressecado e vegetação sob estresse hídrico.": "Parched soil and vegetation under water stress.",
        "Tempestades fortes aumentam riscos urbanos e costeiros.": "Strong storms increase urban and coastal risks.",
        "Cerrado, savana brasileira rica em nascentes e espécies nativas.": "Cerrado, a Brazilian savanna rich in springs and native species.",
        "Onça-pintada, símbolo da fauna do Pantanal.": "Jaguar, a symbol of Pantanal wildlife.",
        "Áreas úmidas e corredores de água sustentam biodiversidade.": "Wetlands and water corridors sustain biodiversity.",
        "Campos abertos e vegetação natural do interior.": "Open fields and natural inland vegetation.",
        "Desmatamento e conversão de vegetação nativa no Cerrado.": "Deforestation and conversion of native Cerrado vegetation.",
        "Incêndios no Pantanal durante períodos de seca extrema.": "Fires in the Pantanal during periods of extreme drought.",
        "Fogo e fumaça pressionando áreas úmidas.": "Fire and smoke pressuring wetlands.",
        "Expansão agropecuária reduz habitats naturais.": "Agricultural expansion reduces natural habitats.",
        "Mata Atlântica, hotspot global de biodiversidade.": "Atlantic Forest, a global biodiversity hotspot.",
        "Cachoeiras e nascentes em florestas de serra.": "Waterfalls and springs in mountain forests.",
        "Floresta densa ajudando a regular água e temperatura.": "Dense forest helping regulate water and temperature.",
        "Vales, rios e cobertura vegetal de montanha.": "Valleys, rivers and mountain vegetation cover.",
        "Encostas e florestas pressionadas por chuva extrema e ocupação.": "Slopes and forests pressured by extreme rainfall and occupation.",
        "Deslizamentos associados a temporais intensos.": "Landslides associated with intense storms.",
        "Tempestades severas em áreas urbanizadas.": "Severe storms in urbanized areas.",
        "Cidades densas ampliam ilhas de calor e enchentes.": "Dense cities amplify heat islands and flooding.",
        "Campos do Pampa no Rio Grande do Sul.": "Pampa grasslands in Rio Grande do Sul.",
        "Rios e vales do Sul, essenciais para abastecimento e agricultura.": "Southern rivers and valleys, essential for water supply and agriculture.",
        "Paisagens campestres e áreas naturais abertas.": "Grassland landscapes and open natural areas.",
        "Florestas do Sul protegem encostas, água e biodiversidade.": "Southern forests protect slopes, water and biodiversity.",
        "Enchentes severas no Rio Grande do Sul.": "Severe floods in Rio Grande do Sul.",
        "Cheia do Guaíba durante evento extremo.": "Guaíba flood during an extreme event.",
        "Temporais mais intensos elevam riscos de danos e alagamentos.": "More intense storms increase risks of damage and flooding.",
        "Conversão de campos nativos para uso agropecuário.": "Conversion of native grasslands to agricultural use.",

        "A crise climática amplia desigualdades: quem vive em áreas de risco, com pouca infraestrutura ou baixa renda costuma ter menos recursos para se proteger. Dados e mapas ajudam a identificar vulnerabilidades e orientar ações públicas.": "The climate crisis widens inequalities: people living in risk areas, with limited infrastructure or low income often have fewer resources to protect themselves. Data and maps help identify vulnerabilities and guide public action.",
        "Secas e chuvas intensas afetam abastecimento, drenagem e qualidade da água. Sensores, previsão do tempo e gestão inteligente ajudam cidades a antecipar riscos e reduzir desperdícios.": "Droughts and intense rainfall affect supply, drainage and water quality. Sensors, forecasts and smart management help cities anticipate risks and reduce waste.",
        "Temperatura, água e eventos extremos influenciam safras e preços. Monitoramento climático, irrigação eficiente e análise de dados ajudam produtores a tomar decisões mais seguras.": "Temperature, water and extreme events influence crops and prices. Climate monitoring, efficient irrigation and data analysis help producers make safer decisions.",
        "Ondas de calor, enchentes e fumaça podem aumentar problemas respiratórios, desidratação e doenças transmitidas pela água. Alertas rápidos e planejamento de atendimento reduzem impactos.": "Heat waves, floods and smoke can increase respiratory problems, dehydration and waterborne diseases. Fast alerts and care planning reduce impacts.",
        "Cidades precisam integrar drenagem, arborização, mobilidade e moradia segura. Sistemas digitais, mapas de risco e alertas tornam o planejamento urbano mais resiliente.": "Cities need to integrate drainage, trees, mobility and safe housing. Digital systems, risk maps and alerts make urban planning more resilient.",
        "Mudanças rápidas no clima alteram habitats e pressionam espécies. Imagens de satélite, sensores e inventários ambientais ajudam a monitorar ecossistemas e orientar conservação.": "Rapid climate changes alter habitats and pressure species. Satellite images, sensors and environmental inventories help monitor ecosystems and guide conservation.",

        "A Inteligência Artificial ajuda a transformar dados climáticos em previsões, alertas e padrões compreensíveis. Em um projeto como este, ela mostra como tecnologia pode apoiar decisões sem substituir a análise humana.": "Artificial Intelligence helps turn climate data into forecasts, alerts and understandable patterns. In a project like this, it shows how technology can support decisions without replacing human analysis.",
        "Organização de grandes volumes de dados climáticos.": "Organization of large volumes of climate data.",
        "Identificação de padrões em imagens, sensores e séries históricas.": "Pattern identification in images, sensors and historical series.",
        "Apoio a previsões, mapas de risco e comunicação científica.": "Support for forecasts, risk maps and science communication.",
        "Satélites observam a Terra continuamente e permitem acompanhar florestas, oceanos, atmosfera, nuvens, queimadas e temperatura da superfície. Eles tornam visíveis mudanças que seriam difíceis de medir só em campo.": "Satellites continuously observe Earth and track forests, oceans, the atmosphere, clouds, fires and surface temperature. They make changes visible that would be hard to measure only in the field.",
        "Monitoramento de desmatamento e mudanças no território.": "Monitoring of deforestation and land-use changes.",
        "Observação de temperatura, nuvens, oceanos e vegetação.": "Observation of temperature, clouds, oceans and vegetation.",
        "Base para alertas, pesquisas, mapas e políticas públicas.": "Foundation for alerts, research, maps and public policy.",
        "A energia solar gera eletricidade sem queimar combustíveis fósseis. Quando combinada com eficiência energética e planejamento, ajuda a reduzir emissões e torna escolas, casas e cidades mais sustentáveis.": "Solar energy generates electricity without burning fossil fuels. Combined with energy efficiency and planning, it helps reduce emissions and makes schools, homes and cities more sustainable.",
        "Geração renovável em telhados, escolas, empresas e usinas.": "Renewable generation on roofs, schools, companies and plants.",
        "Redução da dependência de fontes mais poluentes.": "Reduced dependence on more polluting sources.",
        "Integração com baterias, redes inteligentes e economia de energia.": "Integration with batteries, smart grids and energy savings.",
        "Cidades inteligentes usam sensores, dados e sistemas digitais para planejar melhor água, energia, mobilidade, drenagem e alertas. A tecnologia ajuda a transformar riscos climáticos em decisões práticas.": "Smart cities use sensors, data and digital systems to better plan water, energy, mobility, drainage and alerts. Technology helps turn climate risks into practical decisions.",
        "Sensores para chuva, calor, tráfego e infraestrutura.": "Sensors for rain, heat, traffic and infrastructure.",
        "Mapas de risco para enchentes, deslizamentos e ilhas de calor.": "Risk maps for floods, landslides and heat islands.",
        "Serviços públicos mais rápidos, eficientes e resilientes.": "Faster, more efficient and resilient public services."
    };

    const placeholders = {
        "Seu nome completo": "Your full name",
        "seuemail@exemplo.com": "you@example.com",
        "Sobre o que você quer falar?": "What do you want to talk about?",
        "Escreva sua mensagem aqui...": "Write your message here..."
    };

    const dynamicRules = [
        [/^Média de (\d{4}): (.*)$/i, "$1 average: $2"],
        [/^Média dos próximos dias: (.*)$/i, "Next days average: $1"],
        [/^média de (\d{4})$/i, "$1 average"],
        [/^média projetada de (\d{4})$/i, "$1 projected average"],
        [/^CONSULTANDO OPEN-METEO\.\.\.$/i, "CHECKING OPEN-METEO..."],
        [/^Consultando previsão$/i, "Checking forecast"],
        [/^Carregando previsão de 7 dias\.\.\.$/i, "Loading 7-day forecast..."],
        [/^Sem conexão com a Open-Meteo\.$/i, "No connection to Open-Meteo."],
        [/^Previsão indisponível$/i, "Forecast unavailable"],
        [/^ERRO AO CONSULTAR DADOS$/i, "ERROR FETCHING DATA"],
        [/^SENSAÇÃO (.*)$/i, "FEELS LIKE $1"],
        [/^DADOS AO VIVO$/i, "LIVE DATA"],
        [/^EMISSÕES ([↑↓]+)$/i, "EMISSIONS $1"],
        [/^RESILIÊNCIA ([↑↓]+)$/i, "RESILIENCE $1"],
        [/^SEGURANÇA HÍDRICA ([↑↓]+)$/i, "WATER SECURITY $1"],
        [/^POPULAÇÃO ([↑↓]+)$/i, "POPULATION $1"],
        [/^ECONOMIA ([↑↓]+)$/i, "ECONOMY $1"],
        [/^BIODIVERSIDADE ([↑↓]+)$/i, "BIODIVERSITY $1"],
        [/^ÁGUA ([↑↓]+)$/i, "WATER $1"],
        [/^CR ([↑↓]+)$/i, "CR $1"],
        [/^Open-Meteo · (.*)$/i, "Open-Meteo · $1"],
        [/^✓ CORRETO — (.*)$/i, "✓ CORRECT — $1"],
        [/^✕ ERRADO — (.*)$/i, "✕ WRONG — $1"],
        [/^QUIZ CONCLUÍDO$/i, "QUIZ COMPLETE"],
        [/^Foto (\d+)$/i, "Photo $1"],
        [/^(\d{4}) \/\/ (.*)$/i, "$1 // $2"],
        [/^(.*) \/\/ vida natural$/i, "$1 // natural life"],
        [/^(.*) \/\/ pressões climáticas$/i, "$1 // climate pressures"],
        [/^Open-Meteo · (.*)$/i, "Open-Meteo · $1"],
        [/^Dados atuais e previsão de 7 dias vêm da Open-Meteo\. Hoje: umidade (.*)%, vento (.*) km\/h e precipitação (.*) mm\. A projeção de 20 anos é educativa e usa uma tendência média global simplificada de \+0,20 °C por década como referência\.$/i, "Current data and 7-day forecast come from Open-Meteo. Today: humidity $1%, wind $2 km/h and precipitation $3 mm. The 20-year projection is educational and uses a simplified global average trend of +0.20 °C per decade as a reference."],
        [/^(\d)\/3 — Alguns detalhes passaram despercebidos\. Explore o site novamente e tente outra vez\.$/i, "$1/3 — Some details were missed. Explore the site again and try once more."],
        [/^(\d+) DECISÃO\(ÕES\) TOMADA\(S\) \/\/ ([-\d]+) CR DISPONÍVEIS \/\/ GANHO DE CR: (\d+)\/3$/i, "$1 DECISION(S) MADE // $2 CR AVAILABLE // CR GAIN: $3/3"]
    ];

    function normalize(text) {
        return text.replace(/\s+/g, " ").trim();
    }

    function hasTranslation(value) {
        const key = normalize(value);
        return Boolean(key && (en[key] || dynamicRules.some(([pattern]) => pattern.test(key))));
    }

    function translateValue(value, lang = currentLang) {
        const key = normalize(value);
        if (!key) return value;
        if (lang === "pt") return value;
        if (en[key]) return en[key];

        for (const [pattern, replacement] of dynamicRules) {
            if (pattern.test(key)) {
                return key.replace(pattern, replacement);
            }
        }

        return value;
    }

    function shouldSkip(node) {
        const parent = node.parentElement;
        if (!parent) return true;
        if (parent.closest("script, style, noscript, [data-i18n-skip], [data-language-menu]")) return true;
        if (parent.closest("#monitorCity, #monitorCountry, #monitorWeather, #forecastSummary, #forecastChart, #monitorTemp, #monitorYearAvg, #monitorPast, #monitorFuture, #monitorDelta, #monitorRisk, #monitorRiskText, #monitorPastLabel, #monitorFutureLabel, #monitorWater, #monitorForest, #monitorBiodiversity, #monitorAdaptation, #monitorContext, #monitorCode, #monitorCoords, #monitorRegion, #tagHeat, #tagWater, #tagExtreme, .monitor-live")) return true;
        return false;
    }

    function registerTextNode(node) {
        if (shouldSkip(node)) return;
        if (boundTextNodes.has(node)) return;
        const original = node.nodeValue;
        if (!hasTranslation(original)) return;
        boundTextNodes.add(node);
        textBindings.push({ node, original });
    }

    function registerElementText(element) {
        if (!(element instanceof HTMLElement)) return;
        if (element.closest("[data-i18n-skip], [data-language-menu]")) return;
        if (element.closest("#monitorCity, #monitorCountry, #monitorWeather, #forecastSummary, #forecastChart, #monitorTemp, #monitorYearAvg, #monitorPast, #monitorFuture, #monitorDelta, #monitorRisk, #monitorRiskText, #monitorPastLabel, #monitorFutureLabel, #monitorWater, #monitorForest, #monitorBiodiversity, #monitorAdaptation, #monitorContext, #monitorCode, #monitorCoords, #monitorRegion, #tagHeat, #tagWater, #tagExtreme, .monitor-live")) return;
        if (boundElementNodes.has(element)) return;
        if (element.children.length > 0) return;

        const original = element.textContent;
        if (!element.dataset.i18nEn && !hasTranslation(original)) return;

        boundElementNodes.add(element);
        elementBindings.push({ element, original });
    }

    function registerAttributes(element) {
        if (!(element instanceof HTMLElement)) return;
        if (element.closest("[data-i18n-skip], [data-language-menu]")) return;

        ["placeholder", "aria-label", "title", "alt", "value"].forEach(attr => {
            if (!element.hasAttribute(attr)) return;
            const original = element.getAttribute(attr);
            const translated = placeholders[original] || en[normalize(original)] || translateValue(original, "en");
            if (translated === original && !placeholders[original]) return;

            const attrs = boundAttrNodes.get(element) || new Set();
            if (attrs.has(attr)) return;
            attrs.add(attr);
            boundAttrNodes.set(element, attrs);
            attrBindings.push({ element, attr, original });
        });
    }

    function registerTranslatable(root = document.body) {
        if (!root) return;

        if (root instanceof HTMLElement) registerElementText(root);
        root.querySelectorAll?.("p, h1, h2, h3, h4, h5, h6, span, small, strong, em, button, a, label, li, figcaption, [data-i18n-en]").forEach(element => {
            registerElementText(element);
        });

        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

        while (walker.nextNode()) {
            registerTextNode(walker.currentNode);
        }

        if (root instanceof HTMLElement) registerAttributes(root);
        root.querySelectorAll?.("[placeholder], [aria-label], [title], [alt], [value]").forEach(element => {
            registerAttributes(element);
        });
    }

    function applyBindings() {
        textBindings.forEach(binding => {
            binding.node.nodeValue = currentLang === "pt"
                ? binding.original
                : translateValue(binding.original, "en");
        });

        elementBindings.forEach(binding => {
            binding.element.textContent = currentLang === "pt"
                ? binding.original
                : binding.element.dataset.i18nEn || translateValue(binding.original, "en");
        });

        attrBindings.forEach(binding => {
            const translated = currentLang === "pt"
                ? binding.original
                : placeholders[binding.original] || translateValue(binding.original, "en");
            binding.element.setAttribute(binding.attr, translated);
        });
    }

    function updateControls() {
        document.documentElement.lang = currentLang === "en" ? "en" : "pt-BR";
        document.querySelectorAll("[data-language-current]").forEach(label => {
            label.textContent = currentLang === "en" ? "EN" : "PT";
        });
        document.querySelectorAll("[data-language-trigger]").forEach(button => {
            button.setAttribute("aria-label", currentLang === "en" ? "Select language" : "Selecionar idioma");
        });
        document.querySelectorAll("[data-language-dropdown]").forEach(dropdown => {
            dropdown.setAttribute("aria-label", currentLang === "en" ? "Language" : "Idioma");
        });
        document.querySelectorAll("[data-language-option]").forEach(option => {
            const active = option.dataset.languageOption === currentLang;
            option.classList.toggle("active", active);
            option.setAttribute("aria-selected", active ? "true" : "false");
        });
    }

    function setLanguage(lang) {
        if (!["pt", "en"].includes(lang) || applying) return;
        const previousLang = currentLang;
        currentLang = lang;
        if (applying) return;
        applying = true;
        registerTranslatable(document.body);
        updateControls();
        applyBindings();
        updateControls();
        localStorage.setItem(STORAGE_KEY, currentLang);
        applying = false;
        if (previousLang !== currentLang) {
            window.dispatchEvent(new CustomEvent("climate13:languagechange", {
                detail: { language: currentLang, locale: currentLang === "en" ? "en-US" : "pt-BR" }
            }));
        }
    }

    function refresh(root = document.body) {
        registerTranslatable(root);
        applyBindings();
        updateControls();
    }

    function refreshDynamicSoon() {
        [80, 450, 1400, 2800].forEach(delay => {
            setTimeout(() => {
                if (!applying) {
                    refresh(document.body);
                }
            }, delay);
        });
    }

    function closeLanguageMenus() {
        document.querySelectorAll("[data-language-menu].open").forEach(menu => {
            menu.classList.remove("open");
            menu.querySelector("[data-language-trigger]")?.setAttribute("aria-expanded", "false");
        });
    }

    function initLanguageMenu() {
        document.querySelectorAll("[data-language-menu]").forEach(menu => {
            const trigger = menu.querySelector("[data-language-trigger]");
            const options = menu.querySelectorAll("[data-language-option]");

            trigger?.addEventListener("click", event => {
                event.stopPropagation();
                const willOpen = !menu.classList.contains("open");
                closeLanguageMenus();
                menu.classList.toggle("open", willOpen);
                trigger.setAttribute("aria-expanded", willOpen ? "true" : "false");
            });

            trigger?.addEventListener("keydown", event => {
                if (event.key === "ArrowDown") {
                    event.preventDefault();
                    menu.classList.add("open");
                    trigger.setAttribute("aria-expanded", "true");
                    options[0]?.focus();
                }
            });

            options.forEach(option => {
                option.addEventListener("click", event => {
                    event.stopPropagation();
                    setLanguage(option.dataset.languageOption);
                    closeLanguageMenus();
                });

                option.addEventListener("keydown", event => {
                    const optionList = Array.from(options);
                    const currentIndex = optionList.indexOf(option);

                    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                        event.preventDefault();
                        const direction = event.key === "ArrowDown" ? 1 : -1;
                        const nextIndex = (currentIndex + direction + optionList.length) % optionList.length;
                        optionList[nextIndex]?.focus();
                    }

                    if (event.key === "Escape") {
                        closeLanguageMenus();
                        trigger?.focus();
                    }
                });
            });
        });

        document.addEventListener("click", event => {
            if (!event.target.closest("[data-language-menu]")) {
                closeLanguageMenus();
            }
            refreshDynamicSoon();
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                closeLanguageMenus();
            }
        });
    }

    window.CLIMATE13_I18N = {
        setLanguage,
        refresh,
        t(keyOrText) {
            if (currentLang === "pt") return keyOrText;
            return translateValue(keyOrText, "en");
        },
        locale() {
            return currentLang === "en" ? "en-US" : "pt-BR";
        },
        get language() {
            return currentLang;
        }
    };

    function startI18n() {
        initLanguageMenu();
        setLanguage(currentLang);
        refreshDynamicSoon();
    }

    if (document.body) {
        startI18n();
    } else {
        document.addEventListener("DOMContentLoaded", startI18n);
    }
})();
