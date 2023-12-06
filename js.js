const colorInputs = document.querySelectorAll(".color");
const square = document.querySelector("#container");

const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
let timer;

function random() {
  return Math.floor(Math.random() * 256);
}

function startTimer() {
  if (flag == 0)
    timer = setInterval(changeColor, 1000);
}

let flag = 0;
let counter = 0;

function changeColor() {
  console.log(colorInputs);
  flag = 1;
  if (counter == colorInputs.length) {
    counter = 0;
  }

  square.style.backgroundColor = colorInputs[counter++].value;
}

function stopTimer() {
  clearInterval(timer);
  flag = 0;
}

const button = document.querySelector("#showTable");

const table = document.querySelector(".table");
const rowInput = document.querySelector("#row");
const columnInput = document.querySelector("#column");

button.addEventListener("click", showTable);

function showTable() {
  let numRows = parseInt(rowInput.value);
  let numColumns = parseInt(columnInput.value);
  let counter = 1;
  let output = "<table>";
  for (let i = 1; i <= numRows; i++) {
    output += "<tr>"
    for (let j = 1; j <= numColumns; j++) {
      output += `<td>${counter++}</td>`;
    }
    output += "</tr>"
  }
  output += "</table>";
  table.innerHTML = output;
}
