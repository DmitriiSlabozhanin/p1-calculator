const setImg = () => {
    const allCommand = document.querySelector('#command .row');

    const changePhoto = () => {
        const target = event.target;

        if (target.classList.contains('command__photo')) {
            const lastSrc = target.src;

            target.src = target.dataset.img;
            target.dataset.img = lastSrc;
        }
    };

    allCommand.addEventListener('mouseover', changePhoto);
    allCommand.addEventListener('mouseout', changePhoto);
};

export default setImg;