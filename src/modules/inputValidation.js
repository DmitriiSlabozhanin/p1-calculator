const inputValidation = () => {

    const calcItems = document.querySelectorAll('.calc-item');
    const inputFields = document.querySelectorAll('input');

    calcItems.forEach(item => {
        if (!item.classList.contains('calc-type')) {
        item.addEventListener('input', event => {
            let target = event.target;
            event.target.value = target.value.replace(/[^\d]/g, '');
        });
        }
    });

    const validateBlur = (elem) => {

        let value = elem.value;
        console.log('value: ', value);
        console.log('elem: ', elem);

        if (elem.name === 'user_message') {
            value = value.replace(/((^[\s-]+))|((?<=\s)\s+)|((?<=-)-+)|([\s-]+$)/g, '');
            elem.value = value;
        } else if (elem.name === 'user_name') {
            let words = value.match(/[а-я]+/ig);
            words = words.map(item => (item.substring(0, 1).toUpperCase() + item.substring(1).toLowerCase()));
            value = words.join(' ');
            elem.value = value;
        } else if (elem.name === 'user_email') {
            value = value.replace(/(?<=@)@+/g, '');
            elem.value = value;
        } else if (elem.name === 'user_phone') {
            value = value.replace(/((?<=\()\({1,})|((?<=\))\){1,})|((?<=-)-{1,})|((?<=\+)\+{1,})/g, '');
            elem.value = value;
        } else {
            console.log('other input');
        }
    };

    // Ввод Ваше имя, Ваше сообщение, e-mail
    inputFields.forEach(elem => {
        elem.addEventListener('input', (event) => {
            const target = event.target;
            let value = target.value;
            if (elem.name === 'user_name' || elem.name === 'user_message') {
                target.value = target.value.replace(/[^а-яё\s-]/ig, '');
            } else if (elem.name === 'user_email') {
                const regexpEmail = /([^a-z@_\-.!~*'])|((?<=^)@+)|((?<=@.*)@+)/ig;
                target.value = value.replace(regexpEmail, '');
            } else if (elem.name === 'user_phone') {
                const regexpTelNumber = /([^\d()\-+])|((?<=.{35,}).)|((?<!^)\++)|((?<=^)-)|((?<=[+-])-+)|((?<=\([\d\-)(]*)\(+)|((?<=\()\)+)|((?<=\)[\d\-)(]*)\)+)|((?<=-)-+)/ig;
                target.value = value.replace(regexpTelNumber, '');
            }
        });

        elem.addEventListener('blur', (event) => {
        const target = event.target;
        console.log('blur at:', target);
        validateBlur(target);
        });
    });

};

export default inputValidation;