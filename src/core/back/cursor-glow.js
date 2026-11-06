const rootStyle = document.documentElement.style;

window.addEventListener("pointermove", event => {
    rootStyle.setProperty("--cursor-x", `${event.clientX}px`);
    rootStyle.setProperty("--cursor-y", `${event.clientY}px`);
    document.body.classList.add("cursor-glow");
});

window.addEventListener("pointerleave", () => {
    document.body.classList.remove("cursor-glow");
});
