/* declaring the funtions was the most easy part but that java scrpit just gets harder and harder and harder. i had to use chatgbt for help*/
const words = ["treasure", "pirate", "ship", "ocean", "parrot", "island", "captain"];
let selectedWord;
let guessedLetters;
let wrongGuesses;
const maxGuesses = 8;
/* this was easy no need for chatgbt for this one. i am using assiging a consant valaue to all the ids being used for the game*/
const wordElement = document.getElementById("word");
const messageElement = document.getElementById("message");
const lettersElement = document.getElementById("letters");
const pirateElement = document.getElementById("pirate");
const resetButton = document.getElementById("reset");
/* so when i did thsi myself on another device i really struglled i had to use abit of chatgbt and it just told me to fix the speeling of variabes and  displayLetter() and displayWord() at the end. whichi will expalain when i get there*/
function initializeGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    wrongGuesses = 0;
    pirateElement.style.left = "0";
    messageElement.textContent = "";
    displayWord();
    displayLetters();
}

/* This is chatgbt  i was talking about the function displayWord and displayLetters when i was coding this on another device that was not tracked on hacktime. i did not include this on my code orginal code but added it becuase it was better and made the code work :) */

function displayWord() {
    wordElement.textContent = selectedWord.split("").map(letter => guessedLetters.includes(letter) ? letter : "_").join(" ");
}

function displayLetters() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    lettersElement.innerHTML = alphabet.map(letter => `<button onclick="guess('${letter}')" aria-label="Guess letter ${letter}">${letter}</button>`).join(" ");
}

/* The logics of this funtion was easy to understand but the implementation i was stuck on. i did use chatgbt to help me show my code was wrong and some times it is just my speeling and missing stuff*/
/* I know the reason why sometimes the code does not work. it is because when i code on a different deivce to check if the code works  i will  copy and paste the working code and in the process missing some things when i place it in my pirate project code  :/ :( */
function guess(letter) {
    if (guessedLetters.includes(letter) || wrongGuesses >= maxGuesses) return;

    guessedLetters.push(letter);
    if (selectedWord.includes(letter)) {
        displayWord();
        if (!wordElement.textContent.includes("_")) {
            messageElement.textContent = "You win!";
            lettersElement.innerHTML = "";
        }
        /* i understood what this code does i coded some parts of it but my best companion(chatgbt) helped me on some missing code.*/
    } else {
        wrongGuesses++;
        pirateElement.style.left = `${wrongGuesses * 50}px`;
        messageElement.textContent = `Wrong guess! You have ${maxGuesses - wrongGuesses} tries left.`;
        if (wrongGuesses === maxGuesses) {
            messageElement.textContent = "The pirate jumped off the plank!";
            lettersElement.innerHTML = "";
            pirateElement.style.animation = "fall 2s forwards";
        }
    }

}
/* This is literally the same as the initializeGame funtion. it will just run after the game finishes*/
function resetGame() { 
    selectedWord = words[Math.floor(Math.random() * words.length)]; 
    guessedLetters = []; 
    wrongGuesses = 0; pirateElement.style.left = "0"; 
    pirateElement.style.animation = "";
    messageElement.innerHTML = "";
    displayLetters();
    displayWord();
}



resetButton.addEventListener("click",resetGame);

initializeGame();

/* This does work  work but without help my time on the java script of the game would of tripled without the help of ai*/
/* I made sure to learn each thing the mistakes i was going to do and in my next project i will decrease the amount of ai used.*/