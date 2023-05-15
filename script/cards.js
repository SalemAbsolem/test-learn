let plateButton = document.querySelector('.card-view-button-grid');
let stringButton = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

plateButton.onclick = function () {
    plateButton.classList.add('active');
    stringButton.classList.remove('active');
    cards.classList.remove('list');
};

stringButton.onclick = function () {
    plateButton.classList.remove('active');
    stringButton.classList.add('active');
    cards.classList.add('list');
};