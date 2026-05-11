(function () {

    const burgerOpen = document.querySelector('.js-burger-open');
    const header = document.querySelector('header');

    if (burgerOpen && header) {

        burgerOpen.addEventListener('click', () => {
            header.classList.toggle('nav-active');
        });

        document.addEventListener('click', (event) => {

            if (
                !header.contains(event.target)
            ) {
                header.classList.remove('nav-active');
            }

        });

    }

})();