//uma funçao que pegue um array, e calcule a moda - ESQUECE
//uma funçao que pegue um array, e calcule a mediana - ARRAY ORDENADO - PODIA ESQUECER, MAS DAVA PRA FAZER
//uma funçao que pegue um array, e calcule a media -
const array1 = [0, 1, 2, 3, 4, 5, 6];
const array2 = [0, 1, 5, 6];
const array3 = [4, 5, 5, 4];
const array4 = [4];
const array5 = [1, 1, 3, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];

function modaSoParaArraysInteiros(array) {
    let arrayMap = [];

    for (let i = 0; i < array.length; i++) {
        if (arrayMap[array[i]] == undefined) {
            arrayMap[array[i]] = 1;
        } else {
            arrayMap[array[i]]++;
        }
    }
    let maiorNumero = 0;
    let maiorIndice = 0;
    for (let i = 0; i < arrayMap.length; i++) {
        if (arrayMap[i] > maiorNumero) {
            maiorNumero = arrayMap[i];
            maiorIndice = i;
        }
    }
    return maiorIndice;
}

function mediana(array) {
    var sortedArray = array.sort((a, b) => {
        return a - b;
    });
    if (array.length % 2 != 0) {
        // array com tamanho impar
        return sortedArray[(sortedArray.length - 1) / 2];
    } else {
        // array com tamanho par
        return (sortedArray[sortedArray.length / 2] + sortedArray[sortedArray.length / 2 - 1]) / 2;
    }
}

function media(array) {
    var soma = 0;
    for (var i = 0; i < array.length; i++) {
        soma = soma + array[i];
    }
    return soma / array.length;
}

// console.log("começando");
// console.log(media(array1));
// console.log(mediana(array1));
// console.log(moda(array5));

//3,4,5
//thoughts and prayers

// funcao que some 3 numeros
function soma3numeros(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3;
}

//funcao que eu passe o nome, e ele me alerta dizendo bom dia + o meu nome
function bomDia(nome) {
    alert("bom dia" + nome);
}

//funcao para pegar o nome do usuario com prompt e retornar ele
function pegarNome() {
    var nome = prompt("digite seu nome");
    return nome;
}

// fazer uma funcao que pegue numeros do usuario, até ele cancelar o prompt, e retorne um array;
function pegarNumeros() {
    var array = [];
    var numero = 0;
    while (numero != null) {
        numero = prompt("digite um numero");
        array.push(numero);
    }
    array.pop();
    return array;
}

console.log(pegarNumeros());

//funcao que pegue um array, e troque todos os numeros 13 por "lula", e os numeros 22 por bolsonaro
[0, 304, 5, 22, 13, 4, 5, 6, 13, 13, 22, 22.1, 23, "3", null, "48334"];
