function carregar(){
    var txt = window.document.getElementById('txt')
    var txtt = window.document.getElementById('txtt')
    var txttt = window.document.getElementById('txttt')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    if(min < 10){
        txtt.innerHTML = `São exatamente ${hora}:0${min} horas!`
    } else{txtt.innerHTML = `São exatamente ${hora}:${min} horas!`}

    if(hora >= 0 && hora < 12){
        document.body.style.background = 'green'
    } else if(hora >=12 && < 18){
        document.body.style.background = 'yellow'
    }
}