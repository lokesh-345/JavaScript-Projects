let input=document.getElementById("box");
let btn=document.getElementById("btn");
let list=document.getElementById("list");

function addingTasks(){
    if(input.value==="")
        alert("Please enter a task");
    else{
        let task=document.createElement("li");      // creates a html element and stores it in task ,del
        let del=document.createElement("button");

        task.innerText=input.value;   //changing content
        del.innerText="Delete";

        task.appendChild(del);       // parent.appendChild(child)
        list.appendChild(task);
        
        del.addEventListener("click",()=>{
            task.remove();   
        });
    }
    input.value="";
}
input.addEventListener("keydown",(event)=>{
    if(event.key==="Enter")
    addingTasks();
});
btn.addEventListener("click",()=>{
    addingTasks();
});

