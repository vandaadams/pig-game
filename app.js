let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', btn = () => {
  // creates random number between 1 and 6
  let dice = Math.floor(Math.random() * 6) + 1;
  // displays result
  const diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'assets/dice-' + dice + '.png';
  // updates round score if the rolled number was not 1
  if (dice !== 1) {
    // add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    // next player
    nextPlayer();
  }
});

document.querySelector('.btn-hold').addEventListener('click', btn = () => {
  // add current score to global score
  scores[activePlayer] += roundScore;
  // update global scores on panels
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  // check if player won
  if (scores[activePlayer] >= 20) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
  } else {
    // next player
    nextPlayer();
  }
});

const nextPlayer = () => {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}
