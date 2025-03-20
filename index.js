import { wordChecker } from "./algorithm.js"

const guessInput = document.querySelector('#theGuess')
const answerInput = document.querySelector('#theAnswer')
const testBtn = document.querySelector('#testBtn')

testBtn.addEventListener('click', ()=>{

    const guessTest = guessInput.value
    const answerTest = answerInput.value

    wordChecker(guessTest, answerTest)
})