const input=document.querySelector("#color");
const submit=document.querySelector("#btn");
const body=document.body;

submit.addEventListener("click",()=>{
     const color1=input.value;
     body.style.backgroundColor=color1;
     
});

