// carne - 400 gr por pessoa  +6 horas - 650
// refrigerante/agua - 1000ml por pessoa +6 horas 2000ml

//crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {

    let adultos = inputAdultos.value

    let criancas = inputCriancas.value

    let duracao = inputDuracao.value

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let qdtTotalRefri = refriPP(duracao) * adultos + (refriPP(duracao) / 2 * criancas)

    resultado.innerHTML = "Resultado:"
    resultado.innerHTML += `<p>${qdtTotalCarne/1000} Kg de carne.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalRefri/2000)} Garrafas de refrigerante.</p>`
}

function carnePP(duracao){
    if (duracao >= 6){
        return 650
    }
    else{
        return 400
    }
}
function refriPP(duracao){
    if (duracao >= 6){
        return 2000
    }
    else{
        return 1000
    }
}