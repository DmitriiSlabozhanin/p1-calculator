'use strict';

    import countTimer from './modules/countTimer';
    import toggleMenu from './modules/toggleMenu';
    import togglePopup from './modules/togglePopup';
    import tabs from './modules/tabs';
    import slider from './modules/slider';
    import dots from './modules/dots';
    import setImg from './modules/setImg';
    import calc from './modules/calc';
    import sendForm from './modules/sendForm';

    // Timer
    countTimer();

    // Menu
    toggleMenu();

    //popup
    togglePopup();

    // Табы
    tabs();

    //слайдер
    slider();

    // Точечки
    dots();

    // Наводка на фотки
    setImg();

    // калькулятор
    calc();

    // send-ajax-form
    sendForm();