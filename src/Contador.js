import React, { useState } from 'react'

import Display from './DisplayContador'
import Boton from './ButtonContador'

const Contador = (props) => {
  const [counter, setCounter] = useState(0)

  const sumarUno = () => setCounter(counter + 1)

  const restarUno = () => setCounter(counter - 1)

  const reset = () => setCounter(0)

  return (
    <>
      <h1> Ejemplo simple de UseState con un contador</h1>
      <Display counter={counter} />
      <div>
        <Boton handleClick={sumarUno} text="sumar 1" />
        <Boton handleClick={restarUno} text="restar 1" />
        <Boton handleClick={reset} text="reset" />
      </div>
    </>
  )
}

export default Contador
