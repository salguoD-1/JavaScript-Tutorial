# Objects and Primitives

- Em JavaScript temos dois possiveis valores, object e primitive.

```js
// Object
let aboutMe = {
  name: "Douglas",
  age: 22,
};

// Primitive
let firstName = "Douglas";
let age = 22;
```

# Há 7 tipos de dados primitivos.

- Number

```js
let age = 22;
```

- String

```js
let firstName = "Douglas";
```

- Boolean

```js
let isBeautiful = true;
```

- Undefined

```js
// Undefined = Empty value.
let children;
```

- Null = Semelhante a Undefined.

- Symbol = É um valor único que não pode ser alterado.

- BigInt = Valores inteiros muito grandes.

# Três formas de declarar uma variável em JavaScript

- Let = Usamos let quando queremos declarar variáveis que podem ter seu valor mudado a qualquer momento.

```js
let age = 22;
age = 23;
```

- Note que reatribuimos o valor da variável age. Nesse caso let é uma forma "mutável", ou seja, algo que pode ser alterado.

- Const = Usamos const quando não queremos que nossas variáveis sejam alteradas.

```js
const birthYear = 1999;
// Gera um error do tipo TypeError, pois não é possível alterar o valor da variável.
birthYear = 2000;
```

- Dizemos que Const é "imutável", ou seja, o seu conteúdo não pode ser modificado. Além disso, todos os valores utilizando const DEVEM ser INICIALIZADOS.

```js
// Resultará em um error, pois o valor não foi inicializado.
const job;
```

- Var = É uma forma antiga de declarar variáveis e não deve ser utilizada.

```js
var job = "Programmer";
```

- Veremos sobre escopo de variáveis depois.

# Operações Básicas

- Operadores nos permitem transformar/combinar valores. Há vários tipos de operadores, veremos cada um deles.

## Operadores Aritméticos

- Adição

```js
let valorUm = 3;
let valorDois = 5;
// O resultado é 8.
let soma = valorUm + valorDois;
```

- Subtração

```js
let valorUm = 4;
let valorDois = 3;
// O resultado é 1.
let soma = valorUm - valorDois;
```

- Multiplicação

```js
let valorUm = 4;
let valorDois = 5;
// O resultado é 20.
let soma = valorUm * valorDois;
```

- Divisão

```js
let valorUm = 10;
let valorDois = 5;
// O resultado é 2.
let soma = valorUm / valorDois;
```

- Módulo(Resto da divisão)

```js
let valorUm = 5;
let valorDois = 3;
// O resultado é 2.
let soma = valorUm % valorDois;
```

- Exponenciação

```js
let valorUm = 2;
let valorDois = 3;
// O resultado é 8.
let soma = valorUm ** valorDois;
```

- Podemos "somar strings", ou seja, concatenar(fazer a junção de strings) usando o operador de adição

```js
let firstName = "Douglas";
let lastName = "Jesus";

// Exibe "Douglas Jesus
console.log(firstName + " " + lastName);
```

## Operadores de Atribuição

- Um exemplo de atribuição seria o: =

```js
// Note que ATRIBUIMOS 5 a variável x.
let x = 5;
```

- Alguns outros operadores de atribuição seria: +=, -=, \*=, /=, %=, x++ e x--;

# Operadores de Comparação

- Operadores de comparação produzem valor booleanos. Ou seja, true ou false.

- Os operadores são: >, >=, <, <=, ==, === e !=.

```js
let x = 3;
let y = 2;
// True
console.log(x > y);
// True
console.log(x >= y);
// False
console.log(x < y);
// False
console.log(x <= y);
// False
console.log(x == y);
// False
console.log(x === y);
// True
console.log(x != y);
```

# Operadores de Precedência

- É a ordem em que operações são executadas, por exemplo:

```js
const numOne = 3;
const numTwo = 2;
console.log(numOne + numTwo > numOne);
```

- No exemplo acima temos que a operação de adição é executada primeiro e em seguida, a operação de comparação 5 > 3 é executada, retornando um valor booleano.

- Para saber mais sobre a ordem de precedência de operadores visite a documentação da [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence).

# Strings and Template Literals

- Template Literals é uma estrutura que nos permite armazenar/exibir uma string de forma mais organizada e simples. O exemplo abaixo mostra o uso dessa estrutura e a sua sintaxe.

```js
const firstName = "Douglas";
const lastName = "Jesus";
// Exibe Douglas Jesus
const result = `${firstName} ${lastName}`;
```

# Estrutura Condicional

- Uma estrutura condicional nos permite executar determinado bloco de código a depender da sua condição. O resultado da análise da condição é um valor booleano. Digamos que para uma pessoa dirigir é necessário ter uma idade maior ou igual a 18 e possuir CNH, vejamos esse exemplo no código abaixo:

