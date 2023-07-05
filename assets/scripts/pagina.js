// Criando um título nível 1
const h1 = document.createElement('h1');
h1.innerHTML = 'Minha página dinâmica';
h1.setAttribute('id', 'titulo');
h1.setAttribute('data-test', 'test-title');
h1.classList.add('titulo-pagina');
h1.style.color = 'maroon';
h1.style.fontFamily = 'Arial';

// Criando um título nível 2
const h2 = document.createElement('h2');
h2.innerHTML = 'Esta página está sendo gerada dinamicamente';

// Criando um parágrafo
const p1 = document.createElement('p');
p1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cumque cupiditate iste tempora, ipsam corrupti aliquam officia doloremque possimus iure.';

// Pendurando os filhos
document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(p1);
