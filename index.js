// let btn = document.querySelector('BUTTON');

// btn.addEventListener('click', (e)=> {
//     let x = document.querySelector('INPUT').value;
//     document.querySelector('.container').innerHTML = `${x}`;
// });

let fm = document.querySelector('FORM');

fm.addEventListener('submit', (e)=> {

    // /= 2 divides; * .2 cuts out percentages
    let x = document.querySelector('INPUT').value * .3;
    document.querySelector('.container').innerHTML = `${x}`;
});

// take a number, input to a function, display