/*
let numero = [4,6,7,1]
numero[0] = 0
numero.push(2)
numero.sort()
console.log(`O tamando da variavel é ${numero.length}`)
console.log(numero)
console.log(numero[3])
*/

/*
let valores = [3,8,5,2]
valores[0] = 1
valores.push(1)
valores.sort()
console.log(`O tamanho da variavel é de ${valores.length}`)
for(let indice = 0; indice < valores.length; indice++){
    console.log(`O indice ${indice} recebe o valor ${valores[indice]}`)
}
*/

let numero = [7,3,1,9]
numero[0] = 0
numero.push(7)
numero.sort()
console.log(`O tamanho do indice é ${numero.length}`)
console.log(`O elemento 7 se encontra no indice ${numero.indexOf(7)}`)
for(let indice in numero){
    console.log(`O indice ${indice} tem o valor ${numero[indice]}`)
}
