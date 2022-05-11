const popup = document.querySelector('.popup');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', (event) => {
  popup.classList.add('submitted');
});