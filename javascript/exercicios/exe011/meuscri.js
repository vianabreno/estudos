function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var sexo = window.document.getElementsByName('sex')
    var res = window.document.getElementById('res')
    var idade = ano - Number(fano.value)
    var genero = ''
    var imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
    
    if(Number(fano.value) == 0 || Number(fano.value) > ano){
        window.alert('ERROR - Verifique o ano de nascimento e tente novamente!')
    } else if(Number(fano.value) < 1900){
        window.alert('ERROR - Ano de nascimento invalido!')
    }

    if(sexo[0].checked){
        genero = 'Masculino'
        if(idade ){
            imagem.setAttribute('src', 'imagens/bbzinho.png')
        } else if(idade >= 5){
            imagem.setAttribute('src', 'imgens/criançamenino.png')
        }




    }else if(sexo[1].checked){
        genero = 'Feminino'
    }
    res.innerHTML = `Detectamos individuo ${genero} com idade de ${idade}`
    res.appendChild(imagem)
}