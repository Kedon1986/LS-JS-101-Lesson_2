const MESSAGES = require('./mortgage_calculator_messages.json');
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

while (true) {

  prompt(MESSAGES['loanAmount']);
  let loanAmount = readline.question();

  //loan amount validation
  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES['invalidNum']);
    loanAmount = readline.question();
  }

  prompt(MESSAGES['interestRate']);
  let interestRate = readline.question();

  //interest rate validation
  while (invalidNumber(interestRate)) {
    prompt(MESSAGES['invalidNum']);
    interestRate = readline.question();
  }

  prompt(MESSAGES['loanDuration']);
  let loanDuration = readline.question();

  //loan duration validation
  while (invalidNumber(loanDuration)) {
    prompt(MESSAGES['invalidNum']);
    loanDuration = readline.question();
  }

  interestRate = interestRate / 100 / 12;
  loanDuration *= 12;

  let monthlyRate = loanAmount *
  (interestRate / (1 - Math.pow((1 + interestRate), (-loanDuration))));
  monthlyRate = monthlyRate.toFixed(2);

  prompt(MESSAGES['result']  + `$${monthlyRate}`);

  prompt(MESSAGES['playAgain']);
  let playAgain = readline.question();

  if (playAgain === 'N' || playAgain === 'n') {
    break;
  }
}
