'use strict';

let start = document.getElementById('start'),
cancel = document.getElementById('cancel'),
incomePlus = document.getElementsByTagName('button')[0],
expensesPlus = document.getElementsByTagName('button')[1],
checkDeposit = document.querySelector('#deposit-check'),
additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
targetMonthValue = document.getElementsByClassName('target_month-value')[0],
salaryAmount = document.querySelector('.salary-amount'),
incomeTitle = document.querySelector('[class="income-title"]'),
expensesTitle = document.querySelector('[class="expenses-title"]'),
expensesItems = document.querySelectorAll('.expenses-items'),
additionalExpensesItem = document.querySelector('.additional_expenses-item'),
depositBank = document.querySelector('.deposit-bank'),
depositAmount = document.querySelector('.deposit-amount'),
depositPercent = document.querySelector('.deposit-percent'),
targetAmount = document.querySelector('.target-amount'),
periodSelect = document.querySelector('.period-select'),
periodAmount = document.querySelector('.period-amount'),
incomeItems = document.querySelectorAll('.income-items');

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let appData = {
    
    income: {},
    addIncome: [],
    incomeMonth: 0,
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    period: 3,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    itemIncome: '',

    start: function() {

        [...document.querySelectorAll('.data input')].map(item => item.disabled = true);
        periodSelect.disabled = false;

        [...document.querySelectorAll('.data button')].map(item => item.disabled = true);

        this.budget = +salaryAmount.value;

        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.calcSavedMoney();

        this.showResult();
            
        start.style.display = 'none';
        cancel.style.display = 'block';

        cancel.addEventListener('click', appData.reset);
    },

    reset: function() {
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.expensesMonth = 0;
        this.addExpenses = [];
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;

        const actualExpenses = [...document.querySelectorAll('.expenses-items')];
        actualExpenses.filter(item => item !== actualExpenses[0]).forEach(item => item.remove());

        const actualIncomes = [...document.querySelectorAll('.income-items')];
        actualIncomes.filter(item => item !== actualIncomes[0]).forEach(item => item.remove());

        [...document.querySelectorAll('input')].map(item => item.value = '');
        [...document.querySelectorAll('.data input')].map(item => item.disabled = false);
        [...document.querySelectorAll('.data button')].map(item => item.disabled = false);

        periodSelect.value = '1';
        periodAmount.textContent = '1';

        cancel.style.display = 'none';
        start.style.display = 'block';
        start.disabled = true;

        checkDeposit.checked = false;

        depositBank.style.display = 'none';
        depositBank.value = 0;

        depositAmount.style.display = 'none';
        depositAmount.value = '';

        depositPercent.style.display = 'none';
        depositPercent.value = '';
    },

    showResult: function() {
       
        periodSelect.addEventListener('input', () => {
            periodAmount.textContent = periodSelect.value;
            incomePeriodValue.value = appData.calcSavedMoney();
        });

        start.addEventListener('click', () => {
           periodAmount.textContent = periodSelect.value;
           incomePeriodValue.value = appData.calcSavedMoney();
        });

        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    },

    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);

        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },

    getExpenses: function() {
        expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },

    addIncomeBlock: function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);

        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },

    getIncome: function() {
        incomeItems.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
        });

        for(let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        }
    },

    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if(item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },

    getAddIncome: function() {
        additionalIncomeItem.forEach(function(item) {
            let itemValue = item.value.trim();
            if(itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },
        
    getExpensesMonth: function() {
        for (let key in this.expenses) {
            this.expensesMonth += this.expenses[key]*1;
        }
    },

    getBudget: function() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth*1;
        this.budgetDay = Math.floor(this.budgetMonth/30);
    },

    getTargetMonth: function() {
        return targetAmount.value / this.budgetMonth;
    },

    calcSavedMoney: function() {
        return appData.budgetMonth * periodSelect.value;
        },

    getStatusIncome: function() {
        if (this.budgetDay >= 1200) {
            console.log ("У вас высокий уровень дохода");
        } else if (this.budgetDay >= 600) {
            console.log ("У вас средний уровень дохода");
        } else if (this.budgetDay >= 0) {
            console.log ("К сожалению у вас уровень дохода ниже среднего");
        } else if (this.budgetDay < 0) {
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

};

const foo = appData.start.bind(appData);

const foo2 = appData.reset.bind(appData);

salaryAmount.addEventListener('input', () => start.disabled = salaryAmount.value.trim() === '');

start.addEventListener('click', foo);

cancel.addEventListener('click', foo2);

periodSelect.addEventListener('input', () => {
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = appData.calcSavedMoney();
});

start.addEventListener('click', () => {
   periodAmount.textContent = periodSelect.value;
   incomePeriodValue.value = appData.calcSavedMoney();
});

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);


