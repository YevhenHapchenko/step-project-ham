'use stricts';

const ourWorksTabs = document.querySelector('.our-works-list');
const allWorksInOurWorks = document.querySelectorAll('.flip-card');
const ourWorksLoadMoreBtn = document.querySelector('.our-works-btn');
const ourWorksLoader = document.querySelector('.our-works-loader');

if (allWorksInOurWorks.length > 12) {
    ourWorksLoadMoreBtn.classList.remove('hide');
}

ourWorksLoadMoreBtn.addEventListener('click', () => {
    ourWorksLoader.classList.remove('hide');
    setTimeout(() => {
        ourWorksLoader.classList.add('hide');
        const countedHidenElements = document.querySelectorAll('.flip-card.flip-card-display-none');
        if(allWorksInOurWorks.length > countedHidenElements.length) {
            let count = 0;
            for (let i = 0; i < 12; i++) {
                countedHidenElements[i].classList.remove('flip-card-display-none');
            }
        }
        if(!(document.querySelector('.flip-card.flip-card-display-none'))) ourWorksLoadMoreBtn.classList.add('hide');
    }, 2000)
})

ourWorksTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('our-works-item-active')) return;
    allWorksInOurWorks.forEach(work => {
        work.classList.add('flip-card-display-none');
    })
    if (e.target !== e.currentTarget && e.target.classList.contains('our-works-item')) {
        document.querySelector('.our-works-list .our-works-item-active').classList.remove('our-works-item-active');
        e.target.classList.add('our-works-item-active');
        const currentCategory = e.target.innerText.toLowerCase().trim() === 'all' ? allWorksInOurWorks : document.querySelectorAll(`[data-work-category="${e.target.innerText.toLowerCase().trim()}"]`);
        if (currentCategory.length > 12) {
            ourWorksLoadMoreBtn.classList.remove('hide');
            for (let i = 0; i < 12; i++) {
                allWorksInOurWorks[i].classList.remove('flip-card-display-none');
            }
        } else {
            ourWorksLoadMoreBtn.classList.add('hide');
            currentCategory.forEach(work => {
                work.classList.remove('flip-card-display-none');
            })
        }
    }
})



