const estatus = document.querySelector('#status')
const btn = document.querySelector('#add')

check = 0;
btn.addEventListener("click", function(){
  
       if(check == 0){
        estatus.innerHTML = "Friends";
        estatus.style.color = "Green";
        btn.innerText = "Remove Friends";
        check = 1;
       }else{
        estatus.innerHTML = "Unknown";
        estatus.style.color = "red";
        btn.innerText = "Add Friends";
        check = 0;
       }
   
    }
)



