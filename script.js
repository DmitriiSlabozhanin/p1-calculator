'use strict';

let buttonStart = document.getElementById('start');
console.log(buttonStart);

let buttonIncome = document.getElementsByTagName('button')[0];
console.log(buttonIncome);

let buttonExpenses = document.getElementsByTagName('button')[1];
console.log(buttonExpenses);

let checkDeposit = document.querySelector('#deposit-check');
console.log(checkDeposit);

let firstAdditionIncome = document.querySelectorAll('.additional_income-item') [0];
console.log(firstAdditionIncome);

let secondAdditionIncome = document.querySelectorAll('.additional_income-item') [1];
console.log(secondAdditionIncome);
     
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
console.log(budgetDayValue);

let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
console.log(expensesMonthValue);

let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
console.log(additionalIncomeValue);

let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
console.log(additionalExpensesValue);

let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
console.log(incomePeriodValue);

let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
console.log(targetMonthValue);

let salaryAmount = document.querySelector('.salary-amount');
console.log(salaryAmount);

let incomeAmount = document.querySelector('.income-amount');
console.log(incomeAmount);

let incomeTitle = document.querySelector('[class="income-title"]');
console.log(incomeTitle);

let expensesTitle = document.querySelector('[class="expenses-title"]');
console.log(expensesTitle);

let expensesAmount = document.querySelector('.expenses-amount');
console.log(expensesAmount);

let additionalExpensesItem = document.querySelector('.additional_expenses-item');
console.log(additionalExpensesItem);

let depositAmount = document.querySelector('.deposit-amount');
console.log(depositAmount);

let depositPercent = document.querySelector('.deposit-percent');
console.log(depositPercent);

let targetAmount = document.querySelector('.target-amount');
console.log(targetAmount);

let periodSelect = document.querySelector('.period-select');
console.log(periodSelect);

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function() {
    
        do {
            money = prompt('Ваш месячный доход?');
        }
        while (!isNumber(money));
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    itemIncome: '',
    asking: function() {

        if (confirm("Есть ли у вас источник дополнительного заработка?")) {

            do {
                appData.itemIncome = prompt("Какой у вас дополнительный заработок?" , "Катаю на лодке");
            }
            while (isNumber(appData.itemIncome));

            let cashIncome;

            do {
                cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?" , "10000");
            }
            while (!isNumber(cashIncome));

            appData.income[appData.itemIncome] = cashIncome;
        }

        let addExpenses;

        do {
            addExpenses = prompt ("Перечислите возможные расходы через запятую" , "кикбоксинг, бензикс, качалка");
        }
        while (isNumber(addExpenses));


        appData.addExpenses = addExpenses.split(', ').map(word => { 
            return ' ' + word[0].toUpperCase() + word.slice(1); 
        } );
        console.log (appData.addExpenses);
        // appData.addExpenses = addExpenses.toLowerCase().split(",");
        
        for (let i = 0; i < 2; i++) {
            let key;
            do {
                key = prompt("Введите обязательную статью расходов");
            }
            while (isNumber(key));

            let val = prompt('Во сколько это обойдется?');
            while (!isNumber(val)) {
            val = prompt('Во сколько это обойдется?');
            }
            this.expenses[key] = val;
        }
        console.log(appData.expenses);
    },
        
    getExpensesMonth: function() {
        for (let key in this.expenses) {
            console.log(this.expenses[key]);
            appData.expensesMonth += this.expenses[key]*1;
        }
        console.log("Расходы за месяц: " + appData.expensesMonth);
    },

    getBudget: function() {
    appData.budgetMonth = money - appData.expensesMonth*1;
    console.log("Бюджет на месяц: ", appData.budgetMonth);
    appData.budgetDay = Math.floor(appData.budgetMonth/30);
    console.log("Бюджет на день: " + appData.budgetDay);
    },

    getTargetMonth: function() {
        let resultTarget = Math.ceil(appData.mission / appData.budgetMonth);
        if (resultTarget > 0) {
            console.log("За " + resultTarget + " месяцев будет достигнута цель");
        } else if (resultTarget < 0) {
            console.log("Цель не будет достигнута");
        }
    },

    getStatusIncome: function() {
        if (appData.budgetDay >= 1200) {
            console.log ("У вас высокий уровень дохода");
        } else if (appData.budgetDay >= 600) {
            console.log ("У вас средний уровень дохода");
        } else if (appData.budgetDay >= 0) {
            console.log ("К сожалению у вас уровень дохода ниже среднего");
        } else if (appData.budgetDay < 0) {
            console.log ("К сожалению что то пошло не так");
        }
    },

    getInfoDeposit: function() {
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt("Какой годовой процент?" , "10");
            }
            while (!isNumber(appData.percentDeposit));

            do {
                appData.moneyDeposit = prompt("Какая сумма заложена?" , 10000);
            }
            while (!isNumber(appData.moneyDeposit));
        }
    },

    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();

appData.deposit = confirm ("Есть ли у вас депозит в банке?");

appData.getInfoDeposit();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log ("Наша программа включает в себя следующие данные:");
for (let key in appData) {
    console.log (key + ":" + appData[key]);
}


