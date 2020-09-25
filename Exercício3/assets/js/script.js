const form = document.querySelector('.form');

form.addEventListener("submit", function formMedia(e){
    e.preventDefault();

    let nota1 = e.target.querySelector('#nota1');
    let nota2 = e.target.querySelector('#nota2');
    let nota3 = e.target.querySelector('#nota3');
    let nota4 = e.target.querySelector('#nota4');
    const res = document.querySelector('.res');
    nota1 = Number(nota1.value);
    nota2 = Number(nota2.value);
    nota3 = Number(nota3.value);
    nota4 = Number(nota4.value);


    const media = calculoRes(nota1, nota2, nota3, nota4);
    const p = createP();

    res.innerHTML = '';
    p.innerHTML = validacao(p, media);
    res.appendChild(p);

    if(!nota1 || nota1 > 10){
        res.innerHTML = `Nota 1 vazia ou inválida!`;
        return;
    }
    if(!nota2 || nota2 > 10){
        res.innerHTML = `Nota 2 vazia ou inválida!`;
        return;
    }
    if(!nota3 || nota3 > 10){
        res.innerHTML = `Nota 3 vazia ou inválida!`;
        return;
    }
    if(!nota4 || nota4 > 10){
        res.innerHTML = `Nota 4 vazia ou inválida!`;
        return;
    }
});

function calculoRes(nota1, nota2, nota3, nota4){
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media.toFixed(1);
};

function createP(){
    const p = document.createElement('p');
    return p;
};

function validacao(p, media){
    if(media >= 6){
        p.classList.add('paragrafo');
        return `Sua média é ${media}. Você está Aprovado!`;
    } else if (media >=4){
        p.classList.add('paragrafo-not');
        return `Sua média é ${media}. Você está de Recuperação!`;
    } else {
        p.classList.add('paragrafo-not');
        return `Sua média é ${media}. Você está Reprovado!`;
    }
};

function invaliD(p, nota1, nota2, nota3, nota4){
    if(!nota1 || nota1 > 10){
        p.classList.add('paragrafo-not');
        return `Nota 1 vazia ou inválida!`;
    }
    if(!nota2 || nota2 > 10){
        p.classList.add('paragrafo-not');
        return `Nota 2 vazia ou inválida!`;
    }
    if(!nota3 || nota3 > 10){
        p.classList.add('paragrafo-not');
        return `Nota 3 vazia ou inválida!`;
    }
    if(!nota4 || nota4 > 10){
        p.classList.add('paragrafo-not');
        return `Nota 4 vazia ou inválida!`;
    }
};




