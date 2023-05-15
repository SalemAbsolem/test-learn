let darkButton = document.querySelector('.theme-button-dark');
let lightButton = document.querySelector('.theme-button-light');

darkButton.onclick = function () {
    document.body.classList.add('dark');
    darkButton.classList.add('active');
    lightButton.classList.remove('active');
};

lightButton.onclick = function () {
    document.body.classList.remove('dark');
    darkButton.classList.remove('active');
    lightButton.classList.add('active');
};