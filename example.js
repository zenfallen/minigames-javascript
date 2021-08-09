//Challenge 1: Your age in days
function ageInDays() {
  var birthYear = prompt('What year were you born?');
  if (birthYear.length > 0 && birthYear <= 2021) {
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days of life.');
  
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flexbox-result').appendChild(h1);
  }
}

function reset() {
  document.getElementById('ageInDays').remove();
}
//Challenge 1: Your age in days

//Challenge 2: Image/GIF generator
function generateImg() {
  var img = document.createElement('img');
  var div = document.getElementById('flex-img-gen');

  img.src = 'img/tenor.gif';
  img.id = 'gif-img';
  img.width = 300;
  img.height = 150;
  div.appendChild(img);
}

function removeImg() {
  var img = document.getElementById('gif-img');
  var div = document.getElementById('flex-img-gen');

  div.removeChild(img);
}
//Challenge 2: Image/GIF generator

// Challenge 3: Rock, paper, scissors game
function esGame(yourChoice) {
  var humanChoice, botChoice;

  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToEsInt());
  console.log('Computer Choice' + ' ' + botChoice);
  result = decideWinner(humanChoice, botChoice);
  console.log(result);
  message = finalMessage(result);
  console.log(message);
  esFrontEnd(yourChoice.id, botChoice, message);
}

function randToEsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
  var esDataBase = {
    'rock': { 'rock': 0.5, 'scissors': 1, 'paper': 0 },
    'paper': { 'paper': 0.5, 'rock': 1, 'scissors': 0 },
    'scissors': { 'scissors': 0.5, 'paper': 1, 'rock': 0 }
  };
  var yourScore = esDataBase[yourChoice][computerChoice];
  var computerScore = esDataBase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore]) {
  if (yourScore == 0) {
    return { 'message': 'You Lost!', 'color': 'red' };
  } else if (yourScore == 0.5) {
    return { 'message': 'You Tied!', 'color': 'yellow' };
  } else {
    return { 'message': 'You Won!', 'color': 'green' };
  }
}

function tryAgain() {
  location.reload();
  return false;
}

function esFrontEnd(humanImgChoice, botImgChoice, finalMessage) {
  var imagesDataBase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');
  var resetButtonDiv = document.createElement('button');

  humanDiv.innerHTML = '<img src="' + imagesDataBase[humanImgChoice] + '" width=150 heigth=150>';
  botDiv.innerHTML = '<img src="' + imagesDataBase[botImgChoice] + '" width=150 heigth=150>';
  messageDiv.innerHTML = '<h1 style="color: ' + finalMessage['color'] + '">' + finalMessage['message'] + '</h1>';
  resetButtonDiv.innerHTML = '<button class="btn btn-warning" onclick="tryAgain()">Try Again!</button>';

  document.getElementById('body-box').appendChild(humanDiv);
  document.getElementById('body-box').appendChild(messageDiv);
  document.getElementById('body-box').appendChild(botDiv);
  document.getElementById('body-box').appendChild(resetButtonDiv);
}
// Challenge 3: Rock, paper, scissors game

// Challenge 4: Change the Color of All Buttons
var allButtons = document.querySelectorAll('#btn-game');
var copyAllButtons = [];

for (let i = 0; i < allButtons.length; i++) {
  copyAllButtons.push(allButtons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value == 'red') {
    buttonsRed();
  } else if (buttonThingy.value == 'blue') {
    buttonsBlue();
  } else if (buttonThingy.value == 'yellow') {
    buttonsYellow();
  } else if (buttonThingy.value == 'green') {
    buttonsGreen();
  } else if (buttonThingy.value == 'random') {
    buttonsRandom();
  } else if (buttonThingy.value == 'reset') {
    buttonsReset();
  }
}

function buttonsRed() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add('btn-danger');
  }
}

function buttonsBlue() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add('btn-primary');
  }
}

function buttonsYellow() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add('btn-warning');
  }
}

