'use strict';
const daysLeft = document.getElementById('days');
const hoursLeft = document.getElementById('hours');
const minsLeft = document.getElementById('mins');
const secondsLeft = document.getElementById('seconds');
const newYears = '1 Jan 2022';


function countdown() {
    //新日期减去现在日期得到的是毫秒，除以1000得到的是秒，除以3600得到的是小时，%24 得到的是除以 24小时 剩下的小时，也就是天数以外还剩下多少小时。
    //math.floor  计算取整
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysLeft.innerText = formatTime(days);
    hoursLeft.innerText = formatTime(hours);
    minsLeft.innerText = formatTime(minutes);
    secondsLeft.innerText = formatTime(seconds);

   
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//initial call
countdown();

setInterval(countdown, 1000);