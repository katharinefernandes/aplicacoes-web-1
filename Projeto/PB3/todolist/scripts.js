const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));


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
    const todoEl = document.createElement('p');
    if(todo && todo.completed) {
      todoEl.classList.add('completed');
    }
    todoEl.innerText = todoText;

    //marcarndo como completo
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      updateLS();
    });

    //deletando
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });

    //adicionando item
    todosUL.appendChild(todoEl);
    input.value = '';
    updateLS();
  }
}

function updateLS() {
  todosEl = document.querySelectorAll('p');

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}