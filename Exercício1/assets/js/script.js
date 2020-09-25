const form = document.querySelector('.form');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log('sem evento');

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        mensagem('Peso inválido', false);
        return;
    }
    if (!altura) {
        mensagem('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = nivelIMC(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    mensagem(msg, true);
});

function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(1);
}

function nivelIMC(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc < 18.5) return nivel[0];
    if (imc >= 18.5) return nivel[1];
    if (imc >= 25) return nivel[2];
    if (imc >= 30) return nivel[3];
    if (imc >= 35) return nivel[4];
    if (imc >= 40) return nivel[5];
}

function createP() {
    const p = document.createElement('p');
    return p;
}

function mensagem(msg, isValue) {
    const res = document.querySelector('.res');
    res.innerHTML = "";

    const p = createP();

    if (isValue) {
        p.classList.add('paragrafo');
    } else {
        p.classList.add('paragrafo-not');
    }

    p.innerHTML = msg;
    res.appendChild(p);
}
