const app = document.getElementById("app");

app.innerHTML = `
    <img src="../imagens/cachorro.jpg" alt="Cachorro resgatado pela ONG Patas & Laços">

    <section>
        <h2>Sobre a Patas & Laços</h2>
        <p>
            A Patas & Laços é uma ONG dedicada ao resgate,
            cuidado e proteção de animais em situação de abandono.
        </p>
    </section>

    <section>
        <h2>Entre em contato</h2>
        <p>Email: contato@pataselacos.org.br</p>
        <p>Telefone: (49) 99999-9999</p>
    </section>
`;
const links = document.querySelectorAll(".menu a");

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const pagina = this.getAttribute("href");

        if (pagina === "index.html") {
            carregarInicio(app);
        }

        if (pagina === "projetos.html") {
            carregarProjetos(app);
        }

        if (pagina === "cadastro.html") {
            carregarCadastro(app);
        }
    });
});

carregarInicio(app);