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
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });
};

export default calc;