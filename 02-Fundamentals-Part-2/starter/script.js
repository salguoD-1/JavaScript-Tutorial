"use strict";

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years!`;
};

console.log(yearsUntilRetirement(1999, "Douglas"));