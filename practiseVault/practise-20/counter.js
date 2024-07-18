class Counter {
  #container;
  #options;
  #decreaseButton;
  #increaseButton;
  #resultText;
  constructor(container, options) {
    this.#container = container;
    this.#options = options;

    this.#render();
    this.#setup();
  }

  #render() {
    this.#container.innerHTML = `
    <div class="container">
        <div class="result">0</div>
        <div>
            <button class="button" data-component="decrease">-</button>
            <button class="button" data-component="increase">+</button>
        </div>
        <div class="muted">
            Min: ${this.#options.min}
            Max: ${this.#options.max}
        </div>
    </div>`;
  }

  #setup() {
    this.#decreaseButton = this.#container.querySelector(
      '[data-component="decrease"]'
    );
    this.#increaseButton = this.#container.querySelector(
      '[data-component="increase"]'
    );

    this.#decreaseButton.addEventListener(
      'click',
      this.#onDecreaseButtonClick.bind(this)
    );

    this.#increaseButton.addEventListener(
      'click',
      this.#onIncreaseButtonClick.bind(this)
    );

    this.#resultText = this.#container.querySelector('.result');
  }

  #onDecreaseButtonClick() {
    let currentValue = Number(this.#resultText.innerHTML);
    let newValue = currentValue - 1;

    if (newValue >= this.#options.min) {
      this.#resultText.innerHTML = newValue;
    }
  }

  #onIncreaseButtonClick() {
    // gia tri tang len 1 - skip too many steps
    // khi click vao nut increase
    // dau tien, lay gia tri hien tai cua #resultText
    let currentValue = Number(this.#resultText.innerHTML);

    // newValue se la gia tri hien tai cua #resultText + 1
    let newValue = currentValue + 1;

    if (newValue <= this.#options.max) {
      // Set newValue vao innerHTML
      this.#resultText.innerHTML = newValue;
    }
  }
}

export default Counter;
