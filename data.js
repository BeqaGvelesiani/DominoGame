const top_part = document.getElementById("top")
const bottom_part = document.getElementById("bottom")

export const one = `
<span class="off"></span>
<span class="off"></span>
<span class="off"></span>
<span class="off"></span>
<span class="on"></span>
<span class="off"></span>
<span class="off"></span>
<span class="off"></span>
<span class="off"></span>
`
export const two = `
<span class="off"></span>
<span class="off"></span>
<span class="on"></span>
<span class="off"></span>
<span class="off"></span>
<span class="off"></span>
<span class="on"></span>
<span class="off"></span>
<span class="off"></span>
`
export const three = `
<span class="off"></span>
<span class="off"></span>
<span class="on"></span>
<span class="off"></span>
<span class="on"></span>
<span class="off"></span>
<span class="on"></span>
<span class="off"></span>
<span class="off"></span>
`
export const four = `
<span class="on"></span>
<span class="off"></span>
<span class="on"></span>
<span class="off"></span>
<span class="off"></span>
<span class="off"></span>
<span class="on"></span>
<span class="off"></span>
<span class="on"></span>
`
export 
const five = `
<span class="on"></span>
<span class="off"></span>
<span class="on"></span>
<span class="off"></span>
<span class="on"></span>
<span class="off"></span>
<span class="on"></span>
<span class="off"></span>
<span class="on"></span>
`
export const six = `
<span class="on"></span>
<span class="off"></span>
<span class="on"></span>
<span class="on"></span>
<span class="off"></span>
<span class="on"></span>
<span class="on"></span>
<span class="off"></span>
<span class="on"></span>
`

export function domino(a, b){
    if(a==1){
        top_part.innerHTML = one
    }else if (a==2){
        top_part.innerHTML = two
    }else if (a==3){
        top_part.innerHTML = three
    }else if (a==4){
            top_part.innerHTML = four
    }else if (a==5){
        top_part.innerHTML = five
    }else{
        top_part.innerHTML = six    
    }

    if(b==1){
        bottom_part.innerHTML = one
    }else if (b==2){
        bottom_part.innerHTML = two
    }else if (b==3){
        bottom_part.innerHTML = three
    }else if (b==4){
        bottom_part.innerHTML = four
    }else if (b==5){
        bottom_part.innerHTML = five
    }else{
        bottom_part.innerHTML = six    
    }
}