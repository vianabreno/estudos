let idade = 61
if(idade < 16){
    console.log('Não Vota')
} else{
    if(idade >= 16&& idade < 18){
        console.log('Voto não Obrigatorio')
    } else{
        if(idade >= 18 && idade <= 60){
            console.log('Voto Obrigatorio')
        } else{
            if(idade > 60){
                console.log('Insenta')
            }
        }
    }
}
