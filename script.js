'use strict';

console.log(document.querySelector('.message').textContent); // this will get p words wt ever in p tag
document.querySelector('.message').textContent = 'lets start the game'; // this will change to wt ever value we give

//eg  : <p>mahesh</p>
//just doucment.querSelector(".classname").textContent will get mahesh
//doucment.querSelector(".classname").textContent = 'ok boss'  this will change to ok boss assigning the value

// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 20;

// document.querySelector('.guess').value = 24;
// console.log(document.querySelector('.guess').value);

let score = 20;

//to print Random No
let screatenumber = Math.round(Math.random() * 20);
console.log(screatenumber);

//highscore
let highscore = 0;

//click on check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no Number
  if (!guess) {
    document.querySelector('.message').textContent = 'enter the valid number';
    console.log('enter the valid no');
  }
  //when palyer wins
  else if (guess === screatenumber) {
    document.querySelector('.message').textContent = `correct Answer`;
    document.querySelector('body').style.backgroundColor = '#4cbb17';
    document.querySelector('.number').style.fontFamily = 'monospace';
    document.querySelector('.number').textContent = `${screatenumber}`;

    // 🎉 Confetti trigger
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
    //highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is not equal
  else if (guess !== screatenumber) {
    if (score > 1) {
    }
    document.querySelector('.message').textContent =
      guess > screatenumber ? 'too high ' : 'too low';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'you lost a game';
    document.querySelector('.score').textContent = 0;
  }
});

//when Guess is Low
// else if (guess > screatenumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = `too high`;
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = `you lost a game`;
//   }
// }
// //when Guess is High
// else if (guess < screatenumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = `too low`;
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = `you lost a game`;
//   }
// }

//REstart THe Game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  screatenumber = Math.round(Math.random() * 20);

  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});
