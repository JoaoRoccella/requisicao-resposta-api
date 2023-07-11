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

// Appending os links de estilos no head
document.head.append(googleapis);
document.head.append(gstatic);
document.head.append(fontUbuntu);
document.head.append(style);

function getProdutos(btnDelete = false) {

    fetch('http://localhost:3000/produtos/', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => {

            const listaProdutos = document.querySelector('#listaProdutos');
            listaProdutos.innerHTML = "";
            listaProdutos.classList.add('lista-produtos');

            for (let i = 0; i < resposta.length; i++) {

                const ul = document.createElement('ul');
                ul.classList.add('produto');
                ul.id = `produto-${resposta[i].id}`;
                ul.tabIndex = resposta[i].id;

                const img = document.createElement('img');
                img.setAttribute('src', `./assets/images/${resposta[i].imagem}`);
                img.setAttribute('height', '50');
                img.setAttribute('data-produto', 'imagem');

                const liId = document.createElement('li');
                liId.innerHTML = resposta[i].id;
                liId.setAttribute('data-produto', 'id');
                
                const liDescricao = document.createElement('li');
                liDescricao.innerHTML = resposta[i].descricao;
                liDescricao.setAttribute('data-produto', 'descricao');
                
                const liPreco = document.createElement('li');
                liPreco.innerHTML = resposta[i].preco;
                liPreco.setAttribute('data-produto', 'preco');
                
                const liImg = document.createElement('li');
                liImg.appendChild(img);
                
                ul.append(liImg, liId, liDescricao, liPreco);
                
                // Início do código do botão
                if (btnDelete) {

                    const liBotao = document.createElement('li');
    
                    const botao = document.createElement('button');
                    botao.type = 'button';
                    botao.innerHTML = '❌';
                    botao.classList.add('botao-delete');
                    botao.value = resposta[i].id;
    
                    ul.appendChild(liBotao).appendChild(botao);
                }
                // Fim do código do botão

                listaProdutos.appendChild(ul);
            }

        });
}