// Meus estilos
// <link rel="stylesheet" href="./assets/styles/reset.css">
const reset = document.createElement('link');
reset.rel = 'stylesheet';
reset.href = './assets/styles/reset.css';

// <link rel="stylesheet" href="./assets/styles/styles.css">
const style = document.createElement('link');
style.rel = 'stylesheet'; // style.setAttribute('rel', 'stylesheet');
style.href = './assets/styles/style.css';

// <link rel="stylesheet" href="./assets/styles/print.css" media="print">
const print = document.createElement('link');
print.rel = 'stylesheet';
print.href = './assets/styles/print.css';
print.media = 'print';

// Fontes do Google
// <link rel="preconnect" href="https://fonts.googleapis.com">
const googleapis = document.createElement('link');
googleapis.rel = 'preconnect';
googleapis.href = 'https://fonts.googleapis.com';

// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
const gstatic = document.createElement('link');
gstatic.rel = 'preconnect';
gstatic.href = 'https://fonts.gstatic.com';
gstatic.crossOrigin = '';

// <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,100&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
const fontUbuntu = document.createElement('link'); // <link>
fontUbuntu.rel = 'stylesheet'; // <link rel="stylesheet">
fontUbuntu.href = 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap'; // <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap">

document.head.append(reset, googleapis, gstatic, fontUbuntu, style, print);