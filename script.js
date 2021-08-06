'use strict';

let isNumber = function(n) {
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

/*let question = prompt("Ваш месячный доход?");
money = parseInt(question);
console.log(typeof money);
console.log(money);*/

addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log(typeof addExpenses);
console.log(addExpenses);

deposit = confirm("Есть ли у вас депозит в банке?");
console.log(deposit);



/*let expenses1 = prompt("Введите обязательную статью расходов?");
console.log(expenses1);

let expenses2 = prompt("Введите обязательную статью расходов?");
console.log(expenses2);

let question3 = prompt("Во сколько это обойдется?");
let amount1 = parseInt(question3);
console.log(typeof amount1);
console.log(amount1);

let question4 = prompt("Во сколько это обойдется?");
let amount2 = parseInt(question4);
console.log(typeof amount2);
console.log(amount2);*/

//let budgetMonth = money - (amount1 + amount2);
//console.log(typeof budgetMonth);
//console.log("Бюджет на месяц: " + budgetMonth);

//let howMuchMonth = Math.ceil(mission / budgetMonth);
//console.log("Цель будет достигнута за " + howMuchMonth + " месяцев");

//budgetDay = Math.floor(budgetMonth/30);
//console.log("Бюджет на день: " + budgetDay);

let expenses1, expenses2;

let getExpensesMonth = function() {
    let sum = 0;

    for(let i = 0; i < 2; i++) {

        if (i === 0) {
            expenses1 = prompt("Введите обязательную статью расходов?"); 
        } else if (i === 1) {
            expenses2 = prompt("Введите обязательную статью расходов?");
        }

        sum += +prompt ("Во сколько это обойдется?");

        if ((typeof (sum)) !== 'number') {
            alert ("Переданное значение не является числом!")
        }

    }
    console.log(sum);
    return sum;
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

console.log(getStatusIncome());