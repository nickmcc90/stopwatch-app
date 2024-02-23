console.log(4); //test


let numberStore = [];
function populateTimer (index) {
  console.log(index);
  numberStore.push(index);

  const onesSecButtonElement = document.querySelector('.js-onessec');
  const tensSecButtonElement = document.querySelector('.js-tenssec');
  const onesMinButtonElement = document.querySelector('.js-onesmins');
  const tensMinButtonElement = document.querySelector('.js-tensmins');

  if(numberStore.length === 1) {
    onesSecButtonElement.innerHTML = index;
  } else if(numberStore.length === 2) {
    tensSecButtonElement.innerHTML = onesSecButtonElement.innerHTML;
    onesSecButtonElement.innerHTML = index;
  } else if(numberStore.length === 3) {
    onesMinButtonElement.innerHTML = tensSecButtonElement.innerHTML;
    tensSecButtonElement.innerHTML = onesSecButtonElement.innerHTML;
    onesSecButtonElement.innerHTML = index;
    
  } else if (numberStore.length === 4) {
    tensMinButtonElement.innerHTML = onesMinButtonElement.innerHTML;
    onesMinButtonElement.innerHTML = tensSecButtonElement.innerHTML;
    tensSecButtonElement.innerHTML = onesSecButtonElement.innerHTML;
    onesSecButtonElement.innerHTML = index;
  }

}

const timerTime = {
  ones: 0,
  twos: 0,
  threes: 0,
  fours: 0
};

function setTimer() {
  // This may look confusing, but this is taking the values that we get from the user inputting a timer (on the white popup) and
  // putting it into the main stopwatch numbers (on the main page).
  document.querySelector('.js-tens-minutes').innerHTML = document.querySelector('.js-tensmins').innerHTML;
  document.querySelector('.js-ones-minutes').innerHTML = document.querySelector('.js-onesmins').innerHTML;
  document.querySelector('.js-tens-seconds').innerHTML = document.querySelector('.js-tenssec').innerHTML;
  document.querySelector('.js-ones-seconds').innerHTML = document.querySelector('.js-onessec').innerHTML;

  timerTime.ones = document.querySelector('.js-ones-seconds').innerHTML;
  timerTime.twos = document.querySelector('.js-tens-seconds').innerHTML;
  timerTime.threes = document.querySelector('.js-ones-minutes').innerHTML;
  timerTime.fours = document.querySelector('.js-tens-minutes').innerHTML;


  // Then we exit out of the white popup.
  document.querySelector('.js-fixed-timer-select').innerHTML = '';
  
  const html = `
    <button class="start-timer-button">Start Timer</button>
  `;

  document.querySelector('.js-timer-spawn').innerHTML = html;

  document.querySelector('.start-timer-button').addEventListener('click', () => {
    timerFinallyStart();
  });

}

function clearTimer() {
  numberStore = [];
  document.querySelector('.js-tensmins').innerHTML = 0;
  document.querySelector('.js-onesmins').innerHTML = 0;
  document.querySelector('.js-tenssec').innerHTML = 0;
  document.querySelector('.js-onessec').innerHTML = 0;
}

let isButtonOn = false;
let timerId;
function timerFinallyStart() {
  correctTime2();
  if(!isButtonOn) {
    isButtonOn = true;
    timerId = setInterval(() => {
      timerAlgorithm();
    }, 1000)
  } else {
    isButtonOn = false;
    clearInterval(timerId);
  }

}


function correctTime2() {
  const startTimerButton = document.querySelector('.start-timer-button');
  if(startTimerButton.innerHTML === 'Start Timer') {
    startTimerButton.innerHTML = 'Stop Timer';
  } else {
    startTimerButton.innerHTML = 'Start Timer';
  }
}

function timerAlgorithm() {

  timerTime.ones--;
  if(timerTime.ones === -1) {
    timerTime.twos--;
    timerTime.ones = 9;
  }

  
  updateTimer();
  
}

function updateTimer() {
  document.querySelector('.js-ones-seconds').innerHTML = timerTime.ones;
  document.querySelector('.js-tens-seconds').innerHTML = timerTime.twos;
  document.querySelector('.js-ones-minutes').innerHTML = timerTime.threes;
  document.querySelector('.js-tens-minutes').innerHTML = timerTime.fours;
}