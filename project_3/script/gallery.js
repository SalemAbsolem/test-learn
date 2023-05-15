let activePhoto = document.querySelector('.active-photo');
let miniPhotos = document.querySelectorAll('.preview-list li a');

for (let miniPhoto of miniPhotos) {
    miniPhoto.onclick = function (evt) {
        let activeMini = document.querySelector('.preview-list li a.active-item');
        evt.preventDefault();
        activePhoto.src = miniPhoto.href;
        miniPhoto.classList.add('active-item');
        activeMini.classList.remove('active-item');
    };
};