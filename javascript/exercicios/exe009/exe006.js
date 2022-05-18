let numeros = [5, 1, 3, 7, 1]
numeros[0] = 8
numeros.push(2)
numeros.sort()
console.log(numeros.length)
for(let indice in numeros){
    console.log(`O indice ${indice} recebe os valores ${numeros[indice]}`)
}