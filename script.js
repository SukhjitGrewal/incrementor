// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;
// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var minus10Btn = document.getElementById("minus10");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");
var minus1Btn = document.getElementById("minus1");
var minus50Btn = document.getElementById("minus50");

var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");
// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
plus1Btn.addEventListener("click", add1);
minus10Btn.addEventListener("click", sub10);
plus10Btn.addEventListener("click", add10);
plus50Btn.addEventListener("click", add50);
minus1Btn.addEventListener("click", sub1);
minus50Btn.addEventListener("click", minus50);

function minus50() {
  counter -= 50;
  displayEl.innerHTML = counter;
}

function sub1() {
  counter -= 1;
  displayEl.innerHTML = counter;
}

function add50() {
  counter += 50;
  displayEl.innerHTML = counter;
}

function add10() {
  counter += 10;
  displayEl.innerHTML = counter;
}

function add1() {
  counter++;
  displayEl.innerHTML = counter;
}

function sub10() {
  counter -= 10;
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time,";
function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = ""; //clears the input

  story += newWord + " ";

  stringOutEl.innerHTML = story;
}
// 4. Math.random() is used to bring RNG (random number generator) to your applications.

var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand10utEl = document.getElementById("rand1-out");
var rand20utEl = document.getElementById("rand2-out");
var rand30utEl = document.getElementById("rand3-out");

rand1Btn.addEventListener("click", showRand1);

function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand10utEl.innerHTML = rand;
}

rand2Btn.addEventListener("click", showRand2);

function showRand2() {
  var rand = Math.random() * 100;
  rand = rand.toFixed(3);
  rand20utEl.innerHTML = rand;
}

rand3Btn.addEventListener("click", showRand3);

function showRand3() {
  var rand = Math.random() * (5 - -5) + -5;
  rand = rand.toFixed(3);
  rand30utEl.innerHTML = rand;
}

document.getElementById("rand4").addEventListener("click", showRand4);

function showRand4() {
  let max = parseInt(document.getElementById("rand-in1").value);
  let min = parseInt(document.getElementById("rand-in2").value);
  var rand = Math.random() * (max - min) + min;
  rand = rand.toFixed(3);
  document.getElementById("rand4-out").innerHTML = rand;
}
document
  .getElementById("random-size")
  .addEventListener("click", randomFontSize);

function randomFontSize() {
  let fontSize = Math.random() * (25 - 5) + 5;
  var fontString = `${fontSize}px`;
  document.body.style.fontSize = fontString;
}

document.getElementById("random-rgb").addEventListener("click", randomColor);

function randomColor() {
  let red = Math.random() * 256;
  let green = Math.random() * 256;
  let blue = Math.random() * 256;
  var rgbString = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("HTML").style.background = rgbString;
}

document.getElementById("reset").addEventListener("click", reset);

function reset() {
  counter = 0;
  displayEl.innerHTML = 0;
  stringOutEl.innerHTML = `Once upon a time,`;
  rand10utEl.innerHTML = `----------`;
  rand20utEl.innerHTML = `----------`;
  rand30utEl.innerHTML = `----------`;
  document.getElementById("rand4-out").innerHTML = `----------`;
  document.getElementById("rand-in1").value = ``;
  document.getElementById("rand-in2").value = ``;
  document.getElementById("HTML").style.background = `#9ae4c8`;
}
