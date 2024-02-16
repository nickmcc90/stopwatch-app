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
      time += 1;
      updateTime();
    }, 1000);
  } else {
    isTimerOn = false;
    clearInterval(codeId);
  }

  localStorage.setItem('time',JSON.stringify(time));
}

function reset() {
  localStorage.removeItem('time');
  time = '00:00';
  updateTime();
  console.log(time);
}

function updateTime() {
  // time is going to be an object, made of 4 properties.
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