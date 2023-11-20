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
    $("#logSection").append(`
      <div class="domino bordered" id="logDomino${i}" style="opacity: 1">
          <div class="part part-top" id="">
              ${number(tableTiles[i][0])}
          </div>
          <div class="part part-bottom" id="">
              ${number(tableTiles[i][1])}
          </div>
        </div>
      `);
  }
}

function setbuttons(i) {
  $(`#logDomino${i}`).click(() => {
    if (OnHandDomino.length < 7) {
      console.log(OnHandDomino);
      $(`#logDomino${i}`).css("opacity", "0.3");

      if ((tableTiles[i][2] === undefined) & (OnHandDomino.length < 8)) {
        tableTiles[i].push(0);
        $(`#logDomino${i}`).css("cursor", "default");

        OnHandDomino.push(tableTiles[i]);

        //console.log("i = " + i);
        let fr = OnHandDomino.length;
        //console.log(fr);

        $(`#OnHandDomino${fr}`).html(`
          <div class="bordered part part-top" id="">
              ${number(OnHandDomino[fr - 1][0])}
          </div>
          <div class="part part-bottom" id="">
              ${number(OnHandDomino[fr - 1][1])}
          </div>
      `);

        $(`#OnHandDomino${fr}`).css("opacity", "1");
      }
    }

    if (OnHandDomino.length == 7) {
      $("#start").show();
      $("#start").click(() => {
        $(".section2").hide();
        $("#start").hide();
        $("#rivalSection").css("opacity", "1");
      });
    }
  });
}

console.log($("#rivalSection"));
