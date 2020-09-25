const paragrafos = document.querySelector('.paragrafos');
const myP = paragrafos.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const colorBody = styleBody.backgroundColor;

for (let p of myP){
    p.style.color = "#fff";
    p.style.backgroundColor = colorBody;
}