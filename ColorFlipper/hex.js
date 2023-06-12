const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const colorName = document.getElementById('background-color');
const button = document.getElementById('click-btn');
let hexColor = '';

button.addEventListener('click', function() {
  hexColor = '#';
  for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  colorName.textContent = 'Background color: ' + hexColor;
})

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}

console.log(getRandomNumber())