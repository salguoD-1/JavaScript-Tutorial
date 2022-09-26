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

Usando o exemplo abaixo, imagine que antes de fazermos nosso suco é necessário que outra função corte as frutas em pedaços, vamos ver:

```js
"use strict";
const fruitProcessor = (apples, oranges) => {
  return `Juice with ${apples} apples and ${oranges} oranges.`;
};
```

```js
// Função que corta a fruta em 4 pedaços.
"use strict";
const cutFruitPieces = (fruits) => {
  return fruit * 4;
};
```

Unindo as duas funções temos

```js
"use strict";
const cutFruitPieces = (fruits) => {
  return fruits * 4;
};

const fruitProcessor = (apples, oranges) => {
  // Chama a função cutFruitPieces que recebe as frutas como parâmetro e retorna a fruta cortada em quatro pedaços.
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  // Retorna a string literal.
  return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
};
// Chamamos a função e passamos 2 maças e 3 laranjas.
console.log(fruitProcessor(2, 3));
```

Ou seja, basicamente temos uma função dentro de uma função. A função interna cutFruitPieces recebe como argumento o valor passado como argumento para a função fruitProcessor e armazena o valor retornado da função cutFruitPieces.

# Introduction to Arrays

Nessa seção iremos estudar nossa primeira estrutura de dados, conhecida como array ou lista. Uma estrutura de dado serve para armazenar dados, ou seja, informações.

```js
"use strict";
const friends = ["Michael", "Steven", "Peter"];
// Exibe [ 'Michael', 'Steven', 'Peter' ]
console.log(friends);
```

Basicamente no exemplo acima temos uma array(lista) que contém 3 elementos. Cada elemento é representado por um índice que é a posição de cada elemento no array. Na linguagem JavaScript e em muitas outras temos que o índice começa na posição 0. Portanto, o elemento 1 tem índice 0, o elemento 2 tem índice 1 e por ai vai.

Um array(lista) pode armazenar qualquer tipo de dado.

```js
"use strict";
const aboutMe = ["Douglas", 22, "Universidade Federal de Sergipe"];
// [ 'Douglas', 22, 'Universidade Federal de Sergipe' ]
console.log(aboutMe);
```

Usando o **método length** para saber a quantidade de elementos presentes no array

```js
"use strict";
const aboutMe = ["Douglas", 22, "Universidade Federal de Sergipe"];
// Exibe 3, pois temos 3 elementos dentro do array.
console.log(aboutMe.length);
```

Acessando o último elemento de um array utilizando o método length

```js
"use strict";
const aboutMe = ["Douglas", 22, "Universidade Federal de Sergipe"];
// Exibe 3, pois temos 3 elementos dentro do array.
console.log(aboutMe[aboutMe.length - 1]);
```

O length - 1 se deve ao fato de que o índice começa em 0, logo como são 3 elementos temos que os índices serão: 0, 1 e 2. Além disso, usamos os colchetes para podermos acessar o índice de cada elemento.

Imagine que queremos modificar o array alterando o valor de determinado elemento. Mas será que isso é possível? Afinal, estamos usando const que é imutável. A resposta é: Sim, podemos alterar um valor do array pois arrays não são um tipo de dado primitivo. Veremos mais sobre isso futuramente.

```js
"use strict";
const aboutMe = ["Douglas", 22, "Universidade Federal de Sergipe"];
// [ 'Douglas', 22, 'Universidade Federal de Sergipe' ]
console.log(aboutMe);
// Alteramos o valor do elemento que possui índice 1.
aboutMe[1] = 23;
// [ 'Douglas', 23, 'Universidade Federal de Sergipe' ]
console.log(aboutMe);
```

# Basic Array Operations(Methods)

Podemos usar ferramentas para manipular arrays, nesse caso chamamos essas ferramentas de **métodos**. Vamos ver esses métodos em ação no exemplo abaixo.

- O método **push adiciona elementos ao final do array.**

```js
"use strict";
const friends = ["Michael", "Steven", "Peter"];
// Adiciona Jay ao final do array.
friends.push("Jay");
// Exibe: [ 'Michael', 'Steven', 'Peter', 'Jay' ]
console.log(friends);
```

Basicamente a função push adiciona elementos ao final do array. O que a função/método push retorna é o length(tamanho) do novo array, nesse caso 4.

- O método **unshift adiciona elementos no início do array.**

```js
"use strict";
const friends = ["Michael", "Steven", "Peter"];
// Adiciona Douglas no ínicio do array.
friends.unshift("Douglas");
// Exibe: [ 'Douglas', 'Michael', 'Steven', 'Peter' ]
console.log(friends);
```

Assim como o método push, o método unshift tem como retorno o length(tamanho) do array, nesse caso 4.

- O método **pop remove o último elemento do array.**

