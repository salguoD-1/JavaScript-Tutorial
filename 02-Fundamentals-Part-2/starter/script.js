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
    // Basicamente criamos a propriedade age, é como se fizessemos aboutDouglas.age = 2022 - this.birthYear;
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSumarry: function () {
    if (this.hasDriversLicense) {
      return `${this.firstName} ${
        this.lastName
      } is a ${this.calcAge()} years old ${
        this.job
      } and he has a driver's license`;
    } else {
      return `${this.firstName} ${
        this.lastName
      } is a ${this.calcAge()} years old ${
        this.job
      } and he has no driver's license`;
    }
  },
};

console.log(aboutDouglas.getSumarry());

console.log(aboutDouglas)