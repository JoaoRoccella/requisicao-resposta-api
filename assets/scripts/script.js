// Meus estilos
const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = './assets/styles/style.css';

// Fontes do Google
const googleapis = document.createElement('link');
googleapis.rel = 'preconnect';
googleapis.href = 'https://fonts.googleapis.com';

const gstatic = document.createElement('link');
gstatic.rel = 'preconnect';
gstatic.href = 'https://fonts.gstatic.com';
gstatic.crossOrigin = '';

const fontUbuntu = document.createElement('link');
fontUbuntu.rel = 'stylesheet';
fontUbuntu.href = 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap';

document.head.append(googleapis);
document.head.append(gstatic);
document.head.append(fontUbuntu);
document.head.append(style);

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
            
            document.querySelector('#listaProdutos')
                .appendChild(document.createElement('h3'))
                .innerHTML = 'Produtos cadastrados';

            for (let i = 0; i < resposta.length; i++) {

                const ul = document.createElement('ul');
                ul.classList.add('produto');

                const img = document.createElement('img');
                img.setAttribute('height', '40');

                ul.appendChild(document.createElement('li')).innerHTML = `SKU: ${resposta[i].id}`;
                ul.appendChild(document.createElement('li')).innerHTML = resposta[i].descricao;
                ul.appendChild(document.createElement('li')).innerHTML = `$ ${resposta[i].preco}`;
                ul.appendChild(document.createElement('li')).appendChild(img).setAttribute('src', `./assets/images/${resposta[i].imagem}`);

                document.querySelector('#listaProdutos').appendChild(ul);
            }

        });
}