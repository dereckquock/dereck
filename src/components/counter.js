import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </p>
  );
}

export default Counter;
