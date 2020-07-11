import React, { useState } from "react";

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  function handleNumberChange(e) {
    const value = Number(e.target.value);
    setCount(value);
    // console.log(typeof value, value);
    // console.log(typeof e.target.value, e.target.value);
  }

  return (
    <div>
      <input type="number" onChange={handleNumberChange} value={count} />
      <p>Le compteur est à : {count} </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;
