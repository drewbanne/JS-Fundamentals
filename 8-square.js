// This script prints a square of 'X' characters based on the first command-line argument (size).
// If the argument cannot be converted to a positive integer, it prints "Missing size".
// It uses console.log() and adheres to the constraint of not using 'var' and using loops.

// Get the first command-line argument.
// process.argv[2] holds the first actual argument provided by the user.
const argument = process.argv[2];

// Attempt to convert the argument to an integer.
const size = parseInt(argument);

// Check if the converted number is NaN (Not-a-Number).
// This handles cases where the argument is missing or not a valid number (e.g., "School").
if (Number.isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) {
  // If the size is a valid positive integer, proceed to print the square.
  // The outer loop iterates for each row of the square.
  for (let i = 0; i < size; i++) {
    let row = ''; // Initialize an empty string for the current row.
    // The inner loop builds the string for the current row by adding 'X' characters.
    for (let j = 0; j < size; j++) {
      row += 'X'; // Append 'X' for each column.
    }
    // Print the completed row string.
    console.log(row);
  }
}
// If size is 0 or negative, nothing is printed, as per the assignment examples.
