const mobileBtn = document.getElementById('mobile_btn');
const mobileMenu = document.getElementById('mobile_menu');

mobileBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
});