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

function setTimer() {
  // This may look confusing, but this is taking the values that we get from the user inputting a timer (on the white popup) and
  // putting it into the main stopwatch numbers (on the main page).
  document.querySelector('.js-tens-minutes').innerHTML = document.querySelector('.js-tensmins').innerHTML;
  document.querySelector('.js-ones-minutes').innerHTML = document.querySelector('.js-onesmins').innerHTML;
  document.querySelector('.js-tens-seconds').innerHTML = document.querySelector('.js-tenssec').innerHTML;
  document.querySelector('.js-ones-seconds').innerHTML = document.querySelector('.js-onessec').innerHTML;

  // Then we exit out of the white popup.
  document.querySelector('.js-fixed-timer-select').innerHTML = '';
}

function clearTimer() {
  numberStore = [];
  document.querySelector('.js-tensmins').innerHTML = 0;
  document.querySelector('.js-onesmins').innerHTML = 0;
  document.querySelector('.js-tenssec').innerHTML = 0;
  document.querySelector('.js-onessec').innerHTML = 0;
}

