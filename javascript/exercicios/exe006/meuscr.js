function sacar(){
    var data = new Date()
    var ano = data.getFullYear()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    var saldo = window.document.getElementById('saldo')
    var saq = window.document.getElementById('saque')
    var res = window.document.getElementById('res')
    var saqq = Number(saq.value)
    var sal = Number(saldo.value)
    var saldo2 = sal - saqq
    var saqq$ = saqq.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var saldo2$ = saldo2.toLocaleString('pt-bt',{style: 'currency', currency: 'BRL'});
    var cedula = ''

    if(sal == 0 && saqq == 0){
        window.alert('ERROR - Verifique os dados e tente novamente!')
    } else if(sal == 0){
        window.alert('ERROR - Digite o saldo de sua conta!')
    } else if(saqq == 0){
        window.alert('ERROR - Digite o valor do saque!')
    } else if(saqq > sal){
        window.alert('ERROR - Saldo insuficiente!')
    } else{
        ress.innerHTML = 'EXTRATO'
        res.innerHTML = `<strong>Data:</strong> ${data} <br> <strong>Hora:</strong> ${hora}:${min}:${seg} <br> <strong>Saque Realizado:</strong> ${saqq$} <br> <strong>Saldo Atual:</strong> ${saldo2$}`
        res.style.textAlign = 'center'
    }

}