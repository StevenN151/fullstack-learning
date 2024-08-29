import Todo from './todo.js';

class TodoApp {
  #container;

  constructor(container) {
    this.#container = container;
    this.#render();
  }

  #render() {
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = `<li>Task ${i}</li>`;
  }
}

let app = new TodoApp(document.querySelector('#app'));
