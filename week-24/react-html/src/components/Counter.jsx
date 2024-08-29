import { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(-99);
  const onDecreaseButtonClick = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  const onIncreaseButtonClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div>
      <div>Counter</div>
      <div>
        <button onClick={onDecreaseButtonClick}>-</button>
        <span>{count}</span>
        <button onClick={onIncreaseButtonClick}>+</button>
      </div>
    </div>
  );
}

export default Counter;
