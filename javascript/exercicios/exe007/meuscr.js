function sacar(){
    var data = new Date()
    var ano = data.getFullYear()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    var saldo = window.document.getElementById('saldo')
    var sal = Number(saldo.value)
    var saque = window.document.getElementById('saque')
    var saq = Number(saque.value)
    var saq$ = saq.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    var sall = sal - saq
    var sall$ = sall.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    var extrato = window.document.getElementById('extrato')
    var res = window.document.getElementById('res')

    if(sal <= 0 && saq <= 0){
        window.alert('ERROR - Preencha os campos abaixo!')
    } else if(sal <= 0){
        window.alert('ERROR - Digite o valor do saldo correntamente!')
    } else if(saq <= 0){
        window.alert('ERROR - Digite o valor do saque correntamente!')
    } else if(saq > sal){
        window.alert('ERROR - Saque invalido, o valor do saque é maior do que seu saldo!')
    } else{
        extrato.innerHTML = 'EXTRATO'
        res.innerHTML = `${data} <br> 
        <strong>Hora: </strong>${hora}:${min}:${sec} <br> 
        <strong>Saque: </strong>${saq$} <br>
        <strong>Saldo Disponivel: </strong>${sall$} `
    }

    
}