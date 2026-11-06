/* ================= NAVBAR ================= */

const navbar = document.getElementById("navbar");
const topBtn = document.getElementById("topBtn");

function updateNavbarState() {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    topBtn?.classList.toggle("visible", window.scrollY > 360);
}

window.addEventListener("scroll", updateNavbarState);
updateNavbarState();

topBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

