document.querySelectorAll(".goal-card").forEach(card => {
    const toggle = () => {
        const expanded = card.classList.toggle("expanded");
        card.setAttribute("aria-expanded", expanded ? "true" : "false");
    };

    card.addEventListener("click", toggle);
    card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle();
        }
    });
});