```js
"use strict";
const friends = ["Michael", "Steven", "Peter"];
// Remove o último elemento do arary.
friends.pop();
// Exibe: [ 'Michael', 'Steven' ]
console.log(friends);
```

O método pop tem como retorno o elemento removido do array.

- O método **shift remove o primeiro elemento do array.**

```js
"use strict";
const friends = ["Michael", "Steven", "Peter"];
// Remove o primeiro elemento do arary.
friends.shift();
["Steven", "Peter"];
console.log(friends);
```

Assim como pop, o método shift tem como retorno o elemento removido do array.

- O método **indexOf('valor') retorna o índice do elemento no array.**

```js
"use strict";
const friends = ["Michael", "Steven", "Peter"];
// Retorna o índice do elemento com valor "Steven", nesse caso 1.
console.log(friends.indexOf("Steven"));
```

Caso o elemento não esteja no array, temos que o método indexOf irá retornar -1.

- O método **includes é um método semelhante ao indexOf mas que faz parte da versão ES6, o método includes retorna true ou false a depender se o valor está ou não no array.**

```js
"use strict";
const friends = ["Michael", "Steven", "Peter"];
// Retorna true, pois Steven faz parte do array.
console.log(friends.includes("Steven"));
```

O método includes faz uso do operador strict que analisa o tipo de dado e o valor passado, caso sejam iguais retorna true caso contrário retorna false.

Uma aplicação interessante do método includes seria ao testar uma condição usando a estrutura condicional if/else.

```js
"use strict";
const friends = ["Steven", "Peter", "Bob"];

// Como Peter faz parte do array, temos que o valor retornado é true.
if (friends.includes("Peter")) {
  console.log("You have a friend called Peter!");
}
```

# Introduction to Objects

Objetos são uma **estrutura de dado** que nos permite armazenar múltiplos valores **relacionados** em uma mesma variável. Ou seja, armazenamos valores **key-values(chave-valor), onde cada key tem seu respectivo valor.**

```js
"use strict";
const aboutDouglas = {
  firstName: "Douglas",
  lastName: "Cunha de Jesus",
  age: 22,
  job: "Student",
  friends: [
    "Joãozinho1",
    "Joãozinho2",
    "Joãozinho3",
    "Joãozinho4",
    "Joãozinho5",
  ],
};
```

No exemplo acima temos um objeto chamado aboutDouglas que armazena pares key-value(chave-valor), note que o primeiro par firstName armazena "Douglas" e por ai vai. Por fim, temos uma key que armazena um array de valores. Objetos trabalham com todos os tipos de dados vistos até agora.

Podemos pensar que cada key é uma variável independente que armazena seus respectivos valores.

Além disso, cada **key dessas é chamada de propriedade**. Ou seja, no exemplo acima temos cinco propriedades e 5 valores.

Existem várias formas de criar objetos, a que usamos acima se chama **object literal.**

Mas qual a grande diferença entre ararys e objects? Bem, a diferença é que em **Objects a ordem desses valores não importam, ou seja, só precisamos saber sua propriedade para podermos acessar. Já em arrays, é necessário saber o seu índice para ter acesso ao elemento.**

# Dot vs Bracket Notation

Nessa seção iremos aprender a como acessar e alterar valores em nossos Objetos. Para isso há duas notações, a **Dot e a Bracket.**

- Acessando as propriedades de um objeto usando a notação Dot

```js
"use strict";
const aboutDouglas = {
  firstName: "Douglas",
  lastName: "Cunha de Jesus",
  age: 22,
  job: "Student",
  friends: [
    "Joãozinho1",
    "Joãozinho2",
    "Joãozinho3",
    "Joãozinho4",
    "Joãozinho5",
  ],
};

// Acessamos o objeto utilizando a notação Dot e em seguida, acessamos a propriedade firstName.
console.log(aboutDouglas.firstName);
console.log(aboutDouglas.age);
console.log(aboutDouglas.friends);
```

No exemplo acima acessamos o objeto aboutDouglas e acessamos as propriedades firstName, age e friends utilizando a notação Dot.

- Acessando as propriedades de um objeto usando a notação Bracket

```js
"use strict";
const aboutDouglas = {
  firstName: "Douglas",
  lastName: "Cunha de Jesus",
  age: 22,
  job: "Student",
  friends: [
    "Joãozinho1",
    "Joãozinho2",
    "Joãozinho3",
    "Joãozinho4",
    "Joãozinho5",
  ],
};

// Exibe o valor de cada key.
console.log(aboutDouglas["firstName"]);
console.log(aboutDouglas["age"]);
console.log(aboutDouglas["Friends"]);
```

No exemplo acima usamos a notação Bracket(colchetes), note que dentro dos colchetes nós usamos aspas simples ou duplas e passamos o nome da propriedade. Por fim, é retornado o valor armazenado na propriedade.

