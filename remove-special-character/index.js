const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a string: ", (inputString) => {
  console.log(`You entered: ${inputString}`);
  let regex = /[^a-zA-Z0-9]/g;
  let result = inputString.replace(regex, "");
  console.log(`Result : ${result}`);
  rl.close();
});
