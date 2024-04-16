// Task 2
// Use a loop to print out the squares for the numbers between 1 and 100.

const readline = require("readline-sync");

for (let i = 1; i <= 100; i++){
    console.log(`${i} squared is ` + Math.pow(i,2))
}
