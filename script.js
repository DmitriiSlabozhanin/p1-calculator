'use strict';

const start = document.getElementById('start'),
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
additionalExpensesItem = document.querySelector('.additional_expenses-item'),
depositBank = document.querySelector('.deposit-bank'),
depositAmount = document.querySelector('.deposit-amount'),
depositPercent = document.querySelector('.deposit-percent'),
targetAmount = document.querySelector('.target-amount'),
periodSelect = document.querySelector('.period-select'),
periodAmount = document.querySelector('.period-amount');

let expensesItems = document.querySelectorAll('.expenses-items'),
incomeItems = document.querySelectorAll('.income-items');


const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
class AppData {
    constructor() {
        this.income = {};
        this.addIncome = [];
        this.incomeMonth = 0;
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.period = 3;
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
        this.itemIncome ='';
    }
    
    start() {

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

        cancel.addEventListener('click', this.reset);

    }

    reset() {
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
    }

    showResult() {
       
        periodSelect.addEventListener('input', () => {
            periodAmount.textContent = periodSelect.value;
            incomePeriodValue.value = this.calcSavedMoney();
        });

        start.addEventListener('click', () => {
            periodAmount.textContent = periodSelect.value;
            incomePeriodValue.value = this.calcSavedMoney();
        });

        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
    }

    addExpensesBlock() {
        const cloneExpensesItem = expensesItems[0].cloneNode(true);

        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    }

    getExpenses() {
        expensesItems.forEach(item => {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== '') {
                this.expenses[itemExpenses] = +cashExpenses;
            }
        });
    }

    addIncomeBlock() {
        const cloneIncomeItem = incomeItems[0].cloneNode(true);

        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    }

    getIncome() {
        incomeItems.forEach(item => {
            const itemIncome = item.querySelector('.income-title').value;
            const cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== '') {
                this.income[itemIncome] = +cashIncome;
            }
        });

        for(const key in this.income) {
            this.incomeMonth += +this.income[key];
        }
    }

    getAddExpenses() {
        const addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(item => {
            item = item.trim();
            if(item !== '') {
                this.addExpenses.push(item);
            }
        });
    }

    getAddIncome() {
        additionalIncomeItem.forEach(item =>  {
            const itemValue = item.value.trim();
            if(itemValue !== '') {
                this.addIncome.push(itemValue);
            }
        });
    }
        
    getExpensesMonth() {
        for (const key in this.expenses) {
            this.expensesMonth += this.expenses[key]*1;
        }
    }

    getBudget() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth*1;
        this.budgetDay = Math.floor(this.budgetMonth/30);
    }

    getTargetMonth() {
        return targetAmount.value / this.budgetMonth;
    }

    calcSavedMoney() {
        return this.budgetMonth * periodSelect.value;
        }

    getStatusIncome() {
        if (this.budgetDay >= 1200) {
            console.log ("У вас высокий уровень дохода");
        } else if (this.budgetDay >= 600) {
            console.log ("У вас средний уровень дохода");
        } else if (this.budgetDay >= 0) {
            console.log ("К сожалению у вас уровень дохода ниже среднего");
        } else if (this.budgetDay < 0) {
            console.log ("К сожалению что то пошло не так");
        }
    }

    getInfoDeposit() {
        if (this.deposit) {
            do {
                this.percentDeposit = prompt("Какой годовой процент?" , "10");
            }
            while (!isNumber(this.percentDeposit));

            do {
                this.moneyDeposit = prompt("Какая сумма заложена?" , 10000);
            }
            while (!isNumber(this.moneyDeposit));
        }
    }

eventListeners() {

const foo = this.start.bind(this);

const foo2 = this.reset.bind(this);

salaryAmount.addEventListener('input', () => start.disabled = salaryAmount.value.trim() === '');

start.addEventListener('click', foo);

cancel.addEventListener('click', foo2);

periodSelect.addEventListener('input', () => {
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = this.calcSavedMoney();
});

start.addEventListener('click', () => {
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = this.calcSavedMoney();
});

expensesPlus.addEventListener('click', this.addExpensesBlock);
incomePlus.addEventListener('click', this.addIncomeBlock);
}
}

const appData = new AppData();
appData.eventListeners();

