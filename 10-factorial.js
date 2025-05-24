// This script computes and prints the factorial of an integer recursively.
// The integer is the first command-line argument.
// Factorial of NaN (or non-positive integers as per common factorial definition) is 1.
// It uses a recursive function, console.log(), and adheres to the constraint of not using 'var'.

/**
 * Computes the factorial of a given non-negative integer recursively.
 * As per assignment, factorial of NaN or 0 is 1.
 * For negative numbers, it will also return 1, aligning with the "NaN is 1" rule
 * and typical factorial definitions which are for non-negative integers.
 * @param {number} n The integer for which to compute the factorial.
 * @returns {number} The factorial of n.
 */
function factorial(n) {
  // Base case: If n is NaN or 0, return 1.
  // Number.isNaN(n) checks if n is NaN.
  // n === 0 handles the factorial of 0.
  // Also handles negative numbers by returning 1, effectively treating them like NaN for this problem.
  if (Number.isNaN(n) || n <= 0) {
    return 1;
  }
  // Recursive step: n * factorial(n - 1)
  return n * factorial(n - 1);
}

// Get the first command-line argument.
// process.argv[2] holds the first actual argument provided by the user.
const argument = process.argv[2];

// Convert the argument to an integer.
// If the argument is missing or cannot be parsed, parseInt() will return NaN.
const num = parseInt(argument);

// Compute the factorial using the recursive function.
const result = factorial(num);

// Print the result to the console.
console.log(result);
