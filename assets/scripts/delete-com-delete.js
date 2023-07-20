import { buscaProdutos } from "./read-com-get.js";

buscaProdutos(true);

document.addEventListener('click', event => {
    if(event.target.classList.contains('delete-button')){

        fetch(`http://localhost:3000/produtos/${event.target.value}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(resposta => {
                if(resposta.ok){
                    alert('Produto apagado!');
                    buscaProdutos(true);
                }
            })

    }
});