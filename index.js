import { domino } from "./data.js";
import { top } from "./data.js";
import { bottom } from "./data.js";

function random(a, b) {
  let i = b - a + 1;
  return Math.floor(Math.random() * i) + a;
}

domino(0, 0)

document.getElementById("generate").addEventListener("click", ()=>{
    let a = random(0, 6);
    let b = random(0, 6);
    domino(a, b)
})

