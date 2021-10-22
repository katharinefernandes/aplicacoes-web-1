const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

// Save our "todos" to local Storage
if(todos) {
  todos.forEach((todo) => {
    addTodo(todo); 
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;
  if(todo) {
    todoText = todo.text;
  }
  // lista de itens
  if(todoText) {
    const todoEl = document.createElement('li');
    if(todo && todo.completed) {
      todoEl.classList.add('completed');
    }
    todoEl.innerText = todoText;

    //mark as completed
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      updateLS();
    });

    //delete
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });

    //add it to the DOM
    todosUL.appendChild(todoEl);
    input.value = '';
    updateLS();
  }
}

function updateLS() {
  todosEl = document.querySelectorAll('li');

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}