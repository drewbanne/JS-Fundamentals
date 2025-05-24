// This script prints three specific lines using an array and a loop.
// It adheres to the constraints of not using 'var', 'if/else',
// and uses only one 'console.log' statement within the loop.

// Define an array containing the three required strings.
const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Iterate over the messages array using a for...of loop.
// This loop structure allows direct access to each element without
// needing an index, and naturally handles the iteration.
for (const message of messages) {
  // Print each message. This is the single console.log statement allowed.
  console.log(message);
}