var notas = [];

var opt = prompt("1 - adicionar novo numero, 2- sair");
while (opt != 2) {
    notas.push(parseFloat(prompt("digitar nota")));

    opt = prompt("1 - adicionar novo numero, 2- sair");
}

var soma = 0;
for (var i = 0; i < notas.length; i = i + 1) {
    soma = soma + notas[i];
}
var media = soma / notas.length;

if (media >= 7) {
    alert("Parabéns! " + ", Você foi aprovado " + media);
}
if (media < 7 && media >= 3) {
    alert("Cuidado " + ", Você ficou em recuperação! " + media);
}
if (media < 3) {
    alert(" Reprovado! " + media);
}
resultado = parseFloat(
    prompt("digite 1- para cadastrar outro usuario, e 2- para sair")
);
