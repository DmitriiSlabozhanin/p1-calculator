'use strict';

let money = 60000;
let income = "25000";
let addExpenses = "Тренажерка, Бензикс, Сотовая связь";
let deposit = false;
let mission = 300000;
let period = 8;
let budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(addExpenses.length);
console.log(addExpenses.toLowerCase());
console.log("тренажерка,бензикс,сотовая связь".split(","));
console.log(typeof deposit);
console.log("Цель заработать " + mission + " рублей");
console.log("Период равен " + period + " месяцев");
console.log(budgetDay);

let question = prompt("Ваш месячный доход?");
money = parseInt(question);
console.log(typeof money);
console.log(money);

let question2 = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
addExpenses = question2;
console.log(typeof addExpenses);
console.log(addExpenses);

let question5 = confirm("Есть ли у вас депозит в банке?");
deposit = question5;
console.log(typeof deposit);
console.log(deposit);

let expenses1 = prompt("Введите обязательную статью расходов?");
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
console.log(amount2);

let budgetMonth = money - (amount1 + amount2);
console.log(typeof budgetMonth);
console.log("Бюджет на месяц: " + budgetMonth);

let howMuchMonth = Math.ceil(mission / budgetMonth);
console.log("Цель будет достигнута за " + howMuchMonth + " месяцев");

budgetDay = Math.floor(budgetMonth/30);
console.log("Бюджет на день: " + budgetDay);

if (budgetDay >= 1200) {
    console.log("У вас высокий уровень дохода");
} else if (1200 > budgetDay >= 600) {
    console.log("У вас средний уровень дохода");
} else if (600 > budgetDay >= 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
} else if (budgetDay < 0) {
    console.log("К сожалению что то пошло не так");
}

