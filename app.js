const scores = [0, 0];
const roundScore = 0;
const activePlayer = 0;

//document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', btn = () => {
  // creates random number between 1 and 6
  const dice = Math.floor(Math.random() * 6) + 1;
  // displays result
  const diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'assets/dice-' + dice + '.png';
  //updates round score if the rolled number was not 1
});
