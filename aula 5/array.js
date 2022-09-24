var numeroDeProvas = 15;
var notas = [];

for (var i = 0; i < numeroDeProvas; i = i + 1) {
    notas.push(parseFloat(prompt("digitar nota")));
}

var soma = 0;
for (var i = 0; i < notas.length; i = i + 1) {
    soma = soma + notas[i];
}
var media = soma / notas.length;
alert(media);

if (media >= 7) {
    alert("Parabéns! " + nome + ", Você foi aprovado " + media);
}
if (media < 7 && medifa >= 3) {
    alert("Cuidado " + nome + ", Você ficou em recuperação! " + media);
}
if (media < 3) {
    alert(nome + " Reprovado! " + media);
}
resultado = parseFloat(
    prompt("digite 1- para cadastrar outro usuario, e 2- para sair")
);
