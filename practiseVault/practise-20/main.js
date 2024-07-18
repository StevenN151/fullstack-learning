import Counter from './counter.js';

let appContainer = document.querySelector('#app');

let counterApp = new Counter(appContainer, {
  min: -20,
  max: 20,
});
