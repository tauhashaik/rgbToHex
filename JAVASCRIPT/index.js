let RInput= document.getElementById('RInput');
let GInput = document.getElementById('GInput');
let BInput = document.getElementById('BInput');
let output1 = document.getElementById('output1');
let calcbtn = document.getElementById('calcbtn');

calcbtn.addEventListener('click', rgbconvert )

// conversion of values into hexidecimal.
function rgbconvert (){

    let r = parseInt(RInput.value);
    let g = parseInt(GInput.value);
    let b = parseInt(BInput.value);
    
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
        alert("Enter valid numbers");
        return;
    }
    
    // Making sure values remain within the range of 0 -255.
    r = Math.min(255, r)
    r = Math.max(0, r)
    
    g = Math.min(255, g)
    g = Math.max(0, g)
    
    b = Math.min(255, b)
    b = Math.max(0, b)
    
    // converting each variable into hexidecimal.
let hexR = r.toString(16);
let hexG = g.toString(16);
let hexB = b.toString(16);

// Creating length of Hexidecimal value to 2 characters and prepending "0" if values length is only 1 to make the length 2 characters long.
hexR = hexR.length === 1 ? "0" + hexR : hexR; 
hexG = hexG.length === 1 ? "0" + hexG : hexG; 
hexB= hexB.length === 1 ? "0" + hexB : hexB; 

// adding the hexidecimal values togther.
let hexCol = '#' + hexR + hexG + hexB;
    
    // displaying the result to designated input tag.
    output1.value = hexCol.toUpperCase();
}