const todos = [];
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const btn = document.getElementById('add-btn');

btn.addEventListener('click', () => {
  if (input.value) {
    todos.push(input.value);
    renderTodos();
    input.value = '';
  }
});

function renderTodos() {
  list.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo;
    list.appendChild(li);
  });
}
