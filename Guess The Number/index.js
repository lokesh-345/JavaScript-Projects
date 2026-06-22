let secretNum=(Math.floor(Math.random()*10)+1);
//console.log(secretNum);

let btn=document.getElementById("btn");
let guess=document.getElementById("guess");
let message=document.getElementById("msg");


btn.addEventListener("click", ()=>{
    if(guess.value==="")
        message.innerText= "Please enter a Number";
    else{
        let userGuess=Number(guess.value);
        if(userGuess===secretNum){
            message.innerText= "🎉Correct";
            secretNum=(Math.floor(Math.random()*10)+1);
        }
        else if(userGuess<secretNum)
            message.innerText= "Too low";
        else
            message.innerText="Too high";
    }
    guess.value="";
});