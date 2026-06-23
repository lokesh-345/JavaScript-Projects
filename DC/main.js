let time=document.getElementById("time");
let date=document.getElementById("date");
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let id;

btn2.addEventListener("click",()=>{
    clearInterval(id);
    id=null;
})

btn1.addEventListener("click",() => {
    if(id) return; 
    id=setInterval(() => {
        let period;
        let now=new Date();
        let hrs=now.getHours();
        if(hrs==0){
            hrs=12;
            period="AM";
        }
        else if(hrs>12){
            hrs=hrs-12;
            period="PM";
        }
        else if(hrs==12){
            period="PM";
        }
        else{
            period="AM";
        }
        hrs=hrs.toString().padStart(2,"0");    
        let mins=now.getMinutes();
        mins=mins.toString().padStart(2,"0");
        let secs=now.getSeconds();
        secs=secs.toString().padStart(2,"0");

        let TodayDate=now.getDate();
        TodayDate=TodayDate.toString().padStart(2,"0");
        let month=now.getMonth()+1;
        month=month.toString().padStart(2,"0");
        let year=now.getFullYear();
        time.innerText=`${hrs}:${mins}:${secs} ${period}`;
        date.innerText=`${TodayDate}/${month}/${year}`;
    }, 1000);
},);

//string.padStart(target_length,"number to be added at front")
//first convert to string and then store the result and do operations with padStart
//store the result produces by padStart
//otherwise both throws errors and become as original values ,methods don't modify the original value