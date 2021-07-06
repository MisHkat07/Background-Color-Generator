var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var css = document.querySelector("h4");
var btn = document.querySelector("button");

function defaultColor() {
  css.textContent = "linear-gradient(to right, #5433FF, #20BDFF,  #A5FECB);";
}
function createGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " +
    color2.value + ", " + color3.value + ")";
  css.textContent = body.style.background + ";";
}
document.addEventListener("DOMContentLoaded", defaultColor);
color1.addEventListener("input", createGradient);
color2.addEventListener("input", createGradient);
color3.addEventListener("input", createGradient);

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function randomBackground() {
  body.style.background =
    "linear-gradient(to right, " + generateRandomColor() + ", " +
    generateRandomColor() + ", " + generateRandomColor() + ")";
  css.textContent = body.style.background + ";";
}
btn.addEventListener("click", randomBackground);
