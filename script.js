'use strict';

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
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        let addExpenses = prompt ("Перечислите возможные расходы через запятую");
        appData.addExpenses = addExpenses.toLowerCase().split(",");
        appData.deposit = confirm ("Есть ли у вас депозит в банке?");
        
        for (let i = 0; i < 2; i++) {
            let key = prompt("Введите обязательную статью расходов?");
            let val = +prompt('Во сколько это обойдется?');
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
            appData.expensesMonth += this.expenses[key];
        }
        console.log("Расходы за месяц: " + appData.expensesMonth);
    },

    getBudget: function() {
    appData.budgetMonth = money - appData.expensesMonth;
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
    }

};       

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log ("Наша программа включает в себя следующие данные:");
for (let key in appData) {
    console.log (key + ":" + appData[key]);
}