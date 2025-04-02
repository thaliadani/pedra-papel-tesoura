function jogar() {
    idade = prompt("Qual a sua idade?");
    escolhaJogador = prompt("Escolha: 1- pedra, 2- papel ou 3- tesoura?");
    escolhaComputador = Math.floor(Math.random() * 3) + 1;
    
    if(idade >= 18) {
        escolhaJogador
    }
    else{
        alert("Você não pode jogar!");
    }

    if(escolhaJogador == 1 && escolhaComputador == 3 || escolhaJogador == 2 && escolhaComputador == 1 || escolhaJogador == 3 && escolhaComputador == 2) {
        alert("Parabéns, vocé ganhou!");
    }
    else if(escolhaJogador == escolhaComputador) {
        alert("Empate!");
    }
    else {
        alert("Você perdeu!");
    }

}