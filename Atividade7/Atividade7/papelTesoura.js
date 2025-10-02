let pedraPapelTesoura = parseInt(prompt("Faça a sua escolha:\n1 - Pedra\n2 - Papel\n3 - Tesoura"));
let escolha;
let textoResultado;


let pedraPapelTesouraSistema;

if(Math.random() < 1/3){
    pedraPapelTesouraSistema = 1;
} else if(Math.random() < 2/3){
    pedraPapelTesouraSistema = 2;
}else{
    pedraPapelTesouraSistema = 3;
}

switch(pedraPapelTesoura){
    case 1:
        escolhaMinha  = "Pedra";
        escolhaMaquina = "Pedra";
        break;
    case 2:
        escolhaMinha  = "Papel";
        escolhaMaquina = "Papel";
        break;
    case 3:
        escolhaMinha  = "Tesoura";
        escolhaMaquina = "Tesoura";        
        break;
    default:
        escolhaMinha  = "Pedra";
        escolhaMaquina = "Pedra";
        break;
}

if(pedraPapelTesoura == pedraPapelTesouraSistema){
    textoResultado = "Deu empate";
}else if(pedraPapelTesoura == 1 && pedraPapelTesouraSistema == 2){
    textoResultado = "Você perdeu!";
}else if(pedraPapelTesoura == 1 && pedraPapelTesouraSistema == 3){
    textoResultado = "Você venceu!";
}else if(pedraPapelTesoura == 2 && pedraPapelTesouraSistema == 1){
    textoResultado = "Você venceu!";
}else if(pedraPapelTesoura == 2 && pedraPapelTesouraSistema == 3){
    textoResultado = "Você perdeu!";
}else if(pedraPapelTesoura == 3 && pedraPapelTesouraSistema == 1){
    textoResultado = "Você perdeu!";
}else{
    textoResultado = "Você venceu!";
}

alert(`Sua escolha: ${escolhaMinha}\nEscolha da máquina: ${escolhaMaquina}\n\n${textoResultado}`);