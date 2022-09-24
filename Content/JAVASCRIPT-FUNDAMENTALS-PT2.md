# Segunda parte do estudo dos fundamentos da linguagem JavaScript

## Strict Mode

O modo estrito é um modo especial que podemos ativar para escrever códigos JavaScript mais seguros. Para podermos usar o modo estrito basta escrever no **ínicio do nosso programa** a seguinte string

```js
"use strict";
```

Basicamente o modo estrito nos proíbe de fazer certas coisas e exibe erros visíveis no console do terminal. Vejamos um exemplo

```js
"use strict";
let hasDriversLicense = false;
const passTest = true;

// Note que omitimos o s no nome da variável abaixo. hasDriversLicense != hasDriverLicense
if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log("I can drive :D");
```

O código acima gera o seguinte erro

- ReferenceError: hasDriverLicense is not defined

Note que falta um s em Driver. O modo estrito é muito útil para evitar esses tipos de erros.

#

Além disso, o modo estrito apresenta uma lista de nomes de variáveis que são reservados da linguagem.

```js
"use strict";
const interface = "Audio";
```

O exemplo acima resulta no seguinte erro

- Uncaught SyntaxError: Unexpected strict mode reserved word

O error ocorre pois a linguagem JavaScript reservou o nome interface que é ou pode ser uma feature futuramente. Portanto não podemos usar essas palavras reservadas como nome de variáveis.

# Functions

Funções são um pedaço de código que podemos utilizar quantas vezes desejarmos.

```js
"use strict";
function logger() {
  console.log("My name is Douglas!");
}

// Chamando a função para ela executar sua tarefa.
logger();
```

No exemplo acima podemos usar a função inumeras vezes. Para isso, é necessário fazer a **chamada da função**, nesse caso usando o nome da função e os parênteses.

#

Funções podem receber dados e retornar dados. Para uma função receber dados é necessário declarar parâmetros, que são uma espécie de variável dentro dos parênteses.

```js
"use strict";
function helloUser(name, age) {
  console.log(`Hello, ${name}. You're ${age} years old!`);
}

// Chamando a função e passando argumentos para os parâmetros.
helloUser("Douglas", 22);
```

Note que declaramos dois parâmetros, sendo name e age. Para passar valores para esses parâmetros é necessário colocar os valores dentro dos parênteses na chamada da função. Chamamos esse "Passar valores" de argumentos da função.

Legal, mas e se quisermos que a função retorne algo, o que devemos fazer? Simples, basta utilizar o comando return e o que você deseja retornar.

```js
"use strict";
function helloUser(name, age) {
  // Retornamos a string.
  return `Hello, ${name}. You're ${age} years old!`;
}

// Chamando a função e passando argumentos para os parâmetros. Para isso é necessário usar a função console.log para exibir o valor retornado.
console.log(helloUser("Douglas", 22));
```

# Function Declarations vs Expressions

Em JavaScript há várias formas diferentes de escrever funções. Além disso, cada tipo de função funciona de uma forma diferente. As funções estudadas acima são chamadas de declarações de funções pois usamos a palavra reservada function.

```js
"use strict";
// Declaração de função.
function helloWorld() {
  console.log("Hello, world!");
}
```

Agora iremos criar uma **expressão de função** que é um outro tipo de função.

```js
"use strict";
// A função não possui nome, logo é uma função ANÔNIMA.
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
```

Basicamente tudo que está ao lado direito da variável é chamado de expressão. Essa expressão possui um valor que é armazenado na variável calcAge.

Em JavaScript, funções são valores que podem ser armazenados em variáveis.

Mas enfim, qual a grande diferença entre declaração de função e expressão de função? Bem, a **principal diferença é que podemos chamar as declarações de funções antes delas serem definidas no código.**

```js
"use strict";
// Note que chamamos a função antes da sua declaração.
const age1 = calcAge1(1999);

function calcAge1(birthYear) {
  return 2022 - birthYear;
}
```

Note que no exemplo acima a **declaração de função** nos permite chamar a função antes mesmo dela ser declarada. Se fizermos isso com a **expressão de função** resultaria em um error do tipo **ReferenceError: Cannot acess 'nome_da_função' before inicialization**. Esse problema acontece por conta do [Hoisting](https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting) que veremos futuramente.

Mas qual das duas funções usar? A que você desejar. Particularmente prefiro utilizar expressões de funções.

# Arrow Functions

Arrow Functions é uma terceira forma de utilizar funções, ela foi introduzida na versão ES6. Chamamos de Arrow Function ou Função de Seta.

Arrow Function é uma forma especial de **expressão de função** que é mais curta e direta.

```js
"use strict";
// Note que passamos o parâmetro dentro dos parênteses e usamos a notação de seta que por fim retorna algo.
const calcAge = (birthYear) => 2022 - birthYear;
// Chama a função e imprime o valor retornado.
console.log(calcAge(1999));
```

Note que no exemplo acima não fazemos uso da palavra reservada **return**, após a notação da seta temos o retorno da função. No entanto, essa forma só funciona quando temos apenas um parâmetro e apenas uma linha de retorno.

Quando adicionamos mais parâmetros devemos utilizar chaves para colocar nosso código dentro e utilizar a palavra reservada return.

```js
"use strict";

const yearsUntilRetirement = (birthYear) => {
  // Calculamos a idade.
  const age = 2022 - birthYear;
  // Calculamos quantos anos falta para a aposentadoria.
  const retirement = 65 - age;
  // Retornamos a quantidade de anos restantes até a aposentadoria.
  return retirement;
};
// Chamamos a função e passamos 1999 como argumento.
console.log(yearsUntilRetirement(1999));
```

Utilizando mais de um parâmetro temos

```js
"use strict";

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;

  // Retornamos um template literal.
  return `${firstName} retires in ${retirement} years!`;
};
// Douglas retires in 42 years!
console.log(yearsUntilRetirement(1999, "Douglas"));
```

Note que passamos dois parâmetros, para isso é necessário separar cada parâmetro com vírgula.

Mas qual a diferença entre **arrow functions** e as funções tradicionais? Bem, a diferença é que arrow function não possui a palavra reservada **this**. Veremos isso mais para frente.

# Functions Calling Other Functions

