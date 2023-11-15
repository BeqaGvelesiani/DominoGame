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

let OnHandDomino = [];

generate();

function generate() {
  rendertable();

  for (var i = 0; i < 28; i++) {
    setbuttons(i);
  }
}

function rendertable() {
  for (var i = 0; i < tableTiles.length; i++) {
    document.getElementById("logSection").innerHTML += `
      <div class="domino bordered" id="logDomino${i}" style="opacity: 1">
          <div class="part part-top" id="">
              ${number(tableTiles[i][0])}
          </div>
          <div class="part part-bottom" id="">
              ${number(tableTiles[i][1])}
          </div>
        </div>
      `;
  }
}

function setbuttons(i) {
  document.getElementById(`logDomino${i}`).addEventListener("click", () => {
    if (OnHandDomino.length < 7) {
      console.log(OnHandDomino);
      document.getElementById(`logDomino${i}`).style.opacity = "0.3";
      if ((tableTiles[i][2] === undefined) & (OnHandDomino.length < 8)) {
        tableTiles[i].push(0);
        document.getElementById(`logDomino${i}`).style.cursor = "default";
        OnHandDomino.push(tableTiles[i]);

        //console.log("i = " + i);
        let fr = OnHandDomino.length;
        //console.log(fr);

        document.getElementById(`OnHandDomino${fr}`).innerHTML = `
          <div class="bordered part part-top" id="">
              ${number(OnHandDomino[fr - 1][0])}
          </div>
          <div class="part part-bottom" id="">
              ${number(OnHandDomino[fr - 1][1])}
          </div>
      `;

        document.getElementById(`OnHandDomino${fr}`).style.opacity = "1";
      }
    }


    if (OnHandDomino.length == 7) {
      document.getElementById("start").style.display = "block";
      document.getElementById("start").addEventListener("click", () => {
        document.querySelector(".section2").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.querySelector("#rivalSection").style.opacity = "1";
      });
    }

   
      
    
  });
}
