let order= [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelho
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//criando a ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number* 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    },number);
}

//checagem da ordem 
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
            
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! reniciando próximo nível`);
        nextLevel();
    }
}

//função do click de reposta.
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250);
}

//funçao que diz a cor
let createColorElement = (color) => {
    if( color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

//funções para o novo nivel do jog
let nextLevel = () => {
    score ++;
    shuffleOrder();
}

//funçao para o loser
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo\nClique em Ok para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

// funçao de inicio de jogo
let playGame = () => {
    alert('Bem vindo ao Gêneses! Iniciando novo jogo');
    score = 0;

    nextLevel();
}

// evento de click do jogo
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();

//green.addEventListener('clicker', click(0));
//red.addEventListener('clicker', click(1));
//yellow.addEventListener('clicker', click(2));
//blue.addEventListener('clicker', click(3));
