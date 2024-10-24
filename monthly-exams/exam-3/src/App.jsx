import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        <div className="photo"></div>
        <div className="content">
          <h1 className="title">Seems like heaven</h1>
          <div className="under-title">
            "Just when you're in heaven, life hands you a pair of running
            shoes!"
          </div>
          <div className="content-main">
            <div className="content-main-left">
              <span className="uppercase"></span>ax had always dreamed of the
              perfect Sunday: cozy bed, snacks within reach, and every streaming
              service at his fingertips. Today, that dream was finally coming
              true. He had stocked up on popcorn, candy, and enough soda to
              float a small boat. Wrapped in his softest blanket, he flicked on
              the TV and sank into the cushions. "This," he thought, "is
              heaven."
            </div>
            <div className="content-main-right">
              Just as Max found the perfect movie, his phone buzzed. It was a
              message from his friend Lisa: "Ready for our 5K run?" Max's eyes
              widened in horror. He had completely forgotten! With a groan, he
              looked from the TV to his running shoes by the door. "Well," he
              sighed, "it seemed like heaven... while it lasted!"
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
