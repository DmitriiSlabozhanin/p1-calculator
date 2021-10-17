const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо, мы скоро с вами свяжемся';
    
    const postData = (body) => {

        return fetch ('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

    const clearInput = (idForm) => {
            const form = document.getElementById(idForm);
            [...form.elements]
                .filter(item =>
                    item.tagName.toLowerCase() !== 'button' &&
                    item.type !== 'button')
                .forEach(item =>
                    item.value = '');
    };

    const isValid = (event) => {
        const target = event.target;
            if (target.matches('.form-phone')) {
                target.value = target.value.replace(/[^+\d]/g, '');
        }
            if (target.name === 'user_name') {
                target.value = target.value.replace(/[^а-яё ]/gi, '');
        }
            if (target.matches('.mess')) {
            target.value = target.value.replace(/[^а-яё ,.]/gi, '');
        }
    };

    const takeForm = (idForm) => {
        const form = document.getElementById(idForm);
        const statusMessage = document.createElement('div');

        statusMessage.style.cssText = 'font-size: 2rem;';

        form.addEventListener('submit', event => {

            event.preventDefault();
            form.appendChild(statusMessage);

            const formData = new FormData(form);
            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });
             
            statusMessage.textContent = loadMessage;
                
            postData(Object.fromEntries(new FormData(form)))
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error ('status network ${request.status}');
                    }
                setTimeout (() => {
                    statusMessage.textContent = successMessage;
                }, 2000);
                    clearInput(idForm);
                })
                .catch(error => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
        });

    form.addEventListener('input', isValid); 
    };

    takeForm('form1');
    takeForm('form2');
    takeForm('form3');
};

export default sendForm;