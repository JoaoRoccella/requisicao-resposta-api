import { buscaProdutos } from './read-com-get.js'

buscaProdutos();
// Desafio 1...
document.querySelector('#listaProdutos').addEventListener('click', event => {
    // console.log(event.target);
    if (event.target.closest('ul').classList.contains('produto')) {
        // console.log(event.target);
        const elementoBase = event.target.closest('ul');

        document.querySelector('input#id').value = elementoBase.querySelector('[data-produto="id"]').innerHTML;

        document.querySelector('input#descricao').value = elementoBase.querySelector('[data-produto="descricao"]').innerHTML;

        document.querySelector('input#preco').value = elementoBase.querySelector('[data-produto="preco"]').innerHTML;
    }

    verificaSeInputsEstaoPreenchidos(); // parte do desafio 2
});

// Desafio 2...
function verificaSeInputsEstaoPreenchidos() {

    const idPreenchido = document.querySelector('input#id').value !== "";
    const descricaoPreenchido = document.querySelector('input#descricao').value !== "";
    const precoPreenchido = document.querySelector('input#preco').value !== "";

    // Verifica se há algum input preenchido
    if (idPreenchido || descricaoPreenchido || precoPreenchido) {
        document.querySelector('button#btCancelar').removeAttribute('disabled');
    } else {
        document.querySelector('button#btCancelar').setAttribute('disabled', '');
    }

    // Desafio 3...
    // Faça o mesmo com o botão "Atualizar", para que ele fique ativo apenas se houver algum dado para ser atualizado e o campo ID estiver preenchido.

    if (idPreenchido) {
        document.querySelector('button#btAtualizar').removeAttribute('disabled');
    } else {
        document.querySelector('button#btAtualizar').setAttribute('disabled', '');
    }

}

// Complemento desafio 2: desabilita o botão no reset do formulário
document.querySelector('form').addEventListener('reset', () => {
    document.querySelector('button#btCancelar').setAttribute('disabled', '');
    document.querySelector('button#btAtualizar').setAttribute('disabled', '');
});

// Verifica os campos do formulário na digitação manual
document.querySelector('form').addEventListener('input', verificaSeInputsEstaoPreenchidos);

// Evento do botão Atualizar que dispara a requisição de PUT
document.querySelector('#btAtualizar').addEventListener('click', () => {

    const dados = {
        'id': null,
        'descricao': document.querySelector('input#descricao').value,
        'preco': document.querySelector('input#preco').value,
        'atualizado': true // implementação Jordânea
    }
    // console.log(JSON.stringify(dados))

    const id = document.querySelector('input#id').value;

    // console.log(id)

    fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resposta => {
            
            if (resposta.ok) {
                alert('Produto atualizado');
                buscaProdutos();
            }
        });

});
