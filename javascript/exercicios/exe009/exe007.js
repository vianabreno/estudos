let valores = [8,7,6,2]
valores[0] = 1
valores.push(5)
valores.sort()
console.log(`O tamanho é de ${valores.length}`)
console.log(valores)

for(let indice = 0; indice < valores.length; indice++){
    console.log(`O indice ${indice} recebe o valor ${valores[indice]}`)
}