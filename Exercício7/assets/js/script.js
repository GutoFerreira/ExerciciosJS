window.addEventListener('load', () => {
  task();
});

function task(){

const inputTask = document.querySelector("#input-task");
const buttonAdd = document.querySelector(".button-add-task");
const divTask = document.querySelector(".tasks");
let totalTasks = [];

buttonAdd.addEventListener('click', () => {
  if (!inputTask.value || inputTask.value.trim() === '') return clearInput();
  createTask(inputTask.value);
})

inputTask.addEventListener('keyup', (e) => {
  if (e.key === 'Enter'){
    if (!inputTask.value || inputTask.value.trim() === '') return clearInput();
    createTask(inputTask.value);
  }
})

function createTask(textInput){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const button = createButtonRemove();

  
  
  li.innerHTML = textInput;
  li.appendChild(button);
  ul.appendChild(li);
  divTask.appendChild(ul);
  clearInput();
  saveTask();
}

function createButtonRemove(){
    let buttonRemove = document.createElement('button');
    buttonRemove.classList.add('deleteButton');
    buttonRemove.textContent = 'x';
    return buttonRemove;   
}

function clearInput(){
  inputTask.value = '';
  inputTask.focus();
}

document.addEventListener('click', (e) => {
    const element = e.target;
    if(element.classList.contains('deleteButton')){
      element.parentElement.remove();
      saveTask();
    }
})

function saveTask(){
  const liTasks = divTask.querySelectorAll('li');
  const listTasks = [];

  for(let forTask of liTasks){
    let textTask = forTask.textContent;
    textTask = textTask.replace('x', '').trim();
    listTasks.push(textTask);
  }
  const taskJSON = JSON.stringify(listTasks);
  localStorage.setItem('tasks', taskJSON);
}

function addSaveTasks(){
  const tasks = localStorage.getItem('tasks');
  const listTasks = JSON.parse(tasks);
  for(task of listTasks){
    createTask(task);
  }
}
addSaveTasks();
}