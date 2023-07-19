import { buscaProdutos } from "./read-com-get.js";

buscaProdutos();

function verificaSeInputsEstaoPreenchidos() {

    const descricaoPreenchido = document.querySelector('input#descricao').value !== "";
    const precoPreenchido = document.querySelector('input#preco').value !== "";

    if (descricaoPreenchido || precoPreenchido) {
        document.querySelector('button#btCadastrar').removeAttribute('disabled');
        document.querySelector('button#btCancelar').removeAttribute('disabled');
    } else {
        document.querySelector('button#btCadastrar').setAttribute('disabled', '');
        document.querySelector('button#btCancelar').setAttribute('disabled', '');
    }

}

// Complemento desafio 2: desabilita o botão no reset do formulário
document.querySelector('form').addEventListener('reset', () => {
    document.querySelector('button#btCadastrar').setAttribute('disabled', '');
    document.querySelector('button#btCancelar').setAttribute('disabled', '');
});

// Verifica os campos do formulário na digitação manual
document.querySelector('form').addEventListener('input', verificaSeInputsEstaoPreenchidos);

document.querySelector('#btCadastrar').addEventListener('click', () => {

    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value
    }

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => {
        if(resposta.ok) {
            alert('Produto cadastrado');
            buscaProdutos();
        }
    });

});