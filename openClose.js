const filterBtn = document.querySelector('#filterBtn');
const sidebar = document.querySelector('.sidebar');

if (filterBtn && sidebar) {

    filterBtn.addEventListener('click', (event) => {

        event.stopPropagation();

        sidebar.classList.toggle('active');

    });

    sidebar.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    document.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

}