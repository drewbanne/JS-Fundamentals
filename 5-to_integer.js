// This script checks if the first command-line argument can be converted to an integer.
// If it can, it prints "My number: <integer>".
// Otherwise, it prints "Not a number".
// It uses console.log() and adheres to the constraints of not using 'var' or 'try/catch'.

// process.argv[2] holds the first command-line argument provided by the user.
const argument = process.argv[2];

// Attempt to convert the argument to an integer.
// parseInt() will parse a string argument and return an integer.
// If the first character cannot be converted to a number, it returns NaN (Not-a-Number).
// For example, parseInt("89") returns 89.
// parseInt("89.89") returns 89 (it stops at the decimal).
// parseInt("School") returns NaN.
// parseInt(undefined) also returns NaN.
const myNumber = parseInt(argument);

// Check if the result of parseInt() is NaN.
// Number.isNaN() is a reliable way to check for NaN values.
if (Number.isNaN(myNumber)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${myNumber}`);
}