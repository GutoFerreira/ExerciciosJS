const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const content = document.querySelector('.content');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let criaTag = document.createElement(tag);
    let criaTexto = document.createTextNode(texto);
    //criaTag.innerText = texto;
    criaTag.appendChild(criaTexto);
    div.appendChild(criaTag);
}
content.appendChild(div);