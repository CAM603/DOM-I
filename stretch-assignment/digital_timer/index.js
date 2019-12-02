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

// Fun style here
setInterval(function() {
    clock.style.background = clock.style.background === 'blue' ? 'lightGreen' : 'blue'
}, 2000);

// Create function that changes text to red
let text = document.querySelectorAll('.digit');

let colorRed = function() {
    text.forEach(el => el.style.color = 'red')
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

// Create click event on start button to start timer
buttonStart.addEventListener('click', () => {
    start();
}, {once : true});