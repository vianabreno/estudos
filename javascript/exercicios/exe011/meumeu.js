var teste = window.document.getElementsByClassName('teste')[0]
    
    teste.addEventListener('mouseenter', entrar)
    teste.addEventListener('mouseout', sair)
    teste.addEventListener('click', clicar)

    function entrar(){
        teste.style.backgroundColor = 'red'
            }

    function sair(){
            teste.style.backgroundColor = 'blue'
            }

    function clicar(){
            teste.style.backgroundColor = 'white'
            }