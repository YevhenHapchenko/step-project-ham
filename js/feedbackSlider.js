'use strict';

const feedbackPrevBtn = document.querySelector('.previous-btn');
const feedbackNextBtn = document.querySelector('.next-btn');

let previousActiveCommentator = document.querySelector('.feedback-list-item-active');
let currentCommentator = +(previousActiveCommentator.dataset.commentator);

let currentCommentatorImg = document.querySelector('.up-img');
let currentSmallImg = +(currentCommentatorImg.dataset.smallImg);

function switchActiveElementsInFeedback() {
    document.querySelector(`[data-commentator="${currentCommentator}"]`).classList.add('feedback-list-item-active');
    previousActiveCommentator = document.querySelector(`[data-commentator="${currentCommentator}"]`);
    document.querySelector(`[data-small-img="${currentSmallImg}"]`).classList.add('up-img');
    currentCommentatorImg = document.querySelector(`[data-small-img="${currentSmallImg}"]`);
}

feedbackPrevBtn.addEventListener('click', () => {
    previousActiveCommentator.classList.remove('feedback-list-item-active');
    currentCommentatorImg.classList.remove('up-img');
    if (currentCommentator === 1) {
        currentCommentator = 4;
        currentSmallImg = 4;
        switchActiveElementsInFeedback();
    } else {
        currentCommentator--;
        currentSmallImg--;
        switchActiveElementsInFeedback();
    }
});

feedbackNextBtn.addEventListener('click', () => {
    previousActiveCommentator.classList.remove('feedback-list-item-active');
    currentCommentatorImg.classList.remove('up-img');
    if (currentCommentator === 4) {
        currentCommentator = 1;
        currentSmallImg = 1;
        switchActiveElementsInFeedback();
    } else {
        currentCommentator++;
        currentSmallImg++;
        switchActiveElementsInFeedback();
    }
});

const feedbackCommentsSliderUl = document.querySelector('.feedback-comments-slider');

feedbackCommentsSliderUl.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget && e.target.classList.contains('feedback-commentator-photo-small')) {
        if (!e.target.classList.contains('up-img')) {
            previousActiveCommentator.classList.remove('feedback-list-item-active');
            currentCommentatorImg.classList.remove('up-img');
            currentCommentator = +(e.target.dataset.smallImg);
            currentSmallImg = currentCommentator;
            switchActiveElementsInFeedback();
        }
    }
});