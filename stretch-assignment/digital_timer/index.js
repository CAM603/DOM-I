let clock = document.querySelector('.digits');

// Assign elements
let secondsOne = document.getElementById('secondOnes');
let secondsTen = document.getElementById('secondTens');
let msTen = document.getElementById('msTens');
let msHundred = document.getElementById('msHundreds');

// Assign starting values
let secondsOneNum = 0;
let secondsTenNum = 0;
let msTenNum = 0;
let msHundredNum = 0;

// Create function that changes text to red
let text = document.querySelectorAll('.digit');

let colorRed = function() {
    text.forEach(el => el.style.color = 'red')
}

// Create function that changes text to black
let colorBlack = function() {
    text.forEach(el => el.style.color = 'black')
}

// Create function to start timer
function start() {
    let timer = setInterval(function() {
        msTenNum += 1;
        msTen.textContent = msTenNum;

        if (msTenNum === 10) {
            msTen.textContent = 0;
            msHundredNum += 1;
            msHundred.textContent = msHundredNum;
            msTenNum = 0;
        }

        if (msHundredNum === 10) {
            msHundred.textContent = 0;
            secondsOneNum += 1;
            secondsOne.textContent = secondsOneNum;
            msHundredNum = 0;
        }

        if (secondsOneNum === 10) {
            secondsOne.textContent = 0;
            secondsTenNum += 1;
            secondsTen.textContent = secondsTenNum;
            secondsOneNum = 0;
        }
        if (secondsTenNum === 1) {
            clearInterval(timer);
            colorRed();
        }

    }, 10);
    
}
//start()

// Add a start button
let body = document.querySelector('body');

let buttonStart = document.createElement('button');
buttonStart.classList.add('start');
buttonStart.textContent = 'Start';

body.appendChild(buttonStart);
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center'

// Create click event on start button to start timer
buttonStart.addEventListener('click', () => {
    start();
}, {once : true});

// Add reset button
let buttonReset = document.createElement('button');
buttonReset.classList.add('reset');
buttonReset.textContent = 'Reset'
body.appendChild(buttonReset);

// Create click event to rest timer
buttonReset.addEventListener('click', () => {
    msTen.textContent = '-';
    msHundred.textContent = '-';
    secondsTen.textContent = '-';
    secondsOne.textContent = '-';
    secondsOneNum = 0;
    secondsTenNum = 0;
    msTenNum = 0;
    msHundredNum = 0;
    colorBlack();
    buttonStart.addEventListener('click', () => {
        start();
    }, {once : true});
});

// Add Style to timer
body.style.border = 'solid black 5px';
body.style.width = '50%';
body.style.borderRadius = '2rem';
body.style.background = 'gray';

let buttons = document.querySelectorAll('.start, .reset');
buttons.forEach(el => {
    el.style.width = '50%';
    el.style.padding = '10px';
    el.style.borderRadius = '2rem';
    el.style.margin = '5px';
    el.style.background = 'slateGray';
    el.style.border = 'black solid 2px';
    el.style.fontSize = '1.5rem';
    el.style.outline = 'none'
})

clock.style.width = '100%';
clock.style.display = 'flex';
clock.style.justifyContent = 'center';
clock.style.borderRadius = '1.5rem';

let doc = document.querySelector('html');
doc.style.display = 'flex';
doc.style.justifyContent = 'center';
doc.style.height = '100vh';
doc.style.alignItems = 'center';
doc.style.background = 'black';