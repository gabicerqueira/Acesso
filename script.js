let button = document.getElementById('sortear');

button.addEventListener('click', function() {
    let nome = parseInt(document.getElementById('nome').value);
    let resultado1 = 'Você tem acesso total a todas as áreas restritas';
    let resultado2 = 'Você tem acesso limitado a algumas áreas restritas';
    let resultado3 = 'Você não tem permissão para acessar áreas restritas';
    let resultado4 = 'Valor inválido';
    let logo = document.getElementById('logo');


    if(nome >= 1000 && nome <=1999){
        document.querySelector('#resultado').textContent = resultado1
        document.body.style.backgroundColor = '#008a83'
        logo.style.backgroundColor = '#008a83'
    }

    else if(nome <1000){
        document.querySelector('#resultado').textContent = resultado4
    }

    else if(nome >= 2000 && nome <=2999){
        document.querySelector('#resultado').textContent = resultado2
        document.body.style.backgroundColor = '#fcff60'
    }

    else if(nome >= 3000){
        document.querySelector('#resultado').textContent = resultado3
        document.body.style.backgroundColor = '#cf1a1a'
    }
    
});



