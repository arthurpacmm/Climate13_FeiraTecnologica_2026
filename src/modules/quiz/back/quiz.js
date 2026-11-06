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
            "Melhorar as condições do solo nas áreas agrícolas para que consigam suportar épocas de seca",
            "Concentrar os investimentos em grandes reservatórios para guardar água durante os períodos de chuva"
        ],
        correct: 0,
        feedback: "Combinar gestão da água, conservação do solo e adaptação das culturas torna a agricultura mais preparada para diferentes extremos climáticos."
    },

    {
        question: "Uma indústria quer reduzir seu impacto climático sem diminuir sua produção. Qual plano seria mais completo?",
        answers: [
            "Investir em reflorestamento e preservar áreas verdes para compensar suas emissões",
            "Trocar parte da eletricidade por energia renovável para seus processor mais poluentes",
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

    window.CLIMATE13_I18N?.refresh(document.querySelector(".choices-section"));

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

        window.CLIMATE13_I18N?.refresh(document.querySelector(".choices-section"));

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

    window.CLIMATE13_I18N?.refresh(document.querySelector(".choices-section"));

}


choiceRestart.addEventListener("click", () => {

    currentChoice = 0;
    choiceScore = 0;

    loadChoice();

});


loadChoice();


