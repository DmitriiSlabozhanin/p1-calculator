/* eslint-disable no-loop-func */
/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable arrow-parens */
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

    // Menu

    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            //closeBtn = document.querySelector('.close-btn'),
            //menuItems = menu.querySelectorAll('ul>li');

            handlerMenu = () => {
                let target = event.target;
                if (target.closest('.menu')) {
                    if (screen.width > 768) {
                        menu.classList.toggle('active-menu');
                    } else {
                        menu.style.transform = `translate(0)`;
                    }
                } else if (target !== menu && target.closest('[href^="#"]')) {
                    if (screen.width > 768) {
                        menu.classList.toggle('active-menu');
                    } else {
                        menu.style.transform = `translate(-100%)`;
                    }
                }
            };

        btnMenu.addEventListener('click', handlerMenu);
        menu.addEventListener('click', handlerMenu);

        // for (let i = 0; i < menuItems.length; i++) {
        //    menuItems[i].addEventListener('click', handlerMenu);
        //}

        //menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };

    toggleMenu();

    //popup

    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupWindow = document.querySelector('.popup-content'),
			popupCoord = {
				count: -450,
				speed: 100,
				startPos: -450,
				endPos: 0
			};

            const appearancePopup = () => {

                if (popupCoord.startPos > popupCoord.endPos ?
                popupCoord.count -= popupCoord.speed : popupCoord.count += popupCoord.speed) {
                    popupWindow.style.transform = `translateY(${popupCoord.count}px)`;
                }
                if (popupCoord.startPos > popupCoord.endPos ?
                    popupCoord.count > popupCoord.endPos :
                    popupCoord.count < popupCoord.endPos) {
                    requestAnimationFrame(appearancePopup);
                }
            };

            popupBtn.forEach((elem) => {
                elem.addEventListener('click', () => {
                    popup.style.display = 'block';
                    if (screen.width > 768) {
                        popupCoord.count = popupCoord.startPos;
                        requestAnimationFrame(appearancePopup);
                    }
                });
            });

            popup.addEventListener('click', (event) => {
                let target = event.target;

                if (target.classList.contains('popup-close')) {
                    popup.style.display = 'none';
                } else {
                    target = target.closest('.popup-content');
                    if (target === null) {
                        popup.style.display = 'none';
                    }
                }
            });
    };

    togglePopup();

    // Табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = document.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

            const toggleTabContent = (index) => {
                for (let i = 0; i < tabContent.length; i++) {
                    if (index === i) {
                        tab[i].classList.add('active');
                        tabContent[i].classList.remove('d-none');
                    } else {
                        tab[i].classList.remove('active');
                        tabContent[i].classList.add('d-none');
                    }
                }
            };

            tabHeader.addEventListener('click', (event) => {
                let target = event.target;
                    target = target.closest('.service-header-tab');

                if (target) {
                    tab.forEach((item, i) => {
                        if (item === target) {
                            toggleTabContent(i);
                        }
                    });
                }
            });
    };

    tabs();

});





