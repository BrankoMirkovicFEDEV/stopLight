const bojeInput = document.querySelectorAll(".boja");
const kvadrat = document.querySelector("#container");

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
start.addEventListener("click", pokreniTimer);
stop.addEventListener("click", zaustaviTimer);

let timer;
let fleg = 0;
let brojac = 0;

function slucajan() {
  return Math.floor(Math.random() * 256);
}

function pokreniTimer() {
  if (fleg === 0) timer = setInterval(promeniBoju, 1000);
}

function promeniBoju() {
  fleg = 1;
  if (brojac === bojeInput.length) {
    brojac = 0;
  }

  kvadrat.style.backgroundColor = bojeInput[brojac++].value;
}

function zaustaviTimer() {
  clearInterval(timer);
  fleg = 0;
}

const dugme = document.querySelector("#prikaziTabelu");
const tabela = document.querySelector(".tabela");
const red = document.querySelector("#red");
const kolona = document.querySelector("#kolona");

dugme.addEventListener("click", prikaziTabelu);

function prikaziTabelu() {
  let brojRedova = parseInt(red.value);
  let brojKolona = parseInt(kolona.value);
  let brojac = 1;
  let ispis = "<table>";
  for (let i = 1; i <= brojRedova; i++) {
    ispis += "<tr>";
    for (let j = 1; j <= brojKolona; j++) {
      ispis += `<td>${brojac++}</td>`;
    }
    ispis += "</tr>";
  }
  ispis += "</table>";
  tabela.innerHTML = ispis;
}
