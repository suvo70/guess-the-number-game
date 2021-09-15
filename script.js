'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// const con = document.querySelector('.check');
// if (con) {
//   con.addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess);
//     document.querySelector('.message').textContent = '🎉 Correct Number!';
//   });
// }

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    //document.querySelector('.highscore').textContent = score;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > SecretNumber ? '📈 Too High !!!' : ' 📉 Too Low !!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      score--;
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High !!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     score--;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' 📉 Too Low !!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     score--;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  //   else if (guess > SecretNumber || guess < SecretNumber) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
