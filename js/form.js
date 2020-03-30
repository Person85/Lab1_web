const elForm = document.getElementById('form');
const elText = document.getElementById('txt');
let elOutput = document.getElementById('output');

function form(event){
    let input = elText.value;
    let output;


    if (input < 1 || input > 10){
        elOutput.textContent = 'Vi kan inte behandla en grupp av den storleken';
    } else {
        elOutput.textContent = 'Tack';
    }

    event.preventDefault();
}

elForm.addEventListener('submit', form, false);