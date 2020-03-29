//VARIABLES FROM SITE
const slideNav = document.querySelector('.mobNav');

const ham = document.querySelector('.ham');
const topLeft = document.querySelector('.topLeft');
const midLeft = document.querySelector('.midLeft');
const botLeft = document.querySelector('.botLeft');
const topRight = document.querySelector('.topRight');
const midRight = document.querySelector('.midRight');
const botRight = document.querySelector('.botRight');

const supBtn = document.querySelector('#supBtn');
const supBox = document.querySelector('#supBox');

//CREATED VARIABLES
let slide = true;
let screen = window.innerWidth;
let mail = true;

//HAMBURGER NAVIGATION ANIMATION
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

supBtn.addEventListener('click', () => {
    if(supBox.value == "" && screen > 480) {
        alert('Please enter and Email Adress.');
        supBtn.value = "Sign Up";
    } else if(screen <= 480 && mail) {
        mail = !mail;
        supBtn.value = "Sign Up";
        supBox.style.top = "0.5vh";
    } else {
        mail = !mail;
        supBox.style.top = "10vh";
        supBox.value = "";
        supBtn.value = "Thank you!";
    }
})