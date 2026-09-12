const formulario = document.getElementById("cadastro-form");

if (formulario) {
    const feedback = document.getElementById("feedback");
    const campos = formulario.querySelectorAll("input");

    const dadosSalvos = localStorage.getItem("cadastro");
    console.log("Dados salvos:", dadosSalvos);

    if (dadosSalvos) {
        try {
            const dados = JSON.parse(dadosSalvos);

            campos.forEach(function (campo) {
                if (dados[campo.name] !== undefined) {
                    campo.value = dados[campo.name];
                }
            });
        } catch (erro) {
            localStorage.removeItem("cadastro");
        }
    }

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        let formularioValido = true;

        campos.forEach(function (campo) {
            campo.classList.remove("campo-erro");

            if (campo.value.trim() === "") {
                formularioValido = false;
                campo.classList.add("campo-erro");
            }
        });

        if (!formularioValido) {
            feedback.textContent = "Preencha todos os campos obrigatórios.";
            feedback.className = "feedback erro";
            return;
        }

        const dados = Object.fromEntries(new FormData(formulario).entries());

        localStorage.setItem("cadastro", JSON.stringify(dados));

        feedback.textContent = "Cadastro realizado com sucesso!";
        feedback.className = "feedback sucesso";
    });
}
