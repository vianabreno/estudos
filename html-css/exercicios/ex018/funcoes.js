function semestre(nota){
    if(nota >= 60){
        return 'APROVADO'
    } else if(nota >= 40 && nota < 60){
        return 'RECUPERAÇÃO'
    } else {
        return 'REPROVADO'
    }
}
var brenoViana = semestre(50)
var joellyDias = semestre(70)
var bethDias = semestre(30)
console.log(`Breno Viana (${brenoViana})`)
console.log(`Joelle Dias (${joellyDias})`)
console.log(`Beth Dias (${bethDias})`)