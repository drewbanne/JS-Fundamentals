// This script prints the first argument passed to it.
// If no arguments are provided, it prints "No argument".
// It uses console.log() and avoids 'var' and 'length'.

// process.argv is an array containing the command-line arguments.
// process.argv[0] is 'node'
// process.argv[1] is the path to the script file itself
// process.argv[2] is the first actual argument provided by the user.
const firstArgument = process.argv[2];

// Check if the first argument exists (i.e., if it's not undefined).
// This fulfills the requirement of not using 'length'.
if (firstArgument === undefined) {
  console.log("No argument");
} else {
  console.log(firstArgument);
}