Além disso, podemos realizar operações dentro dos colchetes, vejamos

```js
"use strict";
const aboutDouglas = {
  firstName: "Douglas",
  lastName: "Cunha de Jesus",
  age: 22,
  job: "Student",
  friends: [
    "Joãozinho1",
    "Joãozinho2",
    "Joãozinho3",
    "Joãozinho4",
    "Joãozinho5",
  ],
};

// Exibe o valor de cada key.
const nameKey = "Name";
console.log(aboutDouglas["first" + nameKey]);
```

No exemplo acima fazemos a operação de concatenação "first" + nameKey que possui valor Name, o resultado será firstName que é uma propriedade do objeto, portanto retorna o valor armazenado na propriedade.

Mas qual das duas notações utilizar? A que você achar mais adequado para resolver seu problema. Vejamos um exemplo particular abaixo

```js
"use strict";
const aboutDouglas = {
  firstName: "Douglas",
  lastName: "Cunha de Jesus",
  age: 22,
  job: "Student",
  friends: [
    "Joãozinho1",
    "Joãozinho2",
    "Joãozinho3",
    "Joãozinho4",
    "Joãozinho5",
  ],
};

const interestedIn = prompt(
  "What do you want to know about Douglas? Choose between firstName, lastName, age, job and friends"
);

// Resulta em undefined, pois ele tenta acessar uma propriedade(interestedIn) que não existe no objeto.
console.log(aboutDouglas.interestedIn);

// Retorna o valor passado para a variável interestedIn
console.log(aboutDouglas[interestedIn]);
```

No exemplo acima note que se tentarmos acessar a propriedade passada com a notação Dot, vai resultar em undefined pois não é possível acessar diretamente uma propriedade que não existe. Já no segundo caso, é possível acessar o valor passado para a variável interestedIn, pois é possível computar a operação dentro do array.

Como undefined é um valor falso, podemos utilizar uma estrutura if/else para personalizar nossa saída.

```js
"use strict";
const aboutDouglas = {
  firstName: "Douglas",
  lastName: "Cunha de Jesus",
  age: 22,
  job: "Student",
  friends: [
    "Joãozinho1",
    "Joãozinho2",
    "Joãozinho3",
    "Joãozinho4",
    "Joãozinho5",
  ],
};

const interestedIn = prompt(
  "What do you want to know about Douglas? Choose between firstName, lastName, age, job and friends"
);

// Caso a propriedade exista, retorna um valor diferente de 0.
if (aboutDouglas[interestedIn]) {
  console.log(aboutDouglas[interestedIn]);
} else {
  console.log("Wrong request!");
}
```

Caso o usuário tente colocar um valor que não seja uma propriedade existente no objeto, temos que retornará Wrong request!.

- Usando a notação **Dot e Bracket para adicionar novas propriedades ao objeto.**

```js
"use strict";
const aboutDouglas = {
  firstName: "Douglas",
  lastName: "Cunha de Jesus",
  age: 22,
  job: "Student",
  friends: [
    "Joãozinho1",
    "Joãozinho2",
    "Joãozinho3",
    "Joãozinho4",
    "Joãozinho5",
  ],
};

const interestedIn = prompt(
  "What do you want to know about Douglas? Choose between firstName, lastName, age, job and friends"
);

// Notação Dot
aboutDouglas.location = "Brazil";

// Notação Bracket
aboutDouglas["twitter"] = "@_dougcunha";

// Caso a propriedade exista, retorna um valor diferente de 0.
if (aboutDouglas[interestedIn]) {
  console.log(aboutDouglas[interestedIn]);
} else {
  console.log("Wrong request!");
}

// Exibe todos os valores do objeto.
console.log(aboutDouglas);
```

Note que para adicionar uma nova propriedade bastar passar um nome e um valor.

- Desafio: Exiba a quantidade de elementos presentes na propriedade friends que armazena um array, e por fim exiba que o seu melhor amigo é o elemento de índice 0.

```js
"use strict";
const aboutDouglas = {
  firstName: "Douglas",
  lastName: "Cunha de Jesus",
  age: 22,
  job: "Student",
  friends: [
    "Joãozinho1",
    "Joãozinho2",
    "Joãozinho3",
    "Joãozinho4",
    "Joãozinho5",
  ],
};

// Acessa a propriedade friends e retorna a quantidade de elementos presentes no array.
const result = `${aboutDouglas.firstName} has ${aboutDouglas.friends.length} friends and his best friend is called ${aboutDouglas.friends[0]}`;

console.log(result);
```

No exemplo acima acessamos o objeto aboutDouglas e acessamos a propriedade friends e firstName, em seguida usamos o método length para calcular a quantidade de elementos no array(propriedade friends). Por fim, acessamos apenas o elemento de índice 0 que é Joãozinho1.

# Object Methods
