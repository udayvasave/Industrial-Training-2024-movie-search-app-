const smallCups = document.querySelectorAll('.cup-small');
const litre = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remaining');


smallCups.forEach((cup,index)=>{
    console.log(index);
    cup.addEventListener('click',()=> highlightedCup(index) )
})

function highlightedCup (index) {
// if smallcup already fill then it gets empty
if(smallCups[index].classList.contains('full')&& !smallCups[index].nextElementSibling.classList.contains('full')){
    index--;
}

//by clicking on smallcups it get filled with full class
smallCups.forEach((cup,index2)=>{
    if(index2 <= index){
        cup.classList.add('full')
    }else{
        cup.classList.remove('full')
    }
})

updateBigCup();
}


function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
  

    const totalCups = smallCups.length;
    console.log(fullCups);
    console.log(totalCups);

    if(fullCups === 0){
        percentage.style.visibility ='hidden';
        percentage.style.height=0;
    }else {
        percentage.style.visibility ='visible';
        percentage.style.height = `${fullCups / totalCups * 300}px`
        percentage.innerText = `${fullCups /totalCups * 100}%`
    }

    if(fullCups ==totalCups){
        remained.style.visibility= 'hidden'
        remained.style.height= '0'
    }else{
        remained.style.visibility= 'visible';
        litre.innerText = `${250 * fullCups / 1000}Liters`
    }

}

