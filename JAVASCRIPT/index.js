let RInput= document.getElementById('RInput');
let GInput = document.getElementById('GInput');
let BInput = document.getElementById('BInput');
let output1 = document.getElementById('output1');
let calcbtn = document.getElementById('calcbtn');

calcbtn.addEventListener('click', rgbconvert )

// conversion of values into hexidecimal.
function rgbconvert (){

    // Making sure values remain within the range of 0 -255.
    let r = parseInt(RInput.value);
    let g = parseInt(GInput.value);
    let b = parseInt(BInput.value);

    if (isNaN(r) || isNaN(g) || isNaN(b)) {
        alert("Enter valid numbers");
        return;
    }


    r = Math.min(255, r)
    r = Math.max(0, r)
    
    g = Math.min(255, g)
    g = Math.max(0, g)
    
    b = Math.min(255, b)
    b = Math.max(0, b)
    
    // converting each variable into hexidecimal.
let hexR = r.toString(16).padStart(2, '0');
let hexG = g.toString(16).padStart(2, '0');
let hexB = b.toString(16).padStart(2, '0');

// adding the hexidecimal values togther.
let hexCol = '#' + hexR + hexG + hexB;
    
    // displaying the result to designated input tag.
    output1.value = hexCol.toUpperCase();
}