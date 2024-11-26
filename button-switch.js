let btn = document.querySelectorAll(".switch-mode");

btn.forEach((el) => {
    el.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        el.classList.toggle("dark-mode-active");
    })
})

