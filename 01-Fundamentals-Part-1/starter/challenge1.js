/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

const bmiPerson = (mass, height) => {
  return mass / (height * height);
};

console.log("Case 1\n");
// Teste 1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let markHigherBMI =
  bmiPerson(markWeight, markHeight) > bmiPerson(johnWeight, johnHeight);
console.log(`Mark has a higher BMI than John?: ${markHigherBMI}`);
console.log(`Mark BMI is: ${bmiPerson(markWeight, markHeight)}`);
console.log(`John BMI is: ${bmiPerson(johnWeight, johnHeight)}`);

console.log("\nCase 2\n");

// Teste 
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;
markHigherBMI =
  bmiPerson(markWeight, markHeight) > bmiPerson(johnWeight, johnHeight);
console.log(`Mark has a higher BMI than John?: ${markHigherBMI}`);
console.log(`Mark BMI is: ${bmiPerson(markWeight, markHeight)}`);
console.log(`John BMI is: ${bmiPerson(johnWeight, johnHeight)}`);
