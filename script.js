var _ = require('lodash');

console.log(_);

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer:', _.without(array, 4, 5, 6));

var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.getElementById('generateRandomGradient');

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);
// body.style.background = 'red';

// set h3 text content
const setTextContent = () => {
  css.textContent = `${body.style.backgroundImage};`;
};

// set linear gradient of background
const setGradient = () => {
  body.style.backgroundImage = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  // also update the h3 text content
  setTextContent();
};

// input event
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

// get linear gradient
const getGradient = () => {
  var bodyCompStyles = window.getComputedStyle(body);
  css.textContent = `${bodyCompStyles.getPropertyValue('background-image')};`;
};

// load event
window.addEventListener('load', getGradient);

// generate random rgb
const generateRGB = () => {
  let r = Math.floor(Math.random() * 256); // 0 to 255
  let g = Math.floor(Math.random() * 256); // 0 to 255
  let b = Math.floor(Math.random() * 256); // 0 to 255
  return `rgb(${r},${g},${b})`;
};

// convert decimal to hex
const decimalToHex = decimal => {
  var hex = decimal.toString(16);
  return hex.length == 1 ? `0${hex}` : hex;
};

// convert rgb to hex
const rgbToHex = rgb => {
  var decimalArray = [];
  rgb.replace(/[\d+\.]+/g, num => decimalArray.push(parseFloat(num)));
  return `#${decimalArray
    .slice(0, 3)
    .map(decimalToHex)
    .join('')}`;
};

const generateRandomGradient = () => {
  var firstColorRGB = generateRGB();
  var secondColorRGB = generateRGB();
  body.style.backgroundImage = `linear-gradient(to right, ${firstColorRGB}, ${secondColorRGB})`;

  // set hex to color1 and color2
  color1.value = rgbToHex(firstColorRGB);
  color2.value = rgbToHex(secondColorRGB);

  // console.log(color1.value);
  // console.log(color2.value);

  // also update the h3 text content
  setTextContent();
};

// console.log(color1.value);
// console.log(color2.value);

// click event
button.addEventListener('click', generateRandomGradient);
