const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

//checks if all user input is valid
function invalidNumber(number) {
  return Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

while (true) {

  prompt(MESSAGES['firstNum']);
  let number1 = readline.question();

  //First number validation
  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalidNum']);
    number1 = readline.question();
  }

  prompt(MESSAGES['secondNum']);
  let number2 = readline.question();

  //Second number validation
  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalidNum']);
    number2 = readline.question();
  }

  prompt(MESSAGES['numOperation']);
  let operation = readline.question();

  // operation validation
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['operationValid']);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(MESSAGES['result']  + `${output}`);

  prompt(MESSAGES['playAgain']);
  let playAgain = readline.question();

  if (playAgain === 'N' || playAgain === 'n') {
    break;
  }
}


