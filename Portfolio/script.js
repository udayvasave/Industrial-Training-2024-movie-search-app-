
const hamburger = document.querySelector('.bars');
const close = document.querySelector('.close');

const ul =document.querySelector('.navUL');

hamburger.addEventListener('click',()=>{
    // console.log('Clicked');
    hamburger.style.display ='none';
    close.style.display ='block';
    ul.style.left = '0%';
})

close.addEventListener('click',()=>{
    close.style.display ='none';
    hamburger.style.display ='block';
    ul.style.left = '-100%';
})