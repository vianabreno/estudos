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


    if(sexo[0].checked){
        genero = 'Masculino'
        if(idade >= 0 & idade <= 3){
            imagem.setAttribute('src', 'imagens/bbzinho.png')
            document.body.style.backgroundColor = '#193C40'
        }else if(idade > 3 & idade <= 9){
            imagem.setAttribute('src', 'imagens/criançamenino.png')
            document.body.style.backgroundColor = '#2E5902'
        }else if(idade > 9 & idade <= 18){
            imagem.setAttribute('src', 'imagens/jovemhomem.png')
            document.body.style.backgroundColor = '#214001'
        }else if(idade > 18 & idade <= 59){
            imagem.setAttribute('src', 'imagens/homem.png')
            document.body.style.backgroundColor = '#D96941'
        }else if(idade > 59 & idade <= 122){
            imagem.setAttribute('src', 'imagens/idoso.png')
            document.body.style.backgroundColor = '#A62B1F'
        }
    } else if(sexo[1].checked){
            genero = 'Feminino'
            if(idade >= 0 & idade <= 3){
                imagem.setAttribute('src', 'imagens/bbzinho.png')
            }else if(idade > 3 & idade <= 9){
                imagem.setAttribute('src', 'imagens/criançamenina.png')
            }else if(idade > 9 & idade <= 18){
                imagem.setAttribute('src', 'imagens/jovemfeminina.png')
            }
    }

    if(Number(fano.value) <= 0 || Number(fano.value) > ano){
        window.alert('ERROR - Ano de nascimento invalido, preencha novamente!')
    }else if(Number(fano.value) < 1900){
        window.alert('ERROR - O ano de nascimento é invalido, preencha novamente!')
    }else if(Number(fano.value) >= 1900){
        res.innerHTML = `Detectamos um individuo do sexo ${genero} com idade de  ${idade} anos!`
        res.appendChild(imagem)
    }
}