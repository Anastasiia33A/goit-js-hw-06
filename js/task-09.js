function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body')
const buttonChange = document.querySelector('.change-color');
const table = document.querySelector('.color');

buttonChange.addEventListener('click', () => {

  const randomColor = getRandomHexColor();
  table.textContent = randomColor;
  body.style.backgroundColor = randomColor;
});