/*
End goal:
Have a function that takes 2 words as strings and completes the following steps:

1. Takes both words and makes sure they are all lower case letters.

2. Converts both words to arrays with a letter property and a result (that starts out
with the value blank) property.

Example: If the guess word is Hello it will end up as:
guess: [
{letter: 'H', result: "blank"}
{letter: 'e', result: "blank"}
{letter: 'l', result: "blank"}
{letter: 'l', result: "blank"}
{letter: 'o', result: "blank"}
]

3. With 2 words (first being "guess" and second being "answer") now converted propperly
the function now compares every single letter between those words. While comparing the
 function should change the result to one of three possible results:

'incorrect': if the letter in the guess word does not exist in the answer
'misplaced': the letter exists in the answer but not on this place
'correct': the letter exists and at the same place as the guess

4. Change the first letter to a upper case letter
*/

import { describe, expect, it } from '@jest/globals';
import { wordChecker } from './algorithm.js';

/*
Tests written below. Starting with tests and then adding the functionality. Tests that 
becomme irrelevant during the coding proccess will be commented out
*/

describe('wordChecker()', () => {
  /*
    First test checks that characters are converted to lower case letters
    it('should return the words you put in with first letter converted to upper case', ()=>{
        const output = wordChecker('Hello', 'Test')
        expect(output).toBe('hello test')
    })
    */

  /*
    Second test checks that words have been converted to an array with objects
    it('should return an array for each word with objects that have properties', ()=>{
        const output = wordChecker('Be', 'It')
        expect(output).toEqual({
            guess: [
                {letter: 'b', result: 'blank'},
                {letter: 'e', result: 'blank'}
            ],
            answer: [
                {letter: 'i', result: 'blank'},
                {letter: 't', result: 'blank'}
            ]
        })
    })
    */

  it('should change "result" to fit paramaters of list item 3 in end goals', () => {
    const output = wordChecker('Grape', 'great');
    expect(output).toEqual({
      checkedGuess: [
        { letter: 'G', result: 'correct' },
        { letter: 'r', result: 'correct' },
        { letter: 'a', result: 'misplaced' },
        { letter: 'p', result: 'incorrect' },
        { letter: 'e', result: 'misplaced' },
      ],
    });
  });
});
