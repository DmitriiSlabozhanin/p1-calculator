/* eslint-disable max-len */
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

    //слайдер

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            //btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target){
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);
    };

    // Точечки

    const dots = () => {
        const portfolioItem = document.querySelectorAll('.portfolio-item'),
			portfolioDots = document.querySelector('.portfolio-dots');

		portfolioItem.forEach(() => {
			const dot = document.createElement('li');
			dot.classList.add('dot');
			portfolioDots.appendChild(dot);
        });
        portfolioDots.children[0].classList.add('dot-active');
    };

    // Наводка на фотки

    const setImg = () => {
		const allCommand = document.querySelector('#command .row');

		const changePhoto = () => {
			const target = event.target;

			if (target.classList.contains('command__photo')) {
				const lastSrc = target.src;

				target.src = target.dataset.img;
				target.dataset.img = lastSrc;
			}
		};

		allCommand.addEventListener('mouseover', changePhoto);
		allCommand.addEventListener('mouseout', changePhoto);
	};


    // Ввод только цифр

    const inputValidation = () => {

    const calcItems = document.querySelectorAll('.calc-item');
    const inputFields = document.querySelectorAll('input');

    calcItems.forEach(item => {
        if (!item.classList.contains('calc-type')) {
          item.addEventListener('input', event => {
            let target = event.target;
            event.target.value = target.value.replace(/[^\d]/g, '');
          });
        }
    });
    //const checkCalc = () => {
    //    calcItem.addEventListener('input', (event) => {
     //       if (event.target.type !== 'number') {
     //           event.target.value = event.target.value.replace(/\D/g, '');
    //        }
     //   });
    //};

    //checkCalc();

    const validateBlur = (elem) => {

        let value = elem.value;
        console.log('value: ', value);
        console.log('elem: ', elem);

        if (elem.name === 'user_message') {
            value = value.replace(/((^[\s-]+))|((?<=\s)\s+)|((?<=-)-+)|([\s-]+$)/g, '');
            elem.value = value;
        } else if (elem.name === 'user_name') {
            let words = value.match(/[а-я]+/ig);
            words = words.map(item => (item.substring(0, 1).toUpperCase() + item.substring(1).toLowerCase()));
            value = words.join(' ');
            elem.value = value;
        } else if (elem.name === 'user_email') {
            value = value.replace(/(?<=@)@+/g, '');
            elem.value = value;
        } else if (elem.name === 'user_phone') {
            value = value.replace(/((?<=\()\({1,})|((?<=\))\){1,})|((?<=-)-{1,})|((?<=\+)\+{1,})/g, '');
            elem.value = value;
        } else {
            console.log('other input');
        }
    };

    // Ввод Ваше имя, Ваше сообщение, e-mail
    inputFields.forEach(elem => {
        elem.addEventListener('input', (event) => {
            const target = event.target;
            let value = target.value;
            if (elem.name === 'user_name' || elem.name === 'user_message') {
                target.value = target.value.replace(/[^а-яё\s-]/ig, '');
            } else if (elem.name === 'user_email') {
                const regexpEmail = /([^a-z@_\-.!~*'])|((?<=^)@+)|((?<=@.*)@+)/ig;
                target.value = value.replace(regexpEmail, '');
            } else if (elem.name === 'user_phone') {
                const regexpTelNumber = /([^\d()\-+])|((?<=.{35,}).)|((?<!^)\++)|((?<=^)-)|((?<=[+-])-+)|((?<=\([\d\-)(]*)\(+)|((?<=\()\)+)|((?<=\)[\d\-)(]*)\)+)|((?<=-)-+)/ig;
                target.value = value.replace(regexpTelNumber, '');
            }
        });

        elem.addEventListener('blur', (event) => {
          const target = event.target;
          console.log('blur at:', target);
          validateBlur(target);
        });
    });

    };


    dots();
    setImg();
    inputValidation();
    slider();

    // калькулятор

    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

            const countSum = () => {
                function getSelectedText() {
                    let calcType = document.querySelector('.calc-type');
                    if (calcType.selectedIndex === -1) {
                        return calcType.options.text;
                    }
                    return calcType.options[calcType.selectedIndex].value;
                }
                let typeValue = getSelectedText('.calc-type');

                //let typeValue = calcType.options[calcType.selectedIndex].value;
                let squareValue = +calcSquare.value;

                let total = 0,
                    countValue = 1,
                    dayValue = 1;

                    console.log(typeValue);

                    if (calcCount.value > 1) {
                        countValue += (calcCount.value - 1) / 10;
                    }

                    if (calcDay.value && calcDay.value < 5) {
                        dayValue *= 2;
                    } else if (calcDay.value && calcDay.value < 10) {
                        dayValue *= 1.5;
                    }

                    if (typeValue && squareValue) {
                        total = parseInt(price * typeValue * squareValue * countValue * dayValue * 100) / 100;
                    }
                totalValue.textContent = total;
            };

            calcBlock.addEventListener('change', (event) => {
                const target = event.target;
                //if (target.matches('.calc-type') || target.matches('.calc-square') ||
                //target.matches('.calc-day') || target.matches('.calc-count')) {
                //    console.log(1);
                //}

                //if (target === calcType || target === calcSquare ||
                //    target === calcDay || target === calcCount) {
                //        console.log(1);
                //    }

                if (target.matches('select') || target.matches('input')) {
                    countSum();
                }
            });
    };

    calc(100);



// send-ajax-form

    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо, мы скоро с вами свяжемся';

        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    outputData();
                } else {
                    errorData(request.status);
                }
            });
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));
        };
        const clearInput = (idForm) => {
                const form = document.getElementById(idForm);
                [...form.elements]
                    .filter(item =>
                        item.tagName.toLowerCase() !== 'button' &&
                        item.type !== 'button')
                    .forEach(item =>
                        item.value = '');
        };
    
        const isValid = (event) => {
            const target = event.target;
                if (target.matches('.form-phone')) {
                    target.value = target.value.replace(/[^+\d]/g, '');
            }
                if (target.name === 'user_name') {
                    target.value = target.value.replace(/[^а-яё ]/gi, '');
            }
                if (target.matches('.mess')) {
                target.value = target.value.replace(/[^а-яё ,.]/gi, '');
            }
        };

        const takeForm = (idForm) => {
            const form = document.getElementById(idForm);
            const statusMessage = document.createElement('div');

            statusMessage.style.cssText = 'font-size: 2rem;';

            form.addEventListener('submit', event => {
                const formData = new FormData(form);
                let body = {};

                statusMessage.textContent = loadMessage;
			    event.preventDefault();
			    form.appendChild(statusMessage);

                //for (let val  of formData.entries()){
                //    body[val[0]] = val[1];
                //}

                formData.forEach((val, key) => {
                    body[key] = val;
                });

                postData(body, () => {
                    statusMessage.textContent = successMessage;
                    clearInput(idForm);
                }, error => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                }); 
            });

        form.addEventListener('input', isValid); 
        };

    takeForm('form1');
    takeForm('form2');
    takeForm('form3');
    };

    sendForm();
        
});
