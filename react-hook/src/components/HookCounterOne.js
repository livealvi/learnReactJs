import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <div>
        <button onClick={() => setCount(count + 1)}>click {count} times</button>
      </div>
    </div>
  );
}

export default HookCounterOne;
