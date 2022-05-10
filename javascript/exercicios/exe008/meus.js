function soma(){
var numero1 = window.document.getElementById('n1')
var numero2 = window.document.getElementById('n2')
var op = window.document.getElementById('op')
var res = window.document.getElementById('res')
var n1 = Number(numero1.value)
var n2 = Number(numero2.value)

op.innerHTML = `${n1} + ${n2}...`
}

function açao(){
var numero1 = window.document.getElementById('n1')
var numero2 = window.document.getElementById('n2')
var op = window.document.getElementById('op')
var res = window.document.getElementById('res')
var n1 = Number(numero1.value)
var n2 = Number(numero2.value)
var soma = n1+n2
var sub = n1-n2
var mult = n1*n2
var div = n1/n2

op.innerHTML = `${n1} + ${n2}...`
}

