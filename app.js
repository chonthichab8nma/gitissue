function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todo, idx) => {
    const li = document.createElement('li');
    li.textContent = todo;
    li.addEventListener('click', () => {
      li.classList.toggle('done');
    });
    list.appendChild(li);
  });
}
