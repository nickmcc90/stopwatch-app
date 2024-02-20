console.log(4); //test

document.querySelectorAll('.js-button').forEach((numberButton, index) => {
  numberButton.addEventListener('click', () => {
    populateTimer(index);
  })
})

const numberStore = [];
function populateTimer (index) {
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
  } else if(numberStore.length === 2) {

  } else {

  }



}