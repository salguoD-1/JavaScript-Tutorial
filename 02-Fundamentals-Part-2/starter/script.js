"use strict";
function helloUser(name, age) {
  // Retornamos a string.
  return `Hello, ${name}. You're ${age} years old!`;
}

// Chamando a função e passando argumentos para os parâmetros. Para isso é necessário usar a função console.log para exibir o valor retornado.
console.log(helloUser("Douglas", 22));