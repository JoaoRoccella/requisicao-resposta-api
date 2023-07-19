# 4 passos para transformar CommomJS em ModuleJS

1. Dividir as funções em arquivos de forma lógica
- update-com-put.html
- update-com-put.js
- read-com-get.js

2. Exportar a função que será transformada em módulo

```js
export { buscaProdutos }
```

3. Importar a função que será usada no arquivo que fará o uso dela

```js
import { buscaProdutos } from "./read-com-get.js";
```

4. Incluir o arquivo no HTML via tag `<script>` com o atributo `type="module"`

```html
<script type="module" src="./caminho/ate/o/arquivo.js"></script>
```

## **Desafio**: resolver a duplicação de produtos na página