'use strict';

/*let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let income = "25000";
let addExpenses = "Тренажерка, Бензикс, Сотовая связь";
let deposit = false;
let mission = 300000;
let period = 8;


let start = function() {
    
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
    };

start();

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let budgetDay = money / 30;

console.log(addExpenses.length);
console.log(addExpenses.toLowerCase());
console.log("тренажерка,бензикс,сотовая связь".split(","));
console.log("Цель заработать " + mission + " рублей");
console.log("Период равен " + period + " месяцев");
console.log(budgetDay);

addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log(typeof addExpenses);
console.log(addExpenses);

deposit = confirm("Есть ли у вас депозит в банке?");
console.log(deposit);

let expenses1, expenses2;
let sum;
let value = 0;

let getExpensesMonth = function() {

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            expenses1 = prompt("Введите обязательную статью расходов?"); 
        } else if (i === 1) {
            expenses2 = prompt("Введите обязательную статью расходов?");
        }
            sum = prompt('Во сколько это обойдется?');
    
        while (!isNumber(sum)) {
            sum = prompt('Во сколько это обойдется?');
        }
        value = sum*1 + value*1;

        if ((typeof (value)) !== 'number') {
            alert ("Переданное значение не является числом!");
        }
        
        console.log(value);
        }
        return value;
};

let expensesAmount = getExpensesMonth();
console.log("Общие затраты: ", expensesAmount);

let getAccumulatedMonth = function() {
    return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();
console.log("Доходы минус расходы: ", accumulatedMonth);

let getTargetMonth = function() {
    return Math.ceil(mission / accumulatedMonth);
};

let resultTarget = getTargetMonth();
if (resultTarget > 0) {
    console.log("За " + resultTarget + " месяцев будет достигнута цель");
} else if (resultTarget < 0) {
    console.log("Цель не будет достигнута");
}


budgetDay = Math.floor(accumulatedMonth/30);
console.log("Бюджет на день: " + budgetDay);

let getStatusIncome = function() {
if (budgetDay >= 1200) {
    return ("У вас высокий уровень дохода");
} else if (budgetDay >= 600) {
    return("У вас средний уровень дохода");
} else if (budgetDay >= 0) {
    return ("К сожалению у вас уровень дохода ниже среднего");
} else if (budgetDay < 0) {
    return ("К сожалению что то пошло не так");
}
};

console.log(getStatusIncome());*/

function func (hours, minutes) {
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      alert ("Заданы неверно часы или минуты");
      return null;
      }
      let hAngle = 2 * Math.PI * (hours % 12) / 12;
      let hMin = 2 * Math.PI * minutes / 60;
      hAngle = hAngle + (hMin/12);
      let angle = hAngle - hMin;
      if (angle < 0) {
          angle += 2 * Math.PI;
          } else if (angle > 2 * Math.PI) {
          angle -= 2 * Math.PI;
          }
      angle = angle * 180 / Math.PI;
      console.log(angle);
      return angle;
    }
    
    func(1.5, 0);
    