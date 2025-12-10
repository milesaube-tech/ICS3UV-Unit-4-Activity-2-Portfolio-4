/**
 * @author 
 * @version 1.0.0
 * @date 2025-12-09
 * @fileoverview A do-while program that calculates the sum of all even numbers from 1 to a user-entered positive integer.
 */

// variables
let number: number = 0;
let sum: number = 0;
let counter: number = 1;

// input validation using do-while
do {
  number = Number(prompt("Enter a positive integer: ") || "0");

  if (number <= 0) {
    console.log("Invalid input. Please enter a positive integer:");
  }

} while (number <= 0);

// calculate sum of even numbers
while (counter <= number) {
  if (counter % 2 === 0) {
    sum = sum + counter;
  }
  counter = counter + 1;
}

// output the answer
console.log("Sum of even numbers from 1 to " + number + " is: " + sum);
console.log("Done.");