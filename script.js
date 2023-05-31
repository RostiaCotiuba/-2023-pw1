const taskInput = document.getElementById('taskInput');
const taskDescription = document.getElementById('taskDescription');
const taskPriority = document.getElementById('taskPriority');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value;
  const taskDesc = taskDescription.value;
  const taskPrio = taskPriority.value;
  
  if (taskText === '') {
    alert('Пожалуйста, введите задачу.');
    return;
  }
  
  const taskItem = document.createElement('li');
  taskItem.className = 'taskItem';
  
  const taskHeader = document.createElement('div');
  taskHeader.className = 'taskHeader';
  
  const taskTitle = document.createElement('span');
  taskTitle.className = 'taskTitle';
  taskTitle.innerText = taskText;
  
  const deleteButton = document.createElement('button');
  deleteButton.className = 'deleteButton';
  deleteButton.innerText = 'Удалить';
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(taskItem);
  });
  
  taskHeader.appendChild(taskTitle);
  taskHeader.appendChild(deleteButton);
  
  const taskDescElement = document.createElement('div');
  taskDescElement.className = 'taskDescription';
  taskDescElement.innerText = taskDesc;
  
  const taskPrioElement = document.createElement('div');
  taskPrioElement.className = 'taskPriority';
  taskPrioElement.innerText = `Приоритет: ${taskPrio}`;
  
  taskItem.appendChild(taskHeader);
  taskItem.appendChild(taskDescElement);
  taskItem.appendChild(taskPrioElement);
  
  taskList.appendChild(taskItem);
  
  taskInput.value = '';
  taskDescription.value = '';
}

addTaskButton.addEventListener('click', addTask);
