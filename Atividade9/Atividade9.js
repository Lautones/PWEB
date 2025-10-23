let maiorEntreTres = (numero1, numero2, numero3) => {
    let maiorEntreDois = (numero1 > numero2) ? numero1 : numero2;
    let maiorEntreTres = maiorEntreDois < numero3 ? numero3 : maiorEntreTres;

    return maiorEntreTres;
}

let ordemCrescente = (numero1, numero2, numero3) => {
    let arrayCrescente = [];

    arrayCrescente.push(numero1);
    arrayCrescente.push(numero2);
    arrayCrescente.push(numero3);

    return arrayCrescente.sort((a, b) => a - b);
}

let ehPalindromo = (palavraUsuario) => {
    let palavraInvertida = palavraUsuario.split('').reverse().join('');

    return palavraUsuario == palavraInvertida ? "É um palíndromo" : "Não é um palíndromo";
}

let formamTriangulo = (lado1, lado2, lado3) => {
    if (
        lado1 < lado2 + lado3 &&
        lado2 < lado1 + lado3 &&
        lado3 < lado1 + lado2
    ) {
        let tipoTriangulo;

        if (lado1 === lado2 && lado2 === lado3) {
            tipoTriangulo = "Equilátero";
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            tipoTriangulo = "Isósceles";
        } else {
            tipoTriangulo = "Escaleno";
        }

        return `É um triângulo ${tipoTriangulo}.`;
    }

    return `Não é possível formar um triângulo com esses valores.`;
};


let numero1 = parseFloat(prompt("Digite o número 1"));
let numero2 = parseFloat(prompt("Digite o número 2"));
let numero3 = parseFloat(prompt("Digite o número 3"));

alert(`O maior dos números é: ${maiorEntreTres(numero1, numero2, numero3)}`);
alert(`A ordem crescente dos números é: ${ordemCrescente(numero1, numero2, numero3)}`);

let palavraUsuario = prompt("Digite uma palavra")

alert(ehPalindromo(palavraUsuario));

let lado1 = parseFloat(prompt("Tamanho do lado a:"));
let lado2 = parseFloat(prompt("Tamanho do lado b:"));
let lado3 = parseFloat(prompt("Tamanho do lado c:"));

alert(formamTriangulo(lado1, lado2, lado3));
