let show=document.getElementById("show");
let hidden=document.getElementById("hidden");
let div=document.querySelector(".div");
show.addEventListener("click",()=>{
    div.style.display="block";
});
hidden.addEventListener("click",()=>{
    div.style.display="none";

});
