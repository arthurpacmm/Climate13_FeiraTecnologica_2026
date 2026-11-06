/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("mobile-open");
    menuBtn.textContent = mainNav.classList.contains("mobile-open") ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("mobile-open");
        menuBtn.textContent = "☰";
    });
});
