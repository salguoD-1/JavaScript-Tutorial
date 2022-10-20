const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

let lower = temperatures[0];
let max = temperatures[0];

for (let i = 0; i < temperatures.length; i++) {
  if (typeof temperatures[i] == 'number') {
      if (lower >= temperatures[i]) {
          lower = temperatures[i]
      } if (max <= temperatures[i]) {
          max = temperatures[i];
      }
  } else {
    console.log(temperatures[i])
  }
}

console.log(`Amplitude = ${max - lower}`);