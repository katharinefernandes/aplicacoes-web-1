const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

// Fazendo com que a tarefa não seja deletada quando recarregada
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

// Adicionando tarefa
function addTodo(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo.text;
  }

  // Lista das tarefas
  if (todoText) {
    const todoEl = document.createElement("p");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }
    todoEl.innerText = todoText;

    // Marcando tarefa como completa
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });

    // Deletando tarefa
    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });

    todosUL.appendChild(todoEl);
    input.value = "";
    updateLS();
  }
}

// Fazendo com que a tarefa não seja deletada quando recarregada
function updateLS() {
  todosEl = document.querySelectorAll("p");

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
