let nums = document.getElementsByClassName("num");
let operation = document.getElementsByClassName("operator");
let equal = document.getElementById("equal");
let backspace = document.getElementById("delete");
let clear = document.getElementById("allClear");
let result = document.getElementById("res");
let display = document.getElementById("cal");

for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", (e) => {
    display.value += e.target.innerText;
  });
}

for (let i = 0; i < operation.length; i++) {
  operation[i].addEventListener("click", () => {
      display.value += operation[i].innerText;
  });
}

equal.addEventListener("click",()=>{
  try{
    let ans=eval(display.value);
    result.innerText=ans;
  }
  catch{
    result.innerText="Error";
  }
});

clear.addEventListener("click",()=>{
  display.value="";
  result.innerText="";
});

backspace.addEventListener("click",()=>{
  display.value=display.value.slice(0,-1);
});