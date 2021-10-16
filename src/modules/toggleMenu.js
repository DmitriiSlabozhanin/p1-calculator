const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
    
        handlerMenu = () => {
            let target = event.target;
            if (target.closest('.menu')) {
                if (screen.width > 768) {
                    menu.classList.toggle('active-menu');
                } else {
                    menu.style.transform = `translate(0)`;
                }
            } else if (target !== menu && target.closest('[href^="#"]')) {
                if (screen.width > 768) {
                    menu.classList.toggle('active-menu');
                } else {
                    menu.style.transform = `translate(-100%)`;
                }
            }
        };

    btnMenu.addEventListener('click', handlerMenu);
    menu.addEventListener('click', handlerMenu);
};

export default toggleMenu;