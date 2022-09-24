var opt = pegarOpcaoValida(
    "escolha opçao 1-soma; 2-subtracao; 3-multiplicacao; 4-divisao 0: sair",
    0,
    4
);

while (opt != 5) {
    var resultado = escolherOpcao(
        opt,
        pegarNumeroValido("insira o primeiro numero"),
        pegarNumeroValido("insira o segundo numero")
    );

    alert(resultado);
    opt = pegarOpcaoValida(
        "escolha opçao 1-soma; 2-subtracao; 3-multiplicacao; 4-divisao 5-sair",
        0,
        4
    );
}
alert("fim");

//#region funcoes
function pegarNumeroValido(texto) {
    var numero = Number.parseFloat(prompt(texto));
    while (isNaN(numero)) {
        alert("insira um numero valido");
        numero = Number.parseFloat(prompt(texto));
    }
    return numero;
}

function pegarOpcaoValida(texto, minimo, maximo) {
    var numero = Number.parseFloat(prompt(texto));
    while (isNaN(numero) || numero > maximo || numero < minimo) {
        alert("insira uma opcao valida");
        numero = Number.parseFloat(prompt(texto));
    }
    return numero;
}

function soma(n1, n2) {
    return n1 + n2;
}

function subtracao(n1, n2) {
    return n1 - n2;
}
function multiplicacao(n1, n2) {
    return n1 * n2;
}
function divisao(n1, n2) {
    return n1 / n2;
}

function escolherOpcao(opcao, numero1, numero2) {
    switch (opcao) {
        case 1:
            return soma(numero1, numero2);
        case 2:
            return subtracao(numero1, numero2);
        case 3:
            return multiplicacao(numero1, numero2);
        case 4:
            return divisao(numero1, numero2);
    }
}
//#endregion
