
const bars = document.querySelector('.menuIcon');
const closed = document.querySelector('.closeIcon');
const ul = document.querySelector('.UL');


bars.addEventListener('click',()=>{
    console.log('clicked');
    bars.style.display='none';
    closed.style.display='block';
    ul.style.left="0%";
})

closed.addEventListener("click",()=>{
    closed.style.display= 'none';
    bars.style.display='block';
    ul.style.left="-100%";
})

/////////////////////////////////////////////  javascript  /////////////////////////////////////////////////////////////////


// Functions in javascript

function Hello(names) {
    return `Hello, ${names}`;
}

console.log(Hello('Shivani'));

///// Arrays in javascript (ForEach)

const numbers = [1,2,3,4,5,6,7,8,9,155];

numbers.forEach((num)=>{
    console.log(num);
});

////////////////////////// MAP method ////////////

const number2 = [1,2,3,4,5,6,7,8,98,7,6,6,55,55,34,35,67,87,89,65,];

const sqaures = number2.map((numbersINArray,i)=>{
    return numbersINArray * numbersINArray;
})

console.log(sqaures);

console.log(number2.length);

number2.push(99);
number2.pop();

number2.shift();


number2.slice(1, 6);

console.log(number2);

