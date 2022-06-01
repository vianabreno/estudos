//While
/*
let pizza = 8
while(pizza >= 0){
    console.log(`Restam ${pizza} pedaços!`)
    pizza--
}
*/

/*
let pizza = 1
while(pizza <= 8){
    console.log(`Restam ${pizza} pedaços!`)
    pizza++
}
*/

/*
let pizza = 8
do{
    console.log(`Restam ${pizza} pedaços!`)
    pizza--
}while(pizza >= 0)
*/

/*
let pizza = 1
do{
    console.log(`Restam ${pizza} pedaços`)
    pizza++
}while(pizza <=8)
*/

/*
for(pizza = 8; pizza >=0; pizza--){
    console.log(`Restam ${pizza} pedaços!`)
}
*/

/*
for(pizza = 1; pizza <=100; pizza++){
    console.log(`Restam ${pizza} pedaços!`)
}
*/
/*
let numero = [5,9,2,4]
numero[0] = 0
numero.push(1)
numero.sort()
console.log(numero.indexOf(1))
console.log(numero)
console.log(numero[3])
*/

/*
let numero = [5,8,3,1]
numero[0] = 0
numero.push(7)
numero.sort()
console.log(numero.indexOf(7))
console.log(numero.length)
console.log(numero)
*/
/*
let numero = [9,1,5,3]
for(let indice = 0; indice = numero.length; indice++){
    console.log(`O indice ${indice} recebe o valor ${numero[indice]}`)
}
*/

/*
let numero = [9,3,5,2]
numero[0] = 0
numero.push(10)
numero.sort()
console.log(numero)
console.log(`O valor do indice 01 é ${numero[1]}`)
console.log(`O tamanho o indice é ${numero.length}`)
console.log(`O valor 10 está no indice ${numero.indexOf(10)}`)

*/

/*
let numero = [1,5,8,3]
numero[0] = 0
numero.push(2)
numero.sort()
for(let ind = 0; ind < numero.length; ind++ ){
    console.log(`O indice ${ind} tem o valor ${numero[ind]}`)
}
console.log(`O tamanho do indice é ${numero.length}`)
*/

let numero = [5,8,1,4]
numero[0] = 0
numero.push(9)
numero.sort()
for(ind in numero){
    console.log(`O indice ${ind} recebe o valor ${numero[ind]}`)
}
console.log(`O tamanho da variavel é de ${numero.length}`)
console.log(`O valor 8 está no indice ${numero.indexOf(8)}`)