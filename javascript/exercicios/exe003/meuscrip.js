function carregar(){
    var cabeça = window.document.getElementById('cabeça')
    var img = window.document.getElementById('img')
    var res = window.document.getElementById('res')
    var pe = window.document.getElementById('pe')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    if(min <= 9){
        res.innerHTML = `São exatamente ${hora}:0${min}`
    } else{res.innerHTML = `São exatamente ${hora}:${min}`}
    
    if(hora >= 0 && hora < 12){
        document.body.style.background = 'green'
        img.src = 'imagemman.jpg'
    } else if( hora >= 12 && hora < 18){
        document.body.style.background = 'yellow'
        img.src = 'imagemtar.jpg'
    } else if (hora >= 18 && hora < 23){
        document.body.style.background = 'red'
        img.src = 'imagemnoi.jpg'
        pe.style.background = 'red'
        cabeça.style.background = 'red'
    }
}