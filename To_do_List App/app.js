const inputTask = document.querySelector(".Input-task");
const addtask = document.querySelector(".Addtask");
const taskContainer = document.querySelector(".list-task");


addtask.addEventListener('click', ()=>{
    if(inputTask.value === ''){
      inputTask.placeholder = "You must write a list"
      
    }else{
      let li = document.createElement("li");
      li.innerHTML = inputTask.value;
      taskContainer.appendChild(li);

      let span = document.createElement('span');
      span.innerHTML = "\u00d7";
      span.onclick = ()=>{
        li.remove();
      }
      li.appendChild(span);
       inputTask.value = "";
      li.onclick = function(){
        li.classList.add('checked');

      }
    }

});


function saveData(){
  localStorage.setItem("data", taskContainer.innerHTML);
}
function showTask(){
  taskContainer.innerHTML = localStorage.getItem("data");
}
showTask();