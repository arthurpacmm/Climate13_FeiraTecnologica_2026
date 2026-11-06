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


