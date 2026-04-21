const preloader = document.getElementById('preloader');
const loginLink = document.getElementById('login-link');

window.addEventListener('load', () => {
  setTimeout(() => {
    preloader.classList.add('hide');
  }, 1000);
});

if (loginLink && preloader) {
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();

    preloader.classList.remove('hide'); 

    setTimeout(() => {
      window.location.href = loginLink.href;
    }, 1000);
  });
}