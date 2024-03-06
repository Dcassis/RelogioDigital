// JS DO RELÓGIO

const hours = document.getElementById("hours")
const min = document.getElementById("minutes")
const sec = document.getElementById("seconds")

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
 

h = h <10 ? "0"+ h : h;
m = m <10 ? "0"+ m : m;
s = s <10 ? "0"+ s : s;

    hours.innerText= h;
    min.innerText= m;
    sec.innerText= s;

    setTimeout(() => {
        updateClock()
    },1000)
}

updateClock()

//JS DO CALENDÁRIO

const dia = document.getElementById("day")
const mes = document.getElementById("month")
const ano = document.getElementById("year")

function updateData() {
    let today = new Date().getUTCDate()
    let ms = new Date().getMonth() +1
    let y = new Date().getFullYear()

    today = today <10 ? "0"+ today : today;
    ms = ms <10 ? "0"+ ms : ms;

    dia.innerText= today;
    mes.innerText= ms;
    ano.innerText= y;
}

updateData()

