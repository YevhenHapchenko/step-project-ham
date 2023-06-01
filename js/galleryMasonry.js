'use strict';

const galleryContentContainer = document.querySelector('.gallery-images-wrapper');

let masonry = new Masonry( galleryContentContainer, {
    itemSelector: ".gallery-grid-item-big",
    gutter: 10,
    originalLeft: true,
    originTop: true,
});

const hiddenImg = document.querySelectorAll('.gallery-images-wrapper > .hide');
console.log(hiddenImg);

const galleryBtn = document.querySelector('.gallery-btn');
const galleryLoader = document.querySelector('.gallery-loader');

galleryBtn.addEventListener('click', () => {
    galleryLoader.classList.remove('hide');
    setTimeout(() => {
        galleryLoader.classList.add('hide');
        hiddenImg.forEach(elem => {
            elem.classList.remove('hide');
        });
        let masonry2 = new Masonry( galleryContentContainer, {
            itemSelector: ".gallery-grid-item-big",
            gutter: 10,
            originalLeft: true,
            originTop: true,
        });
        galleryBtn.classList.add('hide');
    }, 2000);
});