let randomNumber = Math.floor(Math.random() * 101);


const div = document.querySelector('.newButton')
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;


guessSubmit.addEventListener('click', checkGuess)

// Execute a function when the user releases a key on the keyboard
guessField.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        guessSubmit.click();
    }
});

function checkGuess() {

    let userGuess = Number(guessField.value);


    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lastResult.style.backgroundColor = 'orange';
        setGameOver();
    } else if (guessCount > 10) {
        reset()
    }
    else {
        lastResult.textContent = 'yow ansew is Wong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'BOOOOO....your guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'BOM-BOM-BOM...your guess was too high!';
        }
    }




    guessCount++;




    guessField.value = '';
    guessField.focus();








}


function setGameOver() {
    lowOrHi.textContent = "The number is: " + randomNumber;
    guessSubmit.innerHTML = 'Restart Game';
    guessSubmit.setAttribute('onclick', 'reset()');
    // guessSubmit.removeAttribute('click');








}

function reset() {
    guessCount = 0;
    guessField.value = '';
    guesses.textContent = ''
    lowOrHi.textContent = "";
    lastResult.textContent = "";
    lastResult.style.backgroundColor = '';
    guessSubmit.innerHTML = 'Submit guess';
    randomNumber = Math.floor(Math.random() * 101);
    guessSubmit.removeAttribute('onclick');
}