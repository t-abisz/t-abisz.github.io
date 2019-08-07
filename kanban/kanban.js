const kanbanList = document.querySelector('.kanban__list');
const kanbanAdd = document.querySelector('.button--add');
kanbanAdd.addEventListener('click', newTask);
const task = document.querySelector('.kanban__add');
const kanbanDone = document.querySelector('.kanban__done');

//get local storage
const savedList = localStorage.getItem('savedContent');
const savedDone = localStorage.getItem('savedDone');
if(savedList || savedDone) {
  kanbanList.innerHTML = savedList;
  kanbanDone.innerHTML = savedDone;
}

//enter key on input

function test() {
  if(event.keyCode == 13) {
    event.preventDefault();
   newTask();
  }
}

//adding new task
function newTask() {
  if(task.value == null || task.value == ""){
    alert('Empty task is no task')
  } else {
  kanbanList.insertAdjacentHTML('beforeend', `<li class="kanban__task" draggable="true"><p>${task.value}</p><span class="button button--delete" onclick="deleteTask(this)">X</span><span class="button button--done" onclick="doneTask(this)">&#10003;</span></li>`);
  task.value = '';
  localStorage.setItem('savedContent', kanbanList.innerHTML);
  }
}

//deleting task
function deleteTask(x) {
  const kanbanTask = x.closest('.kanban__task');
  kanbanTask.remove();
  localStorage.setItem('savedContent', kanbanList.innerHTML);
}

//finishing task
function doneTask(x) {
  
  const kanbanTask = x.closest('.kanban__task');
  kanbanDone.appendChild(kanbanTask);
  localStorage.setItem('savedContent', kanbanList.innerHTML);
  localStorage.setItem('savedDone', kanbanDone.innerHTML);
}

//drag and drop
if (document.querySelectorAll('.kanban__task') == true) {
  
}

