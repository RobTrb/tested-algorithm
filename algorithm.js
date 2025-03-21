export function wordChecker(guess, answer) {
  guess = guess.toLowerCase();
  answer = answer.toLowerCase();

  //prepairing guess to be checked
  let checkedGuess = guess
    .split('')
    .map((letter) => ({ letter: letter, result: 'blank' }));

  //First step: Mark correct letters
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      checkedGuess[i].result = 'correct';
    }
  }

  //Second step: Mark misplaced letters
  for (let i = 0; i < guess.length; i++) {
    //excluding letters that are already marked as correct and now checks if letter exist anywhere else
    if (checkedGuess[i].result !== 'correct') {      
      let misplacedLetter = answer.indexOf(guess[i]);
      if (
        misplacedLetter !== -1 &&
        checkedGuess[misplacedLetter].result !== 'correct'
      ) {
        checkedGuess[i].result = 'misplaced';
      }
    }
  }

  //Third step: Mark remaining letters as incorrect
  for (let i = 0; i < guess.length; i++) {
    if (checkedGuess[i].result === 'blank') {
      checkedGuess[i].result = 'incorrect';
    }
  }

  //Make first letter of the guess upper case
  checkedGuess[0].letter = checkedGuess[0].letter.toUpperCase();

  return { checkedGuess };
}
