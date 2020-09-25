const data = new Date();
const day = data.getDay();

const myDate = document.querySelector('.date');

// myDate.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

function formactDay(day) {
    let dayWeek;
    switch (day) {
        case 0:
            return dayWeek = "Domingo";
        case 1:
            return dayWeek = "Segunda-feira";
        case 2:
            return dayWeek = "Terça-feira";
        case 3:
            return dayWeek = "Quarta-feira";
        case 4:
            return dayWeek = "Quinta-feira";
        case 5:
            return dayWeek = "Sexta-feira";
        case 6:
            return dayWeek = "Sábado";
    }
}
const dayWeek = formactDay(day);

const month = data.getMonth();

function formactMonth(month) {
    let stringMonth;

    switch (month) {
        case 0:
            return stringMonth = "Janeiro";
        case 1:
            return stringMonth = "Fevereiro";
        case 2:
            return stringMonth = "Março";
        case 3:
            return stringMonth = "Abril";
        case 4:
            return stringMonth = "Maio";
        case 5:
            return stringMonth = "Junho";
        case 6:
            return stringMonth = "Julho";
        case 7:
            return stringMonth = "Agosto";
        case 8:
            return stringMonth = "Setembro";
        case 9:
            return stringMonth = "Outubro";
        case 10:
            return stringMonth = "Novembro";
        case 11:
            return stringMonth = "Dezembro";
    }
}
function zero(num){
    return num >= 10 ? num : `0${num}`;
}

function createDate(data){
    const dayMonth = data.getDate();
    const year = data.getFullYear();
    const hour = data.getHours();
    const minute = data.getMinutes();

    return `${dayWeek}, ${dayMonth} de ${stringMonth} de ${year} às ${zero(hour)}:${zero(minute)}`;
}

const stringMonth = formactMonth(month);

myDate.innerHTML = createDate(data);
