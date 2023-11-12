import { domino } from "./data.js"
import { top } from "./data.js"
import { bottom } from "./data.js"

domino(3, 3)

for(var i = 0; i<7; i++){
    document.querySelector(".topButtons").innerHTML += `
        <button id="topbtn${i}">top ${i}</button>
    `
}

for(var i = 0; i<7; i++){
    document.querySelector(".bottomButtons").innerHTML += `
        <button id="bottombtn${i}">bottom ${i}</button>
    `
}

document.getElementById(`topbtn0`).addEventListener("click", ()=>{
    top(0)
})

document.getElementById(`topbtn1`).addEventListener("click", ()=>{
    top(1)
})

document.getElementById(`topbtn2`).addEventListener("click", ()=>{
    top(2)
})

document.getElementById(`topbtn3`).addEventListener("click", ()=>{
    top(3)
})

document.getElementById(`topbtn4`).addEventListener("click", ()=>{
    top(4)
})

document.getElementById(`topbtn5`).addEventListener("click", ()=>{
    top(5)
})

document.getElementById(`topbtn6`).addEventListener("click", ()=>{
    top(6)
})

document.getElementById(`bottombtn0`).addEventListener("click", ()=>{
    bottom(0)})

document.getElementById(`bottombtn1`).addEventListener("click", ()=>{
    bottom(1)})

document.getElementById(`bottombtn2`).addEventListener("click", ()=>{
    bottom(2)})

document.getElementById(`bottombtn3`).addEventListener("click", ()=>{
    bottom(3)})

document.getElementById(`bottombtn4`).addEventListener("click", ()=>{
    bottom(4)})

document.getElementById(`bottombtn5`).addEventListener("click", ()=>{
    bottom(5)})

document.getElementById(`bottombtn6`).addEventListener("click", ()=>{
    bottom(6)})