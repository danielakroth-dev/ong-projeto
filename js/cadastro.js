function carregarCadastro(app) {
    app.innerHTML = `
        <section>
            <h2>Cadastro</h2>

            <form>
                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome">

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email">

                <label for="nascimento">Data de nascimento:</label>
                <input type="date" id="nascimento" name="nascimento">

                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco">

                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade">

                <label for="estado">Estado:</label>
                <input type="text" id="estado" name="estado">

                <button type="submit">Cadastrar</button>
            </form>
        </section>
    `;

    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const campos = formulario.querySelectorAll("input");
        let formularioValido = true;

        campos.forEach(campo => {
            campo.classList.remove("campo-erro");

            const mensagem = campo.nextElementSibling;

            if (mensagem && mensagem.classList.contains("mensagem-erro")) {
                mensagem.remove();
            }

            if (campo.value.trim() === "") {
                formularioValido = false;
                campo.classList.add("campo-erro");

                const erro = document.createElement("small");
                erro.classList.add("mensagem-erro");
                erro.textContent = "Este campo é obrigatório.";

                campo.insertAdjacentElement("afterend", erro);
            }
        });

        if (formularioValido) {
            const dadosCadastro = {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                nascimento: document.getElementById("nascimento").value,
                endereco: document.getElementById("endereco").value,
                cidade: document.getElementById("cidade").value,
                estado: document.getElementById("estado").value
            };

            localStorage.setItem("cadastro", JSON.stringify(dadosCadastro));

            alert("Cadastro realizado com sucesso!");
        }
    });

    const dadosSalvos = localStorage.getItem("cadastro");

    if (dadosSalvos) {
        const dadosCadastro = JSON.parse(dadosSalvos);

        document.getElementById("nome").value = dadosCadastro.nome;
        document.getElementById("email").value = dadosCadastro.email;
        document.getElementById("nascimento").value = dadosCadastro.nascimento;
        document.getElementById("endereco").value = dadosCadastro.endereco;
        document.getElementById("cidade").value = dadosCadastro.cidade;
        document.getElementById("estado").value = dadosCadastro.estado;
    }
}