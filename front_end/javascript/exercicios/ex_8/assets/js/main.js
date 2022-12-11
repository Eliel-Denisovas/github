const inputTask = document.querySelector(".input-task");
const buttonAddTask = document.querySelector(".button-add-task");
const tasks = document.querySelector(".tasks");

buttonAddTask.addEventListener("click", function () {
  if (!inputTask.value) return;
  createTask(inputTask.value);
});

inputTask.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
  }
});

document.addEventListener('click', function(e) {
  const el = e.target;
  if (el.classList.contains('erase'))
  el.parentElement.remove();
  saveTasks();
});

function createList() {
  const list = document.createElement("li");
  return list;
}

function createTask(textInput) {
  const list = createList();
  list.innerText = textInput;
  tasks.appendChild(list);
  cleanInput();
  createEraseButton(list);
  saveTasks();

}

function createEraseButton(list) {
  list.innerText +=' ';
  const eraseButton = document.createElement('button');
  eraseButton.innerText = 'Erase';
  eraseButton.setAttribute('class', 'erase')
  eraseButton.setAttribute('title', 'Erase this task')
  list.appendChild(eraseButton);
}

function cleanInput() {
  inputTask.value = '';
  inputTask.focus();
}

function saveTasks() {
  const taskList = tasks.querySelectorAll('li');
  const listsText = [];
  for (let task of taskList) {
    let taskText = task.innerText;
    taskText = taskText.replace('Erase', '').trim();
    listsText.push(taskText);
    
  }
  const tasksJSON = JSON.stringify(listsText);
  localStorage.setItem('savedTasks', tasksJSON);
}

function addSavedTasks() {
  const tasks = localStorage.getItem('savedTasks')
  const listsText = JSON.parse(tasks)

  for (let task of listsText) {
    createTask(task);
  }
}
addSavedTasks();

