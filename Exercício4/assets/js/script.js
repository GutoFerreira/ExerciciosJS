const elements = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'footer', text: 'Frase 3'},
    {tag: 'section', text: 'Frase 4'}
];

const content = document.querySelector('.content');
const div = document.createElement('div');

/*for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let criaTag = document.createElement(tag);
    let criaTexto = document.createTextNode(texto);
    //criaTag.innerText = texto;
    criaTag.appendChild(criaTexto);
    div.appendChild(criaTag);
}
*/

//Refactoring 12/12/2020
for(let i of elements){
    let {tag, text} = elements[i];
    let createTag = document.createElement(tag);
    let createText = document.createTextNode(text);

    createTag.appendChild(createText);
    div.appendChild(createTag);
}
content.appendChild(div);

