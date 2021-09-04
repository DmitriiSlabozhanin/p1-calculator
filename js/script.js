/* eslint-disable object-shorthand */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable space-before-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable strict */
'use strict';

window.addEventListener('DOMContentLoaded', function(){

    // Timer
    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        let numberInterval = 0;

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000;

            let seconds = 0,
                minutes = 0,
                hours = 0;

            if (timeRemaining > 0) {
                seconds = Math.floor(timeRemaining % 60);
                minutes = Math.floor((timeRemaining / 60) % 60);
                hours = Math.floor(timeRemaining / 60 / 60);
            }
            return { timeRemaining, hours, minutes, seconds };
        }

        function beforeZero(symbol) {
            if (String(symbol).length === 1) {
                return '0' + symbol;
            } else {
                return String(symbol);
            }
        }

        function updateClock() {
        let timer = getTimeRemaining();
            timerHours.textContent = beforeZero(timer.hours);
            timerMinutes.textContent = beforeZero(timer.minutes);
            timerSeconds.textContent = beforeZero(timer.seconds);

            if (timer.timeRemaining < 0) {
                clearInterval(numberInterval);
            }
        }
        numberInterval = setInterval(updateClock, 1000);
    }
    countTimer('06 september 2021');
});



