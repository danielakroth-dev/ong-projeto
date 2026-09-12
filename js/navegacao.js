import cachorro from "../imagens/cachorro.jpg";

export function carregarInicio(app) {
    app.innerHTML = `
        <img src="${cachorro}" alt="Cachorro resgatado pela ONG Patas & Laços">

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
}

export function carregarProjetos(app) {
    app.innerHTML = `
        <section>
            <h2>Doações</h2>
            <p>
                As doações ajudam a Patas & Laços a oferecer alimentação,
                cuidados veterinários e abrigo para animais resgatados.
            </p>

            <article>
                <h3>Como contribuir</h3>
                <p>
                    Você pode contribuir financeiramente para ajudar nos
                    custos de alimentação, medicamentos e tratamentos.
                </p>
            </article>
        </section>

        <section>
            <h2>Voluntariado</h2>
            <p>
                Os voluntários são fundamentais para o cuidado dos animais
                e para a realização das ações da ONG.
            </p>

            <article>
                <h3>Como ser voluntário</h3>
                <p>
                    Você pode ajudar com cuidados aos animais, eventos,
                    campanhas de adoção e divulgação das ações da ONG.
                </p>
            </article>
        </section>
    `;
}