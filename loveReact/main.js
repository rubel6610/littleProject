const img = document.querySelector(".container");
const love = document.querySelector("i");


img.addEventListener("dblclick", function(){
    
    love.style.transform = "translate(-50%, -50%) scale(1)";
   
    love.style.opacity = 0.5;
    
    setTimeout(()=>{
        love.style.transform = "translate(-50%, -50%) scale(0)";
       
    },2000)
    
    
})