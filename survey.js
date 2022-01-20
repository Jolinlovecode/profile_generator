const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  rl.question('What are your name? ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer} ${answer1}`);
  rl.close();
});
});


  




