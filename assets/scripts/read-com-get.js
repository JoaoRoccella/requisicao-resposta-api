// Busca os produtos
function buscaProdutos() {

    fetch('http://localhost:3000/produtos', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => {

            for (let i = 0; i < resposta.length; i++) {

                const ul = document.createElement('ul');
                ul.classList.add('produto');

                // Implementação Jordânea
                if (resposta[i].atualizado) {
                    ul.style.color = 'blue';
                }
                // IJ-Fim

                const liId = document.createElement('li');
                liId.setAttribute('data-produto', 'id');
                liId.innerHTML = resposta[i].id;
                liId.classList.add('produto-id');

                const liDescricao = document.createElement('li');
                liDescricao.setAttribute('data-produto', 'descricao');
                liDescricao.innerHTML = resposta[i].descricao;

                const liPreco = document.createElement('li');
                liPreco.setAttribute('data-produto', 'preco');
                liPreco.innerHTML = resposta[i].preco;

                ul.append(liId, liDescricao, liPreco);

                document.querySelector('#listaProdutos').appendChild(ul);
            }

        });
}

export { buscaProdutos };