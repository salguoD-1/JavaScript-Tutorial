"use strict";
const aboutDouglas = {
  firstName: "Douglas",
  lastName: "Cunha de Jesus",
  birthYear: 1999,
  job: "Student",
  friends: [
    "Joãozinho1",
    "Joãozinho2",
    "Joãozinho3",
    "Joãozinho4",
    "Joãozinho5",
  ],
  hasDriversLicense: false,

  // Usando uma expressão como função
  calcAge: function () {
    return 2022 - this.birthYear;
  },
};

/* A propriedade calcAge pode ser vista como

calcAge = function () {
  return 2022 - this.birthYear;
};

*/

// Acessando o método calcAge, retorna 23.
console.log(aboutDouglas.calcAge());

// Usando a notação Bracket temos
console.log(aboutDouglas["calcAge"]());