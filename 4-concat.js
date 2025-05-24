// This script prints two command-line arguments in the format "arg1 is arg2".
// It uses console.log() and adheres to the constraint of not using 'var'.

// process.argv[0] is 'node'
// process.argv[1] is the path to the script file itself
// process.argv[2] is the first actual argument passed by the user
// process.argv[3] is the second actual argument passed by the user

const firstArgument = process.argv[2];
const secondArgument = process.argv[3];

// Construct the output string using template literals for clarity.
// If an argument is not provided, it will naturally be 'undefined',
// which matches the desired output format.
console.log(`${firstArgument} is ${secondArgument}`);
