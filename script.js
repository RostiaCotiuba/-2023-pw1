// Массив для хранения задач
let tasks = [];

// Функция для добавления задачи
function addTask() {
  const taskNameInput = document.getElementById('task-name');
  const taskDescriptionInput = document.getElementById('task-description');
  const taskPrioritySelect = document.getElementById('task-priority');

  // Получаем значения полей формы
  const taskName = taskNameInput.value;
  const taskDescription = taskDescriptionInput.value;
  const taskPriority = taskPrioritySelect.value;

  // Создаем объект задачи
  const task = {
    name: taskName,
    description: taskDescription,
    priority: taskPriority
  };

  // Добавляем задачу в массив
  tasks.push(task);

  // Очищаем поля формы
  taskNameInput.value = '';
  taskDescriptionInput.value = '';

  // Обновляем список задач
  updateTaskList();
}

// Функция для обновления списка задач
function updateTaskList() {
  const taskList = document.getElementById('tasks');
  const filterButtons = document.getElementsByClassName('filter-btn');

  // Очищаем список задач
  taskList.innerHTML = '';

  // Фильтруем задачи по выбранному приоритету
  const filteredTasks = tasks.filter(task => {
    const activeFilter = document.querySelector('.filter-btn.active');
    const priorityFilter = activeFilter ? activeFilter.dataset.priority : 'all';
    return priorityFilter === 'all' || task.priority === priorityFilter;
  });

  // Создаем элементы задач и добавляем их в список
  filteredTasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskName = document.createElement('div');
    taskName.classList.add('task-name');
    taskName.textContent = task.name;

    const taskPriority = document.createElement('div');
    taskPriority.classList.add('task-priority');
    taskPriority.textContent = task.priority;

    taskItem.appendChild(taskName);
    taskItem.appendChild(taskPriority);
    taskList.appendChild(taskItem);
  });

  // Обновляем активный класс для кнопок фильтрации
  Array.from(filterButtons).forEach(button => {
    button.classList.toggle('active', button.dataset.priority === filter);
  });
}

// Функция для обработки клика на кнопке фильтрации
function handleFilterClick(event) {
  const activeButton = document.querySelector('.filter-btn.active');
  if (activeButton) {
    activeButton.classList.remove('active');
  }
  event.target.classList.add('active');
  updateTaskList();
}

// Назначаем обработчик события для кнопки добавления задачи
const addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', addTask);

// Назначаем обработчик события для кнопок фильтрации
const filterButtons = document.getElementsByClassName('filter-btn');
Array.from(filterButtons).forEach(button => {
  button.addEventListener('click', handleFilterClick);
});
