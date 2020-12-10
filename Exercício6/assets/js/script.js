window.addEventListener('load', () => {
    clock();
});

function clock () {
    const contador = document.querySelector("#contador");
    let segundos = 0;
    let timer;

    document.addEventListener('click', (e) => {
        const element = e.target;
        if(element.classList.contains('iniciar')){
            contador.classList.remove('pausado');
            clearInterval(timer);
            contagem();
        }
        if(element.classList.contains('pausar')){
            clearInterval(timer);
            contador.classList.add('pausado');
        }
        if(element.classList.contains('zerar')){
            contador.classList.remove('pausado');
            clearInterval(timer);
            contador.innerHTML = '00:00:00';
            segundos = 0;
        }
    })

    function criaHora(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'        
        })
    }
    
    function contagem(){
        timer = setInterval(() => {
            segundos++;
            contador.innerHTML = criaHora(segundos);
        }, 1000);
    }
}
