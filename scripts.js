// pegar números
let horas = document.querySelector(".hours-num")
let minutos = document.querySelector(".minutos-num")
let seconds = document.querySelector(".seconds-num")
let x = new Date()
// fazer com que eles peguem a data atual
let data = document.querySelector(".date")

function relogio() {
    let x = new Date()
    horas.textContent = x.getHours()
    minutos.textContent = x.getMinutes()
    seconds.textContent = x.getSeconds()

    if(horas >= 12) {
        data.textContent = "PM"
    } else {
        data.textContent = "AM"
        data.style.backgroundColor = "Orange"
    }
}

relogio()

setInterval(relogio, 1000)



// isso tem que ser atualizado no navegador
// mudar o pm para am quando for necessário