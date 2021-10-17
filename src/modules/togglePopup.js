const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupWindow = document.querySelector('.popup-content'),
        popupCoord = {
            count: -450,
            speed: 100,
            startPos: -450,
            endPos: 0
        };

        const appearancePopup = () => {

            if (popupCoord.startPos > popupCoord.endPos ?
            popupCoord.count -= popupCoord.speed : popupCoord.count += popupCoord.speed) {
                popupWindow.style.transform = `translateY(${popupCoord.count}px)`;
            }
            if (popupCoord.startPos > popupCoord.endPos ?
                popupCoord.count > popupCoord.endPos :
                popupCoord.count < popupCoord.endPos) {
                requestAnimationFrame(appearancePopup);
            }
        };

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                if (screen.width > 768) {
                    popupCoord.count = popupCoord.startPos;
                    requestAnimationFrame(appearancePopup);
                }
            });
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (target === null) {
                    popup.style.display = 'none';
                }
            }
        });
};

export default togglePopup;