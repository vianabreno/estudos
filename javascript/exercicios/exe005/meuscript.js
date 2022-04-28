//Variaveis
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anos = window.document.getElementById('ano')
    var anoo = Number(anos.value)
    var res = window.document.getElementById('res')
    var sex = window.document.getElementsByName('sex')
    var genero = ''
    var idade = ano - anoo
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    //Clasificação de Genero
    if(sex[0].checked){
        genero = 'Masculino'
        if(idade >=0 && idade < 10){
            img.setAttribute('src', 'imagens/mulher.png')
        }
    } else if(sex[1].checked){
        genero = 'Feminino'
    }

    //Alertas
    if(anoo == 0){
        window.alert('ERROR - Verifique o numero que você digitou!')
    } else if(anoo > ano){
        window.alert('ERROR - O ano que você digitou é maior doque o ano que estamos!')
    } else if(anoo < 1908){
        window.alert('ERROR - É impossivel você ter nascido nesse ano. Digite novamente o ano que nasceu!')
    } else if(anoo >= 1908){
        res.innerHTML = `Individuo do sexo ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}