let count=0;

let display=document.getElementById("count");

//increment
let btn1=document.getElementById("one");
btn1.addEventListener("click",()=> {
    count++;
    display.innerText=count;
});

//decrement
let btn2=document.getElementById("two");
btn2.addEventListener("click",()=>{
    if(count>0)count--;
    display.innerText=count;
});

//reset counter
let btn3=document.getElementById("three");
btn3.addEventListener("click",()=>{
    count=0;
    display.innerText=count;
});
