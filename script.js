function jogar() {
    let idade = parseInt(prompt("Qual a sua idade?"));
    
    if (isNaN(idade) || idade <= 0) {
        alert("Por favor, insira uma idade válida!");
        return;
    }
    
    if (idade < 18) {
        alert("Você não pode jogar! Este jogo é apenas para menores de 18 anos.");
        return;
    }
    
    let escolhaJogador = parseInt(prompt("Escolha:\n1- Pedra\n2- Papel\n3- Tesoura"));
    
    // Verificar se a escolha é válida
    if (escolhaJogador < 1 || escolhaJogador > 3 || isNaN(escolhaJogador)) {
        alert("Escolha inválida! Por favor, selecione 1, 2 ou 3.");
        return;
    }
    
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;
    
    let resultado;
    
    if (escolhaJogador === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaJogador === 1 && escolhaComputador === 3) || // Pedra vence Tesoura
        (escolhaJogador === 2 && escolhaComputador === 1) || // Papel vence Pedra
        (escolhaJogador === 3 && escolhaComputador === 2)    // Tesoura vence Papel
    ) {
        resultado = "Parabéns, você ganhou!";
    } else {
        resultado = "Você perdeu!";
    }
    
    // 6. Converter números para nomes das opções
    const opcoes = ["Pedra", "Papel", "Tesoura"];
    const jogadorEscolha = opcoes[escolhaJogador - 1];
    const computadorEscolha = opcoes[escolhaComputador - 1];
    
    // 7. Exibir o resultado completo
    alert(`${resultado}\nSua escolha: ${jogadorEscolha}\nComputador escolheu: ${computadorEscolha}`);
}