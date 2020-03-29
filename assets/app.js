//VARIABLES FROM SITE
const slideNav = document.querySelector('.mobNav');
const ham = document.querySelector('.ham');
const topLeft = document.querySelector('.topLeft');
const midLeft = document.querySelector('.midLeft');
const botLeft = document.querySelector('.botLeft');
const topRight = document.querySelector('.topRight');
const midRight = document.querySelector('.midRight');
const botRight = document.querySelector('.botRight');

//CREATED VARIABLES
let slide = true;

ham.addEventListener('click', ()=> {
    if(slide) {
        slide = !slide;
        ham.classList.toggle('activeHam');

        slideNav.style.transform = "translateX(0vw)";

        topLeft.classList.toggle('topLeftActive');
        topRight.classList.toggle('topRightActive');
        midLeft.classList.toggle('midLeftActive');
        midRight.classList.toggle('midRightActive');
        botLeft.classList.toggle('botLeftActive');
        botRight.classList.toggle('botRightActive');

    } else {
        slide = !slide;
        ham.classList.toggle('activeHam');

        slideNav.style.transform = "translateX(-100vw)";

        topLeft.classList.toggle('topLeftActive');
        topRight.classList.toggle('topRightActive');
        midLeft.classList.toggle('midLeftActive');
        midRight.classList.toggle('midRightActive');
        botLeft.classList.toggle('botLeftActive');
        botRight.classList.toggle('botRightActive');
    }
})