const kanbanList = document.querySelector('.kanban__list');
const kanbanAdd = document.querySelector('.button--add');
kanbanAdd.addEventListener('click', newTask);
const task = document.querySelector('.kanban__add');

//get local storage
function yourTasks() {
 return kanbanList.innerHTML = localStorage.getItem('savedContent');
}
document.addEventListener("DOMContentLoaded", yourTasks)
//enter key on input
task.addEventListener('onkeydown', function(event) {
  if(event.which == 13 || event.keyCode == 13) {
   event.preventDefault();
   newTask();
  }
})

//adding new task
function newTask() {
  if(task.value == null || task.value == ""){
    alert('Empty task is no task')
  } else {
  kanbanList.insertAdjacentHTML('beforeend', `<li class="kanban__task" draggable="true"><p>${task.value}</p><span class="button button--delete" onclick="deleteTask(this)">X</span><span class="button button--done" onclick="doneTask(this)">&#10003;</span></li>`);
  task.value = '';
  let saveList = kanbanList.innerHTML;
  localStorage.setItem('savedContent', saveList);
  }
}

//deleting task
function deleteTask() {
  const kanbanTask = document.querySelector('.kanban__task');
  kanbanTask.remove();
}

//finishing task
function doneTask() {
  const kanbanTask = document.querySelector('.kanban__task');
  kanbanTask.classList.add('done');
  kanbanTask.parentNode.appendChild(kanbanTask);
}

