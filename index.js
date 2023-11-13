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


console.log(dominos.length);

let log = [];

document.getElementById("generate").addEventListener("click", () => {
  let a = random(0, 6);
  let b = random(0, 6);
  domino(a, b);
  log.push([a, b]);
  console.log(log);
  renderLog(log);
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



  // document.getElementById("logSection").innerHTML = ""
  //   for (var i = 0; i < arr.length; i++) {
  //     document.getElementById("logSection").innerHTML += `
  //     <div class="domino" id="logDomino">
  //         <div class="part part-top" id="">
  //             ${number(arr[i][0])}
  //         </div>
  //         <div class="part part-bottom" id="">
  //             ${number(arr[i][1])}
  //         </div>
  //       </div>
  //     `;
  //   }
}
