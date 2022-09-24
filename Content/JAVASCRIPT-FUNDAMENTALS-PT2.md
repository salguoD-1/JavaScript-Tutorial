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
