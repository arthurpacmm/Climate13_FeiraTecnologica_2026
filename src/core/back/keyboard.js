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
