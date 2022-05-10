function soma(){
    var numero1 = window.document.getElementById('n1')
    var numero2 = window.document.getElementById('n2')
    var op = window.document.getElementById('op')
    var res = window.document.getElementById('res')
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var soma = n1+n2
    var sub = n1-n2
    var mult = n1*n2
    var divi = n1/n2

    op.innerHTML = `Seu calculo será de soma: ${n1} + ${n2}`
    op.style.background = 'red'
    op.style.color = 'white'
    res.innerHTML = `${soma}`
    res.style.background = 'green'

}

function sub(){
    var numero1 = window.document.getElementById('n1')
    var numero2 = window.document.getElementById('n2')
    var op = window.document.getElementById('op')
    var res = window.document.getElementById('res')
    var resu = window.document.getElementById('resu')
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var soma = n1+n2
    var sub = n1-n2
    var mult = n1*n2
    var divi = n1/n2
    
    op.innerHTML = `Seu calculo será de subtração: ${n1} - ${n2}`
    op.style.background = 'red'
    op.style.color = 'white'
    res.innerHTML = `${sub}`
    res.style.background = 'green'
}

function mult(){
    var numero1 = window.document.getElementById('n1')
    var numero2 = window.document.getElementById('n2')
    var op = window.document.getElementById('op')
    var res = window.document.getElementById('res')
    var resu = window.document.getElementById('resu')
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var soma = n1+n2
    var sub = n1-n2
    var mult = n1*n2
    var divi = n1/n2
    
    op.innerHTML = `Seu calculo será de subtração: ${n1} - ${n2}`
    op.style.background = 'red'
    op.style.color = 'white'
    res.innerHTML = `${mult}`
    res.style.background = 'green'
}

function divi(){
    var numero1 = window.document.getElementById('n1')
    var numero2 = window.document.getElementById('n2')
    var op = window.document.getElementById('op')
    var res = window.document.getElementById('res')
    var resu = window.document.getElementById('resu')
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var soma = n1+n2
    var sub = n1-n2
    var mult = n1*n2
    var divi = n1/n2
    
    op.innerHTML = `Seu calculo será de subtração: ${n1} - ${n2}`
    op.style.background = 'red'
    op.style.color = 'white'
    res.innerHTML = `${divi}`
    res.style.background = 'green'
}