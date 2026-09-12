const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        const aberto = menu.classList.toggle("aberto");
        botaoMenu.setAttribute("aria-expanded", String(aberto));
    });
}
