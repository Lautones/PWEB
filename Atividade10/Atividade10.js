let imcPessoa = (peso, altura) =>{
    let imc = peso/(altura**2);
    let fraseImc;

    if (imc < 18.5) {
        fraseImc = "Magreza";
    } else if (imc >= 18.5 && imc <= 24.9) {
        fraseImc = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        fraseImc = "Sobrepeso";
    } else if (imc >= 30 && imc <= 39.9) {
        fraseImc = "Obesidade";
    } else if (imc >= 40) {
        fraseImc = "Obesidade grave";
    } else {
        fraseImc = "Valor de IMC inválido";
    }

    return `Seu IMC está apontado como ${fraseImc}`;
}

let peso = parseFloat(prompt("Digite o seu peso em Kg"));
let altura = parseFloat(prompt("Digite a sua altura em metros"));

alert(imcPessoa(peso, altura));
