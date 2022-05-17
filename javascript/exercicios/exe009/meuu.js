function sacar(){
    var nome = window.document.getElementById('nome')
    var cpf = window.document.getElementById('cpf')
    var saldo = window.document.getElementById('saldo')
    var saque = window.document.getElementById('saque')
    var res = window.document.getElementById('res')

    var saldo2 = Number(saldo.value)
    var saque2 = Number(saque.value)
    var resto = saldo2 - saque2
    var saldo$ = saldo2.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    var saque$ = saque2.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    var resto$ = resto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    //Alertas
    if(nome == 0){
        window.alert(`ERROR - Preencha todos os campos obrigatorios!`)
    }

}