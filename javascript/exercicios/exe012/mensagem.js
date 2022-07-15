var mensagem = window.document.getElementById('mensagem')
mensagem.addEventListener('mouseover', entrar)
mensagem.addEventListener('mouseout', sair)

function entrar(){
    mensagem.innerHTML = 'VOLTAR'
    mensagem.style.backgroundImage = 'none'
}

function sair(){
    mensagem.innerHTML = ''
    mensagem.style.backgroundImage = ''
}
