import React, { useState } from "react";

function HookCounter4() {
  const [item, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...item,
      {
        id: item.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <div>
        <button onClick={addItem}>Add a number </button>
        <ul>
          {item.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HookCounter4;
