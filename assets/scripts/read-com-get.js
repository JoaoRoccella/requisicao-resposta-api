// Busca os produtos
function buscaProdutos(mostraBtDelete = false) {

    fetch('http://localhost:3000/produtos', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => {

            document.querySelector('#listaProdutos').innerHTML = '';

            const tituloProdutos = document.createElement('h2');
            tituloProdutos.classList.add('titulo-lista');
            tituloProdutos.innerHTML = 'Lista de Produtos';
            document.querySelector('#listaProdutos').appendChild(tituloProdutos);

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
                // liId.classList.add('produto-id');

                const liDescricao = document.createElement('li');
                liDescricao.setAttribute('data-produto', 'descricao');
                liDescricao.innerHTML = resposta[i].descricao;

                const liPreco = document.createElement('li');
                liPreco.setAttribute('data-produto', 'preco');
                liPreco.innerHTML = resposta[i].preco;

                ul.append(liId, liDescricao, liPreco);

                if (mostraBtDelete) {
                    // botão delete
                    const liDelete = document.createElement('li');
                    const btDelete = document.createElement('button');
                    btDelete.innerHTML = '❌';
                    btDelete.value = resposta[i].id;
                    btDelete.classList.add('delete-button');
    
                    ul.appendChild(liDelete).appendChild(btDelete);
                    // fim delete
                }

                document.querySelector('#listaProdutos').appendChild(ul);
            }

        });
}

export { buscaProdutos };