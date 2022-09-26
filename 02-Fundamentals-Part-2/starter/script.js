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

const interestedIn = prompt("What do you want to know about Douglas? Choose between firstName, lastName, age, job and friends");

// Resulta em undefined, pois ele tenta acessar uma propriedade(interestedIn) que não existe no objeto.
console.log(aboutDouglas.interestedIn);

// Retorna o valor passado para a variável interestedIn
console.log(aboutDouglas[interestedIn]);