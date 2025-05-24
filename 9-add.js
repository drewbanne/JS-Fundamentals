// This script prints the addition of two integers passed as command-line arguments.
// It defines a function 'add(a, b)' to perform the addition.
// It uses console.log() and adheres to the constraint of not using 'var'.

// Define the function as specified in the assignment.
// This function takes two arguments and returns their sum.
function add(a, b) {
  return a + b;
}

// Get the first and second command-line arguments.
// process.argv[2] is the first actual argument.
// process.argv[3] is the second actual argument.
const firstArgument = process.argv[2];
const secondArgument = process.argv[3];

// Convert the arguments to integers.
// If an argument is missing or cannot be parsed, parseInt() will return NaN.
const num1 = parseInt(firstArgument);
const num2 = parseInt(secondArgument);

// Call the add function with the parsed numbers and print the result.
// If either num1 or num2 is NaN, their addition will also result in NaN,
// which matches the assignment's example output for missing/invalid arguments.
console.log(add(num1, num2));
