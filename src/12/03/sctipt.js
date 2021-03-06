function refreshTime() {
    var textClock = document.querySelector('.container .text-clock');

    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var time = h(hour) + ':' + h(minute) + ':' + h(second);
    textClock.innerHTML = time;


    function h(v) {
        return ('' + v).padStart(2, '0');
    }
}

refreshTime();
setInterval(refreshTime, 1000);

function setClockTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var hourPointer = document.querySelector('.clock .hour');
    var minutePointer = document.querySelector('.clock .minute');
    var secondPointer = document.querySelector('.clock .second');

    var hourDeg = hour * 30 - 90;
    var minuteDeg = minute * 6 - 90;
    var secondDeg = second * 6 - 90;

    hourPointer.style.transform = 'rotate(' + hourDeg + 'deg)';
    minutePointer.style.transform = 'rotate(' + minuteDeg + 'deg)';
    secondPointer.style.transform = 'rotate(' + secondDeg + 'deg)';
}
setClockTime();
setInterval(setClockTime, 1000);