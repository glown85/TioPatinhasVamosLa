alert(
    "Bem-vindo à calculadora FunCalc™, a primeira operada por funções (por este programador)."
);

// "Escolha o cálculo a ser realizado, onde: 1 - Soma; 2 - Subtração; 3 - Divisão, 4 - Multiplicação, 5- Sair"
var texto =
    "Escolha o cálculo a ser realizado, onde: 1 - Soma; 2 - Subtração; 3 - Divisão, 4 - Multiplicação, 5- Sair;";

var opcaoMin = -1;
var opcaoMax = 5;
var opcao = pegarOpcaoValida(texto, opcaoMin, opcaoMax);

function calcular(opcao) {
    var numero1 = 0;
    var numero2 = 0;
    var resultado = 0;

    while (opcao != "5") {
        if (opcao > 0) {
            numero1 = pegarNumeroValido();
            numero2 = pegarNumeroValido();
        }

        switch (opcao) {
            case -1:
                alert("Vote no Lula");
                break;
            case 0:
                alert("Vote no Bolsonaro");
                break;
            case 1:
                resultado = numero1 + numero2;
                break;
            case 2:
                resultado = numero1 - numero2;
                break;
            case 3:
                resultado = numero1 / numero2;
                break;
            case 4:
                resultado = numero1 * numero2;
                break;
        }
        alert(resultado);
        opcao = pegarOpcaoValida(texto, opcaoMin, opcaoMax);
    }
    alert("Obrigado por usar a calculadora bagaçeira do Marco!");
}

calcular(opcao);

//PEGAR NUMERO, E VOLTAR O NUMERO
function pegarNumeroValido() {
    var numero = Number.parseFloat(
        prompt("Digite o primeiro número da operação")
    );
    while (isNaN(numero)) {
        alert("Esta calculadora usa somente números!");
        numero = Number.parseFloat(
            prompt("Digite o primeiro número da operação")
        );
    }
    return numero;
}

function pegarOpcaoValida(texto, NumMin, NumMax) {
    var opcao = Number.parseFloat(prompt(texto));
    while (opcao < NumMin || opcao > NumMax || isNaN(opcao)) {
        alert("Insira uma opção válida!");
        opcao = Number.parseFloat(prompt(texto));
    }
    return opcao;
}
