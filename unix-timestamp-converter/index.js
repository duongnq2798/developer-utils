const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a timestamp: ", (timestamp) => {
  console.log(`You entered: ${timestamp}`);
  const result = new Date(Number(timestamp) * 1000);
  const seconds = result.getSeconds();
  const minutes = result.getMinutes();
  const hours = result.getHours();
  const day = result.getDate();
  const month = result.getMonth() + 1; // Month is zero-indexed, so add 1 to get the correct month
  const year = result.getFullYear();
  console.log(`Result : -------- \n
  ISO String: ${result.toISOString()}\n
  seconds: ${seconds}\n
  minutes: ${minutes}\n
  hours: ${hours}\n
  day: ${day}\n
  month: ${month}\n
  year: ${year}\n
  `);

  rl.close();
});
