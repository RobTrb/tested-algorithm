export function wordChecker(guess, answer) {

    guess = guess.toLowerCase()
    answer = answer.toLowerCase()
    
    guess = guess.split('').map(letter => ({ letter: letter, result: 'blank' }))
    answer = answer.split('').map(letter => ({ letter: letter, result: 'blank' }))

    console.log(guess)
    console.log(answer)

    return { guess, answer }
}