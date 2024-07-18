import QuizContent from './components/quizContent-redo.js';

class QuizApp {
  #container;

  constructor(container) {
    this.#container = container;
    this.#render();
  }

  #render() {
    this.#container.innerHTML = `
    <div class="container mt-5 text-center">
       <div data-component="selection"></div>
       <div data-component="content"></div>
       <div data-component="timer"></div>
       <div data-component="navigation"></div>
       <div data-component="report"></div>
     </div>`;
  }
}

const app = new QuizApp(document.querySelector('#app'));
