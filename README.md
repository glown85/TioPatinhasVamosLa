# TioPatinhasVamosLa

Aulas de programação

## nomeclatura de variaveis

claro, vc pode ser um pnc e nomear todas suas variaveis como x, y, z... e que se foda o proximo que vai tentar ler seu codigo, mas lembre se: o proximo que vai dar manutenção no seu codigo pode ser voce!
entao sempre nomeie suas variaveis com nomes que façam sentido, e que expliquem o seu proposito

exemplo:

```javascript
//isso é muito melhor do que...
var saldoDaConta = -300;

//essa atrocidade:
var x = -300;
```

para facilitar a visualizaçao, tb se utiliza a pratica de camel case
que seria colocar a letra maiscula para 'separar' o nome

exemplo

```javascript
//isso é muito melhor do que...
var camelCase;

//só guspir o nome sem espaço:
var camelcase;

//quando o nome é pequeno pode nao fazer muita diferença, mas se for grande...
var numerodepessoasquegostaramdofinaldegameofthrones = 0;
//a mesma variavel com camelCase fica muito mais facil: (nao que fique tao mais facil assim)
var numeroDePessoasQueGostaramDoFinalDeGameOfThrones = 0;
```

## if

A estrutura condicional if permite ao JavaScript executar um trecho de código somente se uma determinada condição for verdadeira.

```javascript
if (condicao) {
  //faz alguma coisa
}
```

o codigo só vai ser executado se a condição for verdadeira

exemplo:

```javascript
var numeroDePolentas = 10;
if (numeroDePolentas > 5) {
  //esse codigo ira ser executado pq a condição é verdadeira
  console.log("muitas polentas");
}
if (numeroDePolentas > 15) {
  //esse codigo NAO ira ser executado pq a condição é falsa
  console.log("REALMENTE MUITAS POLENTAS");
}
```

## else

Existem casos em que precisamos executar um código caso uma condição seja verdadeira ou um outro, caso ela seja falsa. Para isso utilizamos a palavra-chave else.

exemplo:

```javascript
var idade = 16;
if (idade >= 18) {
  //esse codigo ira ser executado só se a condição for verdadeira
  console.log("ja pode ser preso");
} else {
  //esse codigo ira ser executado se a condição for falsa
  console.log("vai pro reformatorio e ja pode voltar a roubar depois de 1 mes");
}
```

lembrando que da para colocar varios ifs e elses um dentro do outro

exemplo:

```javascript
var dinheiroNaConta = 100;
if (dinheiroNaConta > 50000) {
  //ja que a condiçao nao foi atingida, entao esse codigo nao sera executado
  console.log("STONKS");
} else {
  //ele vai executar o else, ja que o dinheiroNaConta nao é maior que 50000
  if (dinheiroNaConta > 10000) {
    //esse codigo nao vai ser executado ja que a condiçao nao foi verdadeira
    console.log("deve ser medico");
  } else {
    //vai executar esse else
    if (dinheiroNaConta > 1000) {
      //condiçao nao atingida. esse codigo nao sera executado
      console.log("só pode ser advogado");
    } else {
      //no final ele vai executar isso, printando o comando
      console.log("esse é de humanas, deve ter feito sociologia");
    }
  }
}
```
