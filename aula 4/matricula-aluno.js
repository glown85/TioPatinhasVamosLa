var nomeAluno = 0;
var cadastrarAluno = true;
var prova1 = 0;
var prova2 = 0;
var prova3 = 0;
var media = 0;
var quantidadeAlunos = 0;
var mediaTotal = 0;

alert("Bem vindo ao sistema de notas");
while (cadastrarAluno) {
    quantidadeAlunos = quantidadeAlunos + 1;

    nomeAluno = prompt("Insira o nome do aluno");

    while (!/^[a-zA-Z]+$/.test(nomeAluno)) {
        alert("Insira um nome válido");
        prompt("Insira o nome do aluno");
    }

    prova1 = pegarValorValido("insira a nota da prova 1", 100, 0);
    prova2 = pegarValorValido("insira a nota da prova 2", 100, 0);
    prova3 = pegarValorValido("insira a nota da prova 3", 100, 0);

    media = (prova1 + prova2 + prova3) / 3;
    calcularMedia(media, 3, 7);

    mediaTotal = mediaTotal + media;

    cadastrarAluno = signNewEntry();
}
alert(
    "O total de alunos é de " +
        quantidadeAlunos +
        " e a média dos mesmos é de: " +
        mediaTotal / quantidadeAlunos
);

alert("Fim do programa");
