let button = document.getElementById('sortear');

button.addEventListener('click', function() {
    let button = document.getElementById('sortear');
    let nome = parseInt(document.getElementById('nome').value);
    let resultado1 = 'Você tem acesso total a todas as áreas restritas';
    let resultado2 = 'Você tem acesso limitado a algumas áreas restritas';
    let resultado3 = 'Você não tem permissão para acessar áreas restritas';
    let resultado4 = 'Valor inválido';
    let logo = document.getElementById('logo');
    let p = document.getElementById('botao');
    let circulo = document.getElementById('circulo');
    // let item = document.getElementById('item');
    // let item2 = document.getElementById('item2');


    if(nome >= 1000 && nome <=1999){
        document.querySelector('#resultado').textContent = resultado1
        document.body.style.backgroundColor = '#008a83'
        logo.style.backgroundColor = '#008a83'
        button.style.backgroundColor = '#008a83'
        circulo.style.backgroundColor = '#008a83'
        // item.style.backgroundColor = '#008a83'
        // item2.style.backgroundColor = '#008a83'
    }

    else if(nome <1000){
        document.querySelector('#resultado').textContent = resultado4
        document.body.style.backgroundColor = '#00198a'
        logo.style.backgroundColor = '#00198a'
        button.style.backgroundColor = '#00198a'
        circulo.style.backgroundColor = '#00198a'
    }

    else if(nome >= 2000 && nome <=2999){
        document.querySelector('#resultado').textContent = resultado2
        document.body.style.backgroundColor = '#fcff60'
        logo.style.backgroundColor = '#fcff60'
        button.style.backgroundColor = '#fcff60'
        p.style.color = 'black'
        circulo.style.backgroundColor = '#fcff60'
        circulo.style.color = 'black'
    }

    else if(nome >= 3000){
        document.querySelector('#resultado').textContent = resultado3
        document.body.style.backgroundColor = '#cf1a1a'
        logo.style.backgroundColor = '#cf1a1a'
        button.style.backgroundColor = '#cf1a1a'
        p.style.color = 'white'
        circulo.style.backgroundColor = '#cf1a1a'
        circulo.style.color = 'white'
    }

});

