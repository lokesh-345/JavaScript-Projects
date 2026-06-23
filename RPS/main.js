let user=document.getElementById("user");
let comp=document.getElementById("comp");
let winner=document.getElementById("res");


function playGame(userChoice){
    user.innerText="User's Choice : " +userChoice;
    let computerChoice=Math.floor(Math.random()*3)+1;
    if(computerChoice===1){
        comp.innerText="Computer's Choice : Rock";
        computerChoice="Rock";
    }
    else if(computerChoice===2){
        comp.innerText="Computer's Choice : Paper";
        computerChoice="Paper";
    }
    else{
        comp.innerText="Computer's Choice : Scissor";
        computerChoice="Scissor";
    }
    if(computerChoice===userChoice)
        winner.innerText="draw";
    
    else if((userChoice === "Rock" && computerChoice === "Scissor") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissor" && computerChoice === "Paper")){
        winner.innerText="user Won";
    }
    else
        winner.innerText="Computer won";
}

let btn1=document.getElementById("btn1");
btn1.addEventListener("click",()=>{
    playGame("Rock");
})

let btn2=document.getElementById("btn2");
btn2.addEventListener("click",()=>{
    playGame("Paper");
})

let btn3=document.getElementById("btn3");
btn3.addEventListener("click",()=>{
    playGame("Scissor");
})


