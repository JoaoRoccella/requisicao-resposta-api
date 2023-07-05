window.addEventListener('load', () => {
    
    // Gerando o título do site
    const h1 = document.createElement('h1');
    h1.classList.add('titulo-pagina');
    h1.setAttribute('id', 'titulo');
    h1.setAttribute('data-test', 'title-test');
    h1.innerHTML = 'Página dinâmica';
    h1.style.color = 'red';

    // Gerando o subtítulo do site
    const h2 = document.createElement('h2');
    h2.classList.add('subtitulo-pagina');
    h2.setAttribute('data-test', 'subtitle-test');
    h2.innerHTML = 'Subtítulo dinâmico';

    // Gerando um parágrafo do site
    const p1 = document.createElement('p');
    p1.classList.add('paragrafo-normal');
    p1.setAttribute('id', 'paragrafo');
    p1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, nemo minima veniam quis veritatis a doloremque dolorem explicabo labore repellendus.';

    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.body.appendChild(p1);
});
