const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');

const stopWatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

const colorBtn = document.querySelector('.fa-palette');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
let root = document.documentElement;


let $countTime;
let $minutes = 0;
let $seconds = 0;

let $timesArray = [];

const clear = () => {
    clearInterval($countTime);
    stopWatch.textContent = `0:00`;
    timeList.textContent = '';
    $seconds = 0;
    $minutes = 0;
}

const startStoper = () => {

    clearInterval($countTime);

    $countTime = setInterval( () => {
        
        if($seconds < 9) {
            $seconds++;
            stopWatch.textContent = `${$minutes}:0${$seconds}`;
        } else if ($seconds >= 9 && $seconds < 59){
            $seconds++;
            stopWatch.textContent = `${$minutes}:${$seconds}`;
        } else {
            $minutes++;
            $seconds = 0;
            stopWatch.textContent = `${$minutes}:00`;
        }
    }, 1000);
}

const pauseStoper = () => {
    clearInterval($countTime);
}

const stopStoper = () => {
    
    time.innerHTML = `Ostatni czas wynosi: ${stopWatch.textContent}`;

    if(stopWatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        $timesArray.push(stopWatch.textContent);
    }
    
    clear();
}

const resetStoper = () => {
    
    time.style.visibility = 'hidden';
    $timesArray = [];
    clear();
}

const showHistory = () => {
    
    let number = 1;
    timeList.textContent = '';

    $timesArray.forEach(time => {
        let liItem = document.createElement('li');
        liItem.innerHTML = `Pomiar nr  ${number}: <span>${time}</span>`;
        timeList.appendChild(liItem);
        number++;
    });
}

const showInfo = () => {
    if(!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block';
    } else {
        modalShadow.style.display = 'none';
    }

    modalShadow.classList.toggle('modal-animation');
}


startBtn.addEventListener('click', startStoper);
pauseBtn.addEventListener('click', pauseStoper);
stopBtn.addEventListener('click', stopStoper);
resetBtn.addEventListener('click', resetStoper);
historyBtn.addEventListener('click', showHistory);

infoBtn.addEventListener('click', showInfo);
closeModalBtn.addEventListener('click', showInfo);
window.addEventListener('click', e => e.target === modalShadow ? showInfo() : false 
);

colorBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors');
});

colorOne.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#0726b1');
    root.style.setProperty('--hover-color', 'rgb(18, 16, 121)');

});

colorTwo.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
    root.style.setProperty('--hover-color', 'rgb(209, 33, 24)');
});

colorThree.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(33, 192, 60)');
    root.style.setProperty('--hover-color', 'rgb(24, 167, 48)');
});