function buttonsGreen() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add('btn-success');
  }
}

function buttonsRandom() {
  let choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];

  for (let i = 0; i < allButtons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);

    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(choices[randomNumber]);
  }
}

function buttonsReset() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyAllButtons[i]);
  }
}
// Challenge 4: Change the Color of All Buttons

// Challenge 5: Blackjack
let blackjackGame = {
  'you': { 'scoreSpan': '#your-blackjack-result', 'div': '.your-box', 'score': 0 },
  'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '.dealer-box', 'score': 0 },
  'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q'],
  'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'A': [1, 11], 'J': 10, 'K': 10, 'Q': 10, },
  'wins': 0,
  'losses': 0,
  'draws': 0,
  'isStand': false,
  'turnsOver': false
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
  if (blackjackGame['isStand'] === false) {
    let card = randomCard();
    console.log(card);
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
    console.log(YOU['score']);
  }
}

function showCard(card, activePlayer) {
  if (activePlayer['score'] <= 21) {
    let cardImg = document.createElement('img');
    cardImg.src = 'img/' + card + '.png';
    cardImg.width = 70;
    cardImg.height = 100;

    document.querySelector(activePlayer['div']).appendChild(cardImg);
    hitSound.play();
  }
}

function blackjackDeal() {
  if (blackjackGame['turnsOver'] === true) {
    blackjackGame['isStand'] = false;
    // showResult(computeWinner());
    let yourImages = document.querySelector('.your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('.dealer-box').querySelectorAll('img');

    for (let i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();
    }

    for (let i = 0; i < dealerImages.length; i++) {
      dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;
    document.querySelector('#your-blackjack-result').style.color = '#fff';
    document.querySelector('#dealer-blackjack-result').style.color = '#fff';
    document.querySelector('#blackjack-result').textContent = "Let's Play";
    document.querySelector('#blackjack-result').style.color = '#000';

    blackjackGame['turnsOver'] = true;
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame['cards'][randomIndex];
}

function updateScore(card, activePlayer) {
  if (card === 'A') {
    // If adding 11 keeps me below 21, add 11, otherwise, add 1.
    if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
      activePlayer['score'] += blackjackGame['cardsMap'][card][1];
    } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    }
  } else {
    activePlayer['score'] += blackjackGame['cardsMap'][card];
  }
}

function showScore(activePlayer) {
  if (activePlayer['score'] > 21) {
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  } else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackjackGame['isStand'] = true;

  while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(700);
  }

  blackjackGame['turnsOver'] = true;
  let winner = computeWinner();
  showResult(winner);
}

function computeWinner() {
  let winner;
  if (YOU['score'] <= 21) {
    if (YOU['score'] > (DEALER['score']) || (DEALER['score'] > 21)) {
      blackjackGame['wins']++;
      winner = YOU;
    } else if (YOU['score'] < DEALER['score']) {
      blackjackGame['losses']++;
      winner = DEALER;
    } else if (YOU['score'] === DEALER['score']) {
      console.log('You Drew!');
      blackjackGame['draws']++;
    }
  } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
    blackjackGame['losses']++;
    winner = DEALER;
  } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
    console.log('You Drew!');
    blackjackGame['draws']++;
  }
  console.log(blackjackGame);
  return winner;
}

function showResult(winner) {
  let message, messageColor;
  if (winner === YOU) {
    message = 'You Won!';
    messageColor = 'green';
    document.querySelector('#wins').textContent = blackjackGame['wins'];
    winSound.play();
  } else if (winner === DEALER) {
    message = 'You Lost!';
    messageColor = 'red';
    document.querySelector('#losses').textContent = blackjackGame['losses'];
    lossSound.play();
  } else {
    message = 'You Drew';
    messageColor = 'orange';
    document.querySelector('#draws').textContent = blackjackGame['draws'];
  }
  document.querySelector('#blackjack-result').textContent = message;
  document.querySelector('#blackjack-result').style.color = messageColor;
}
// Challenge 5: Blackjack
