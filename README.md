# Anotações dos meus estudos relacionados a linguagem JavaScript.

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
