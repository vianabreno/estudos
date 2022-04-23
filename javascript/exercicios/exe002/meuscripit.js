function carregar(){
    var txt = window.document.getElementById('txt')
    var txtt = window.document.getElementById('txtt')
    var txttt = window.document.getElementById('txttt')
    var img = window.document.getElementById('imagem')
    var cabeça = window.document.getElementById('cabeça')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    if(min < 10){
        txtt.innerHTML = `São exatamente ${hora}:0${min} horas!`
    } else{txtt.innerHTML = `São exatamente ${hora}:${min} horas!`}

    if(hora >= 0 && hora < 12){
        document.body.style.background = 'green'
        img.src = 'imagemman.jpg'
        cabeça.style.background = 'green'
    } 
    
    else if(hora >= 12 && hora < 18){
        document.body.style.background = 'yellow'
        img.src = 'imagemtar.jpg'
        cabeça.style.background = 'yellow'
        txt.style.color = 'black'
        txtt.style.color = 'black'
        txttt.style.color = 'black'
    } 
    
    else if(hora >= 18 && hora < 23){
        document.body.style.background = 'red'
        img.src = 'imagemnoi.jpg'
        cabeça.style.background = 'red'
    }
    
}