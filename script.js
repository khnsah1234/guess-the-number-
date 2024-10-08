// Initialize variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Get references to DOM elements
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');

// Function to handle guess
function handleGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;
    
    if (userGuess === randomNumber) {
        messageElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        messageElement.style.color = 'green';
        resetGame();
    } else if (userGuess < randomNumber) {
        messageElement.textContent = 'Too low! Try again.';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Too high! Try again.';
        messageElement.style.color = 'red';
    }
    
    attemptsElement.textContent = `Attempts: ${attempts}`;
    guessInput.value = '';
}

// Function to reset the game
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
}

// Add event listener to the button
submitButton.addEventListener('click', handleGuess);

// Allow pressing Enter to submit guess
guessInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleGuess();
    }
});
