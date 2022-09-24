function pegarNumeroValido(texto, notaMaxima, valorMinimo) {
    var numero = Number.parseFloat(prompt(texto));
    while (numero > notaMaxima || numero < valorMinimo || isNaN(numero)) {
        alert("Este número não é válido, escolha outro valor");
        numero = Number.parseFloat(prompt(texto));
    }
    return numero;
}

// fazer uma funcao que mostre se o aluno ta aprovado, reprovado ou em recuperacao
// precisa passar os intervalos para a funcao, e a media final
// 3 reprovado, 3 7 recupera, 7 aprovado
// 5, <2 reprovado, > 8 aprovado, o resto é recuperacao
function calcularMedia(media, min, max) {
    if (media >= max) {
        alert("Aprovado!");
    } else if (media < min) {
        alert("Reprovado!");
    } else {
        alert("Recuperação!");
    }
}

// funcao para pedir ao usuario se vai continuar cadastrando ou nao outro aluno
// tem que retornar um boolean
// 1- para continuar, 2- para parar
function signNewEntry() {
    var option = pegarNumeroValido(
        "deseja cadastrar outro aluno? 1- sim, 2-nao",
        2,
        1
    );

    if (option == 1) {
        return true;
    } else if (option == 2) {
        return false;
    }
}
