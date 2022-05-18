function sacar(){
    var data = new Date()
    var nome = window.document.getElementById('nome')
    var cpf = window.document.getElementById('cpf')
    var saldo = window.document.getElementById('saldo')
    var saque = window.document.getElementById('saque')
    var res = window.document.getElementById('res')

    var nomee = String(nome.value)
    var cpff = String(cpf.value)
    var saldo2 = Number(saldo.value)
    var saque2 = Number(saque.value)
    var resto = saldo2 - saque2
    var saldo$ = saldo2.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    var saque$ = saque2.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    var resto$ = resto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    if(saque2 <0 || saldo2 <0){
        window.alert(`[ERROR] - Valores invalidos!`)
        document.body.style.background = 'red'
    }else if(nomee == 0 || cpff == 0 || saldo2 == 0 || saque2 == 0 ){
        window.alert(`[ERROR] - Preencha todos os campos!`)
        document.body.style.background = 'red'
    } else if(saque2 > saldo2){
        window.alert(`[ERROR] - Saque invalido! `)
        document.body.style.background = 'red'
     }else{
        res.innerHTML = `<strong>EXTRATO</strong> <br>`
        res.innerHTML += `${data} <br>`
        res.innerHTML += `<strong>Nome</strong>: ${nomee} <br> <strong>CPF</strong>: ${cpff} <br> <strong>Saque</strong>: ${saque$} <br> <strong>Saldo Disponivel</strong>: ${resto$}`
        document.body.style.background = 'green'
    }

    

}