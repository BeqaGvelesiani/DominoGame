import { domino } from "./data.js";
import { number } from "./data.js";

function random(a, b) {
  let i = b - a + 1;
  return Math.floor(Math.random() * i) + a;
}

domino(0, 0);

const dominos = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [2, 2],
  [2, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [3, 3],
  [3, 4],
  [3, 5],
  [3, 6],
  [4, 4],
  [4, 5],
  [4, 6],
  [5, 5],
  [5, 6],
  [6, 6],
];

let log = [];

document.getElementById("generate").addEventListener("click", () => {
  let L = random(0, dominos.length - 1);

  console.log(`L = ${L}`);

  let current_tile = dominos[L];

  console.log(current_tile);

  let index = random(0, 1);

  let a = current_tile[index];

  let b;

  if (index) {
    b = current_tile[0];
  } else {
    b = current_tile[1];
  }

  console.log(`a=${a}     b=${b}   index=${index}`);

  domino(a, b);
  log.push([a, b]);
  renderLog(log);

  dominos.splice(L, 1);

  console.log(dominos.length);

  document.getElementById("generate").style.backgroundColor =
    "rgb(21, 213, 21)";

  setTimeout(function () {
    document.getElementById("generate").style.backgroundColor = "brown";
  }, 100);
});

function renderLog(arr) {
  document.getElementById("logSection").innerHTML += `
      <div class="domino" id="logDomino">
          <div class="part part-top" id="">
              ${number(arr[arr.length - 1][0])}
          </div>
          <div class="part part-bottom" id="">
              ${number(arr[arr.length - 1][1])}
          </div>
        </div>
      `;
}
