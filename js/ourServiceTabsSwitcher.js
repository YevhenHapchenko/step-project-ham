'use strict';

const ourServiceTabs = document.querySelector('.our-services-list');

ourServiceTabs.addEventListener('click', (e) => {
    let previousActiveTarget = document.querySelector('.our-services-list .active');
    if (e.target !== e.currentTarget && e.target.classList.contains('our-services-item')) {
        previousActiveTarget.classList.remove('active');
        document.querySelector('.our-services-item-content.show').classList.remove('show');
        e.target.classList.add('active');
        document.querySelector(`[data-content="${e.target.innerText.toLowerCase().trim()}"]`).classList.add('show');
    }
});