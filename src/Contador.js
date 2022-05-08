import React from "react";
import { useState } from "react";

const Contador = (props) => {
  const [counter, setCounter] = useState(0);

  const sumarUno = () => setCounter(counter + 1);

  const restarUno = () => setCounter(counter - 1);

  const reset = () => setCounter(0);

  return (
    <>
      <h1> Ejemplo simple de UseState con un contador</h1>
      <div>
        <span>{counter}</span>
      </div>
      <div>
        <button onClick={sumarUno}>sumar 1</button>
        <button onClick={restarUno}>restar 1</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
};

export default Contador;
