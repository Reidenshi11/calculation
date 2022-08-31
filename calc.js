let a = '';
let b = '';
let symbol = '';
let areaWindow = '';

const out = document.getElementById('calcArea');
const buttonNumber = document.querySelector('.calc_block');
const numbers = ['1','2','3','4','5','6','7','8','9','0']; 
const sign = ['/','*','+','-'];
// out.textContent = areaWindow;
// out.textContent = a;



buttonNumber.onclick = function() {
    a = '';
    b = '';
    symbol = '';
    out.textContent = a;
    if (a == false) {
        out.textContent = 0;
    }
    // a + numbers[4];
    // alert('На меня нажали');
}


document.getElementById('zero').onclick = function() {
    // alert('На меня нажали');
    a = a + numbers[9];
    out.textContent = a;
    return
};

document.getElementById('one').onclick = function() {
    // alert('На меня нажали');
    a = a + numbers[0];
    out.textContent = a;
    return
};

document.getElementById('two').onclick = function() {
    // alert('На меня нажали');
    a = a + numbers[1];
    out.textContent = a;
    return
};

document.getElementById('three').onclick = function() {
    // alert('На меня нажали');
    a = a + numbers[2];
    out.textContent = a;
    return
};

document.getElementById('four').onclick = function() {
    // alert('На меня нажали');
    a = a + numbers[3];
    out.textContent = a;
    return
};

document.getElementById('five').onclick = function() {
    // alert('На меня нажали');
    a = a + numbers[4];
    out.textContent = a;
    return
};

document.getElementById('six').onclick = function() {
    // alert('На меня нажали');
    a = a + numbers[5];
    out.textContent = a;
    return
};

document.getElementById('seven').onclick = function() {
    // alert('На меня нажали');
    a = a + numbers[6];
    out.textContent = a;
    return
};

document.getElementById('eight').onclick = function() {
    // alert('На меня нажали');
    a = a + numbers[7];
    out.textContent = a;
    return
};

document.getElementById('nine').onclick = function() {
    // alert('На меня нажали');
    a = a + numbers[8];
    out.textContent = a;
    return
};



// out.textContent = a +numbers[6];
// alert(typeof(out));

// areaWindow = 5;
// document.querySelector('.calc_block').addEventListener('click', ()=>{
//     areaWindow = 5;
      
// });