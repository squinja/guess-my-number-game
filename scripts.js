'use strict';

let num = Math.trunc(Math.random() * 20) + 1;
let jScore = 0;
let jHighScore = 1000;

// function sortNums(a, b) {
//     return a > b ? 1 : b > a ? -1 : 0;
// }

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(num, guess);

    //If there is no guess
    if (!guess) {
        document.querySelector('.message').textContent = `🤷‍♀️No number entered.`;
    }

    //If guess is incorrect
    else if (guess !== num) {

        //If guess is too low
        if (guess < num) {
            document.querySelector('.message').textContent = `Wrong guess! Too low.`;
        }

        //If guess is too high
        else if (guess > num) {
            document.querySelector('.message').textContent = `Wrong guess! Too high.`;
        }

        
        jScore++;

        document.querySelector('.score').textContent = (jScore);
    }

    //If guess is correct
    else if (guess === num) {

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        
        document.querySelector('.number').textContent = num;

        document.querySelector('.message').textContent = "🎉Congrats! You guessed it! You beat your high score!";

        jHighScore = jScore > jHighScore ? jHighScore : jScore;

        document.querySelector('.highscore').textContent = (jHighScore);
        
        }

        

    }

);

document.querySelector('.again').addEventListener('click', function() {

    document.querySelector('body').style.backgroundColor = '#222';

    num = Math.trunc(Math.random() * 20) + 1;

    jScore = 0;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = ``;

    document.querySelector('.message').textContent = "Start guessing...";

    document.querySelector('.score').textContent = "0";

})

//Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted

//Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Restricted