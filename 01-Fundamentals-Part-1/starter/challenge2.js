/*
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement.
*/

const bmiPerson = (mass, height) => {
  return mass / (height * height);
};

let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
// Analisamos o BMI e setamos true caso a condição seja verdadeira.
if (bmiPerson(markWeight, markHeight) > bmiPerson(johnWeight, johnHeight)) {
  console.log(`Mark BMI is: ${bmiPerson(markWeight, markHeight)}`);
  console.log(`John BMI is: ${bmiPerson(johnWeight, johnHeight)}`);
  console.log(`Mark has a higher BMI than John?: ${true}`);
} else {
  console.log(`Mark BMI is: ${bmiPerson(markWeight, markHeight)}`);
  console.log(`John BMI is: ${bmiPerson(johnWeight, johnHeight)}`);
  console.log(`John has a higher BMI than Mark?: ${true}`);
}
