console.log(4); // test

let time = JSON.parse(localStorage.getItem('time')) || {
  onesSeconds: 0,
  tensSeconds: 0,
  onesMinutes: 0,
  tensMinutes: 0

};

updateTime();

document.querySelector('.js-stop-start-button').addEventListener('click', () => {
  stopwatch();
})

document.querySelector('.js-reset-button').addEventListener('click', () => {
  reset();
})

document.querySelector('.js-timer-button').addEventListener('click', () => {
  timerScreenSelect();
})

function correctTime() {
  const sButtonElement = document.querySelector('.js-stop-start-button');
  if(sButtonElement.innerHTML === 'Start') {
    document.querySelector('.js-stop-start-button').innerHTML = 'Stop';
  } else {
    document.querySelector('.js-stop-start-button').innerHTML = 'Start';
  }
}

let isTimerOn = false;
let codeId;
function stopwatch() {
  correctTime();
  if(!isTimerOn) {
    isTimerOn = true;
    codeId = setInterval(() => {
      stopwatchAlgorithm();
    }, 1000);
  } else {
    isTimerOn = false;
    clearInterval(codeId);
  }

  localStorage.setItem('time',JSON.stringify(time));
}

function stopwatchAlgorithm() {
  time.onesSeconds += 1;
  if(time.onesSeconds === 10) {
    time.onesSeconds = 0;
    time.tensSeconds += 1;
  }
  if(time.tensSeconds === 6) {
    time.tensSeconds = 0;
    time.onesMinutes = 1;
  }
  if(time.onesMinutes === 10) {
    time.onesMinutes = 0;
    time.tensMinutes = 1;
  }
  if(time.tensMinutes === 6) {
    reset();
  }
  updateTime();
}

function reset() {
  if(document.querySelector('.js-stop-start-button').innerHTML = 'Stop') {    // If we hit reset while the timer is still going...
    isTimerOn = true;                                                         // we can switch the start text back and stop the counting.
    stopwatch();
    isTimerOn = false;
  }
  time = {
    onesSeconds: 0,
    tensSeconds: 0,
    onesMinutes: 0,
    tensMinutes: 0
  };
  localStorage.removeItem('time');        // this needs to be the last line.
  updateTime();
  console.log(time);    // debugger
}

function timerScreenSelect() {
  const selectScreenElement = document.querySelector('.js-fixed-timer-select');
  let htmlSelectScreen = `
  <div class='darkened-screen'>
    <div class='item-screen'>
      <div class='prompt'>Select timer amount (under one hour, this is a beta)</div>
      <div></div>
    </div>
  </div>
  `;

  selectScreenElement.innerHTML = htmlSelectScreen;
  }

function updateTime() {
  // time is going to be an object, made of 4 properties.
  document.querySelector('.js-tens-minutes').innerHTML = time.tensMinutes;
  document.querySelector('.js-ones-minutes').innerHTML = time.onesMinutes;
  document.querySelector('.js-tens-seconds').innerHTML = time.tensSeconds;
  document.querySelector('.js-ones-seconds').innerHTML = time.onesSeconds;
}

/* secret layout change code prep...

    <div ***stuff to put inside container secrets...>
      <div class="secret-layout-change">pssst....</div>
      <div class="secret-question">Wanna do a layout change?</div>
      <button class="button-answer-yes">Woah... sure!</button>
      <button class="button-answer-no">Um... nah.</button>
    </div>

    Then activate classes with .addclasslist or whatever its called and activate opacity transitions one by one.
    Maybe use setTimeout() to run classlist adding to add a class to each prompt, then we can keep the same
    transition timing on all the prompt. We would just need to space out the setTimeouts from running by
    a second.

    In order to uncover the secret layout text, we could hover over a secret html element on screen with a hint somewhere. Or,
    we can have a riddle on screen to solve, and the answer would be a time to put in the timer! Or maybe the answer could be
    3 different times to put in the timer in exact order, then the text will show up!

*/