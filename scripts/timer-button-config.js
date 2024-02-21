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

}

function clearTimer() {
  numberStore = [];
  tensMinButtonElement.innerHTML = 0;
  onesMinButtonElement.innerHTML = 0;
  tensSecButtonElement.innerHTML = 0;
  onesSecButtonElement.innerHTML = 0;
}