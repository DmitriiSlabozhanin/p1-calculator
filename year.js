'use strict';

const date = new Date(),
    days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ],
    hours = date.getHours(),
    day = days[date.getDay()],
    time = date.toLocaleTimeString('en'),
    newDate = new Date(new Date().getFullYear() + 1, 0, 1);

console.log(Math.ceil((newDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24));

const haloo = document.createElement('div'),
    dayOfWeek = document.createElement('div'),
    currentTime = document.createElement('div'),
    newYear = document.createElement('div');

const changeEnding = (num) => {
    const textVariant = [' день', ' дня', ' дней'];
    const n1 = num % 100,
        n2 = num % 10;
    return n1 > 4 && n1 < 21 ? num + textVariant[2] :
        n2 === 1 ? num + textVariant[0] :
        n2 > 1 && n2 < 5 ? num + textVariant[1] :
        num + textVariant[2];
};

haloo.textContent = hours < 5 || hours > 23 ? 'Доброй ночи' :
    hours < 11 ? 'Доброе утро' :
    hours < 17 ? 'Добрый день' :
    'Добрый вечер';
dayOfWeek.textContent = 'Сегодня: ' + day;
currentTime.textContent = 'Текущее время: ' + time;
newYear.textContent = 'До нового года осталось ' + 
    changeEnding(Math.ceil((newDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24));

document.body.append(haloo, dayOfWeek, currentTime, newYear);