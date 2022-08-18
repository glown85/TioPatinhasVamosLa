# TioPatinhasVamosLa
Aulas de programaçao

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

