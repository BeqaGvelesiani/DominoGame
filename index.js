import { domino } from "./data.js";
import { number } from "./data.js";

//domino(0, 0);

let dominos = [
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

let tableTiles = [...dominos];

console.log(tableTiles.length);

generate();

function generate(){
  rendertable();

  for (var i = 0; i < 28; i++) {
    setbuttons(i);
  }

  dominos = [];

  document.getElementById("generate").style.backgroundColor = "yellow";
  setTimeout(function () {
    document.getElementById("generate").style.backgroundColor = "brown";
  }, 50);
};

function rendertable() {
  for (var i = 0; i < dominos.length; i++) {
    document.getElementById("logSection").innerHTML += `
      <div class="domino" id="logDomino${i}" style="opacity: 1">
          <div class="part part-top" id="">
              ${number(dominos[i][0])}
          </div>
          <div class="part part-bottom" id="">
              ${number(dominos[i][1])}
          </div>
        </div>
      `;
  }
}

function setbuttons(i) {
  document.getElementById(`logDomino${i}`).addEventListener("click", () => {
    document.getElementById(`logDomino${i}`).style.opacity = "0.3";
    if (tableTiles[i][2] === undefined) {
      tableTiles[i].push(0);
      document.getElementById(`logDomino${i}`).style.cursor = "default"
    }
  });
}


