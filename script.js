let startTime, elapsedTime = 0, timerInterval;
const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');
    let formattedMS = ms.toString().padStart(2, '0');

    return `${formattedMM}:${formattedSS}.${formattedMS}`;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        display.innerHTML = timeToString(elapsedTime);
    }, 10);
    startStopBtn.innerHTML = 'Stop';
}

function stop() {
    clearInterval(timerInterval);
    startStopBtn.innerHTML = 'Start';
}

function reset() {
    clearInterval(timerInterval);
    display.innerHTML = '00:00:00.00';
    elapsedTime = 0;
    laps.innerHTML = '';
    startStopBtn.innerHTML = 'Start';
}

function lap() {
    const li = document.createElement('li');
    li.innerHTML = timeToString(elapsedTime);
    laps.appendChild(li);
}

startStopBtn.addEventListener('click', () => {
    if (startStopBtn.innerHTML === 'Start') {
        start();
    } else {
        stop();
    }
});

resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);
