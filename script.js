


//set score for participants
let playerScore = 0;
let compScore = 0;

//global var to track round result
let roundResult;



//computer's moves
const compMoves = ["rock", "paper", "scissors"];

//get random computer move
function getCompHand() {
    random = Math.floor(Math.random() * compMoves.length);
    compHand = compMoves[random]; 
    return compHand;
    
}

var playerHand;

//get player move
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissBtn = document.getElementById('scissors')

rockBtn.addEventListener('click', () => {
    let move = rockBtn.textContent;
    playerHand = move.toLowerCase();
    console.log(playerHand);
});

paperBtn.addEventListener('click', () => {
    let move = paperBtn.textContent;
    playerHand = move.toLowerCase();
    console.log(playerHand);
});

scissBtn.addEventListener('click', () => {
    let move = scissBtn.textContent;
    playerHand = move.toLowerCase();
    console.log(playerHand);
});







/*function getPlayerHand() {
    var button = document.querySelectorAll('button');
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', () => {
        let move = button[i].textContent;
        playerHand = move.toLowerCase();
        return;       
    })};
    
}*/


//check if player wants to play again
function oneMoreTime() {
    let playAgain = prompt('Play again? (Y/n)')

    if (playAgain === 'Y') {
        playerScore = 0;
        compScore = 0;
        console.clear();
        game();
    } else if (playAgain === 'n') {
        alert('Bye!');
    } else {
        alert('Enter \'Y\' or \'n\'');
        oneMoreTime()
    }
}



//compare player's move to computer's
function compareHands() {
    getPlayerHand();
    getCompHand();

    if (playerHand == 'rock' || playerHand == 'paper' || playerHand == 'scissors') {
        if (playerHand == 'rock') {
            if (compHand == 'paper') {
                roundResult = 'Paper beats rock! You lose!';
                compScore++;
            } else if (compHand == 'scissors') {
                roundResult = 'Rock beats scissors! You win!';
                playerScore++;
            } else {
                roundResult = 'Rock vs rock ... DRAW!';
            }
        }

        if (playerHand == 'scissors') {
            if (compHand == 'rock') {
                roundResult =  'Rock beats scissors! You lose!';
                compScore++;
            } else if (compHand == 'paper') {
                roundResult = 'Scissors beat paper! You win';
                playerScore++;
            } else {
                roundResult = 'Scissors clash and ... it\'s a DRAW!';
            }
        }

        if (playerHand == 'paper') {
            if (compHand == 'scissors') {
                roundResult =  'Scissors beat paper! You lose';
                compScore++;
            } else if (compHand == 'rock') {
                roundResult =  'Paper beats rock! You win!';
                playerScore++;
            } else {
                roundResult = 'Paper flutters uselessly against paper. DRAAAAAAAW!!!!!';
            }
        } 
    } else {
        //alert('Please enter \'Rock\', \'Paper\' or \'Scissors\'!');
        compareHands();
    }
}

//game round logic
function game() {
    for (let i = 0; i < 5; i++) {
        compareHands();
        console.log(roundResult);
        console.log(`Your score: ${playerScore}. Computer's score: ${compScore}`);
    }

    if (playerScore > compScore) {
        console.log('YOU DEFEATED THE COMPUTER!');
    } else if (playerScore < compScore) {
        console.log('You were beaten by a machine, loser!')
    } else {
        console.log('FINAL RESULT: DRAW!');
    }

    oneMoreTime()
}

// initialise game
//game();
