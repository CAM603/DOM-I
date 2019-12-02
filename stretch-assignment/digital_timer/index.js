let clock = document.querySelector('.digits');
let secondsOne = document.getElementById('secondOnes');
let secondsTen = document.getElementById('secondTens');
let msTen = document.getElementById('msTens');
let msHundred = document.getElementById('msHundreds');

let secondsOneCount = 0;
let secondsTenCount = 0;
let msTenCount = 0;
let msHundredCount = 0;

setInterval(function() {
    clock.style.background = clock.style.background === 'blue' ? 'red' : 'blue'
}, 2000);


function start() {
    let timer = setInterval(function() {
        msTenCount += 1;
        msTen.textContent = msTenCount;

        if (msTenCount === 10) {
            msTen.textContent = 0;
            msHundredCount += 1;
            msHundred.textContent = msHundredCount;
            msTenCount = 0;
        }

        if (msHundredCount === 10) {
            msHundred.textContent = 0;
            secondsOneCount += 1;
            secondsOne.textContent = secondsOneCount;
            msHundredCount = 0;
        }

        if (secondsOneCount === 10) {
            secondsOne.textContent = 0;
            secondsTenCount += 1;
            secondsTen.textContent = secondsTenCount;
            secondsOneCount = 0;
        }
        if (secondsTenCount === 1) {
            clearInterval(timer);
        }

    }, 10);
    
}
//start()
