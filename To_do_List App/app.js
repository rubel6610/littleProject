const inputTask = document.querySelector(".input");
const addvalue = document.querySelector(".addTask");
const listContainer = document.querySelector('.list_container');


function addTask(){
    if(inputTask.value == ""){
        inputTask.placeholder = "Write your task here"
    }else{
        let li =document.createElement("li");
        li.innerHTML = inputTask.value;
        listContainer.appendChild(li);
        
        li.onclick = function(){
            li.classList.add('check')
        }

        let span = document.createElement('span');
        span.innerText = "\u00d7";
        li.appendChild(span);

        span.onclick = function(){
            li.remove();

        }
        inputTask.value = "";

    }
}