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