```js
const age = 22;
const hasCNH = true;

if (age >= 18) {
  if (hasCNH == true) {
    console.log("Pode dirigir!");
  } else {
    console.log("Não possui CNH, logo não pode dirigir!");
  }
} else {
  console.log("Idade insuficiente para tirar a CNH!");
}
```

- No exemplo acima temos a estrutura condional if, note que a condição é a idade ser maior ou igual a 18, caso seja temos o segundo bloco condicional onde a condição é possuir CNH. Como as duas condições são verdadeiras temos que será impresso Pode dirigir! na tela. Caso a idade fosse menor que 18 ou a pessoa não tivesse CNH, temos que o bloco else seria executado.

# Type Conversion and Coercion

- Type Conversion é quando convertemos um tipo de dado para outro tipo de dado. Já Type Coercion é quando a linguagem JavaScript converte automaticamente um tipo para outro tipo.

- Exemplo de Type Conversion

```js
const inputYear = "1991";
// Retorna 199118, note que concatenou.
console.log(inputYear + 18);

// Uma forma de resolver esse problema é utilizando a função Number() que converte um valor da string para um número.
// Retorna 2009.
console.log(Number(inputYear) + 18);
```

- Nota: Se tentarmos converter uma string que não é um número teremos um retorno do tipo NaN(Not a Number);

```js
// Retorna NaN
console.log(Number("Douglas"));
```

- Convertendo um valor do tipo número para um valor do tipo string usando a função String()

```js
// Exibe 23 que é uma string.
console.log(String(23));
```

- Exemplo de Type Coercion:

```js
// Graças ao Type Coercion, o número 23 será convertido para o tipo string.
console.log("I am " + 23 + " years old");

// Exibe 10, pois converte 23 e 10 para o tipo number.
console.log("23" - "10" - 3);
// Exibe 46, pois converte as duas strings para number.
console.log("23" * "2");
```

# Truthy and Falsy Values

- JavaScript possui 5 valores falsos, sendo eles: **0, '', undefined, null e NaN.**

```js
// False
console.log(Boolean(0));
// False
console.log(Boolean(undefined));
// True
console.log(Boolean("Jonas"));
// True
console.log(Boolean({}));
// False
console.log(Boolean(""));
```

- Exemplo utilizando a estrutura if

```js
const money = 0;
// Como money é zero, temos que o resultado da condição será convertido(type coercion) para um valor booleano, nesse caso false.
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}
```

# Equality Operators: == vs ===

- Os operadores de igualdade servem para checar se dois resultados são iguais ou não. Nesse caso, o operador == chega se os valores são iguais, ou seja, ele não checa se os tipos de dados desse valor são iguais. Já o operador === checa se os valores são iguais e se os tipos de dados são iguais.

```js
const num1 = 3;
const num2 = "3";
// Exibe true, pois checa apenas os valores.
console.log(num1 == num2);
// False, pois o primeiro valor é do tipo Number e o segundo do tipo String.
console.log(num1 === num2);
```

# Logical Operators

- Operadores lógicos são aqueles que trabalham com valores booleanos. Exemplo: &&(and), ||(or) e !(not)

```js
const x = true;
const y = true;
const z = false;
// True and True = True.
console.log(x && y);
// True and False = False
console.log(x && z);
// True and True = True.
console.log(x || y);
// True and False = True.
console.log(x || z);
// not True = False.
console.log(!x);
```

# Switch Statement

- A estrutura Switch é semelhante a estrutura if/else if/else. Nesse caso a estrutura Switch recebe um valor e testa para múltiplos casos.

```js
const day = "Monday";

switch (day) {
  case "Monday":
    console.log(`Today is ${day}!`);
    // O comando break serve para sair da estrutura caso o valor seja igual ao case.
    break;
  case "Tuesday":
    console.log(`Today is ${day}!`);
    break;
  case "Wednesday":
    console.log(`Today is ${day}!`);
    break;
  case "Friday":
    console.log(`Today is ${day}!`);
    break;
  // Caso padrão onde o valor não é encontrado.
  default:
    console.log("Not a valid day!");
    break;
}
```

- No exemplo acima temos os vários testes de caso, onde testamos cada condição. Em seguida, exibimos algo e usamos o comando break para sair da estrutura. Caso o valor não esteja nos testes de caso temos que o comando default(padrão) irá ser executado.

# The Conditional(Ternary) Operator

- O operador condicional ternário nos permite escrever uma estrutura if/else em apenas uma linha.

```js
const age = 22;

console.log(age >= 18 ? "Yes!" : "No!");
```

- Primeiro usamos o interrogação e depois o valor caso a condição seja True, caso seja False usamos os dois pontos seguido do valor.

#

[Voltar para a página inicial](../README.md)