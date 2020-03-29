//VARIABLES FROM SITE
const slideNav = document.querySelector('.mobNav');

const ham = document.querySelector('.ham');
const topLeft = document.querySelector('.topLeft');
const midLeft = document.querySelector('.midLeft');
const botLeft = document.querySelector('.botLeft');
const topRight = document.querySelector('.topRight');
const midRight = document.querySelector('.midRight');
const botRight = document.querySelector('.botRight');

const op = document.querySelector('.op');
const over = document.querySelector('.over');

const supBtn = document.querySelector('#supBtn');

//CREATED VARIABLES
let slide = true;

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
//OPTION HOVER ANIMATION
over.addEventListener('mouseover', () => {
    over.addEventListener('mousemove', (e) => {
        console.log('movement detected');
        //console.log(e.offsetX, e.offsetY);
        //console.log('X'+e.x, 'Y'+e.y)
        let X = e.offsetX;
        let Y = e.offsetY;

        console.log(X, Y);

        op.style.transform = "skew("+e.offsetX+","+e.offsetY+")";
    })
})

supBtn.addEventListener('mouseup', () => {
    supBtn.innerhtml = "Thank you!";
})