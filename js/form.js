//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(form) {
    const caixa1 = form.elements.namedItem("caixa1");

    if (!caixa1 || !caixa1.checked) {
        alert("Para enviar seus dados, você precisa aceitar os termos e condições.");
        return false;
    }

    const data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value
    );

    console.log(data);

    const nome = document.getElementById("nomeid");
    if (nome && nome.value.trim() !== "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

    return true;
}

window.onload = function() {
    const caixa1 = document.getElementById("caixa1");
    const botao = document.getElementById("envio");
    const form = document.getElementById("formContato");

    if (!caixa1 || !botao || !form) {
        return;
    }

    // Mostrar alerta ao clicar no botão se os termos não estiverem aceitos
    botao.addEventListener("click", function(event) {
        if (!caixa1.checked) {
            alert("Para enviar seus dados, você precisa aceitar os termos e condições.");
            event.preventDefault();
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (!caixa1.checked) {
            alert("Para enviar seus dados, você precisa aceitar os termos e condições.");
            return;
        }

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (!Post(form)) {
            return;
        }

        form.reset();
        caixa1.checked = false;
    });
};
