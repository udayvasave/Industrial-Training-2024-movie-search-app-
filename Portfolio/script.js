const hambuger = document.querySelector('.bars');
const cross = document.querySelector('.close');
const ul = document.querySelector('.navUL');




hambuger.addEventListener('click',()=>{
    hambuger.style.display = 'none';
    cross.style.display= 'block';
   ul.style.left='0%';

})

cross.addEventListener('click',()=>{
    // console.log('worlks');
    cross.style.display= 'none';
    hambuger.style.display = 'block';
    ul.style.left='-150%';
})



