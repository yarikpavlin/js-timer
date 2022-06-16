const hInput = document.querySelector('#hours');
const mInput = document.querySelector('#minutes');
const sInput = document.querySelector('#seconds');

const hText = document.querySelector('#h-count');
const mText = document.querySelector('#m-count');
const sText = document.querySelector('#s-count');

const controllBtn = document.querySelector('.controll');

controllBtn.addEventListener('click', onButtonClick);
let timer;

function onButtonClick() {
    if(controllBtn.innerText === 'Start Timer') {
        timer = startTimer()
    } else {
        stopTimer(timer);
    }
}


function startTimer() {
    controllBtn.innerText = 'Pause Timer';
    const timer = setTimeout(() => {

    },)
}

function stopTimer(timerHandler) {
    controllBtn.innerText = 'Start Timer'
    //clearTimeout(timerHandler);
}

function calculateTimeoutTime() {
    const hours = hInput.value;
    const minutes = mInput.value;
    const seconds = sInput.value;

    
}