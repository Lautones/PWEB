let opcoes = ["pedra", "papel", "tesoura"];

let opcao = prompt("Faça a sua escolha:\n\n0 - Pedra\n1 - Papel\n2 - Tesoura\n");

let escolhaUsuario = opcoes[parseInt(opcao)];
let escolhaMaquina = opcoes[Math.floor(Math.random() * 3)];

let luta = escolhaUsuario + escolhaMaquina;
let textoResultado;

if(escolhaUsuario == escolhaMaquina) {
    textoResultado = "empatou";
} else if( luta === "pedrapapel" || luta === "papeltesoura" || luta === "tesourapedra") {
    textoResultado = "perdeu";
} else {
    textoResultado = "ganhou";
}

alert(`Sua escolha: ${escolhaUsuario}\nEscolha da máquina: ${escolhaMaquina}\n\nVocê ${textoResultado}!`);