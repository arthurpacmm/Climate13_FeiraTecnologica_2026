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


