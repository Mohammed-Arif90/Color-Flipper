let colors = ['green', 'blue', '#dd21c4', '#fc7932'];
let colorName = document.getElementById('background-color');
let button = document.getElementById('click-btn');
let randomColor = '';

button.addEventListener('click', function() {
  randomColor = getRandomNumber();
  document.body.style.backgroundColor = colors[randomColor];
  colorName.textContent = 'Background color: ' + colors[randomColor];
});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}