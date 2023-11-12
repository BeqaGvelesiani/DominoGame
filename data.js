const top_part = document.getElementById("top")
const bottom_part = document.getElementById("bottom")

const zero = `
<span class="off"></span>
<span class="off"></span>
<span class="off"></span>
<span class="off"></span>
<span class="off"></span>
<span class="off"></span>
<span class="off"></span>
<span class="off"></span>
<span class="off"></span>
`

const one = `
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
const two = `
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
const three = `
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
const four = `
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
const six = `
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
    }else if (a==0){
        top_part.innerHTML = zero
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
    }else if (a==0){
        bottom_part.innerHTML = zero
    }else{
        bottom_part.innerHTML = six    
    }
}

export function top(a){
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
    }else if (a==0){
        top_part.innerHTML = zero
    }else{
        top_part.innerHTML = six    
    }
}

export function bottom(b){
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
    }else if (b==0){
        bottom_part.innerHTML = zero
    }else{
        bottom_part.innerHTML = six    
    }
}