// This script prints "C is fun" a specified number of times (x).
// x is the first command-line argument.
// If x cannot be converted to a positive integer, it handles the output accordingly.
// It adheres to the constraints of not using 'var', using only two 'console.log' statements,
// and utilizing a loop.

// Get the first command-line argument.
// process.argv[2] holds the first actual argument provided by the user.
const argument = process.argv[2];

// Attempt to convert the argument to an integer.
const numberOfOccurrences = parseInt(argument);

// Check if the converted number is NaN (Not-a-Number).
// This handles cases where the argument is missing or not a valid number.
if (Number.isNaN(numberOfOccurrences)) {
  // Use the first allowed console.log for the error message.
  console.log("Missing number of occurrences");
} else {
  // If it's a valid number, loop to print "C is fun".
  // The loop will not execute if numberOfOccurrences is 0 or negative,
  // which naturally handles the assignment's example for negative input.
  for (let i = 0; i < numberOfOccurrences; i++) {
    // Use the second allowed console.log for printing "C is fun".
    console.log("C is fun");
  }
}