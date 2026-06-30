const facebookBtn = document.querySelector('.facebook-btn');
const instagramBtn = document.querySelector('.instagram-btn');
const allegroBtn = document.querySelector('.allegro-btn');

window.addEventListener('load', () => {
    setTimeout(() => {
        facebookBtn.classList.add('show');
    }, 250);

    setTimeout(() => {
        instagramBtn.classList.add('show');
    }, 500);

    setTimeout(() => {
        allegroBtn.classList.add('show');
    }, 750);
});