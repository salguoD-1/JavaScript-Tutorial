"use strict";

const myArray = [1, true, "Douglas", 23.4, "Pietro", false, "O hexa vem!!!"];

for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === "boolean") {
    break;
  } else {
    console.log(myArray[i]);
  }
}
