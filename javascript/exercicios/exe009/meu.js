function sacar(){
    var data = new Date()
    var datafull = data.getFullYear
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    var sal = window.document.getElementById('saldo')
    var saldo = Number(sal.value)
    var saq = window.document.getElementById('saque')
    var saque = Number(saq.value)
    var saldoo = saldo - saque
    var sal$ = saldoo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    var saq$ = saque.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    var res = window.document.getElementById('res')

    //Alertas
    if(saldo <= 0 || saque <0){
        window.alert("[ERROR] - Valor de SALDO ou SAQUE invalido!")
    } else if(saque > saldo){
        window.alert("[ERROR] - Valor de SAQUE invalido")
    } else{
        res.innerHTML = `<strong>EXTRATO</strong><p> <br> <p>${data} <br> <strong>SAQUE:</strong> ${saq$} <br> <strong>SALDO DISPONIVEL:</strong> ${sal$}`
    }

    
}