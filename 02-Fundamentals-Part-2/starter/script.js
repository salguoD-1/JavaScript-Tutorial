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
