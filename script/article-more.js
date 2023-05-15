let articles = document.querySelectorAll('.blog-article');

for (let article of articles) {
    let buttonMore = article.querySelector('.more');
    buttonMore.onclick = function () {
        article.classList.remove('short');
    };
}