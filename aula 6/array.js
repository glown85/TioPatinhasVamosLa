function* generateDigitsOfPi() {
    let q = 1n;
    let r = 180n;
    let t = 60n;
    let i = 2n;

    while (true) {
        let digit = ((i * 27n - 12n) * q + r * 5n) / (t * 5n);
        yield Number(digit);
        let u = i * 3n;
        u = (u + 1n) * 3n * (u + 2n);
        r = u * 10n * (q * (i * 5n - 2n) + r - t * digit);
        q *= 10n * i * (i++ * 2n - 1n);
        t *= u;
    }
}

const iter = generateDigitsOfPi();
const pi = [];

for (let i = 0; i < 1000; i++) {
    pi.push(iter.next().value);
}

console.log(pi);

// calcular o primeiro palindromo de 9 digitos primo do pi
// calcular o pi /done
// ver se é palindromo /done
// ver se é primo

//um programa que escreva no console um por um, todos os nomes de um array

// const alunos = [
//     "kelly",
//     "maikon",
//     "marco",
//     "falecido renato",
//     "juiz que vai ler a petiçao do marco",
//     "inventario do renato",
// ];

// for (let i = 0; i < alunos.length; i++) {
//     console.log(alunos[i]);
// }

// criar uma funçao que veja se um array é um palindromo

function palindromo(numberArray) {
    for (let i = 0; i < numberArray.length / 2; i++) {
        if (numberArray[i] != numberArray[numberArray.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

let p0 = [1, 0, 0];
let p1 = [0, 1, 0];
let p2 = [1, 1, 0];
let p3 = [1, 1, 0, 1];
let p4 = [0, 1, 1, 0];
let p5 = [1, 1, 0, 1, 1];
let p6 = [1, 2, 0, 1, 1];
console.log(palindromo(p4));
