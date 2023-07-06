const linkStyles = document.createElement('link');
linkStyles.setAttribute('rel', 'stylesheet');
linkStyles.setAttribute('href', './assets/styles/style.css');

document.head.appendChild(linkStyles);

function getProdutos() {
    
    fetch('http://localhost:3000/produtos/', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => {

            document.querySelector('#listaProdutos').innerHTML = "";

            for (let i = 0; i < resposta.length; i++) {

                const ul = document.createElement('ul');
                ul.classList.add('produto');

                const img = document.createElement('img');
                img.setAttribute('height', '50');

                ul.appendChild(document.createElement('li')).innerHTML = resposta[i].id;

                ul.appendChild(document.createElement('li')).innerHTML = resposta[i].descricao;

                ul.appendChild(document.createElement('li')).innerHTML = resposta[i].preco;

                ul.appendChild(document.createElement('li')).appendChild(img).setAttribute('src', resposta[i].imagem);

                document.querySelector('#listaProdutos').appendChild(ul);
            }

        });
}