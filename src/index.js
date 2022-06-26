import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Total from './Total'
import Content from './Content'
import Contador from './Contador'
import Unicafe from './Unicafe'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

  return (
    <>
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
    <div>
      <Contador />
    </div>
    <hr />
    <div>
      <h1>A partir de acá se ejecuta el ejercicio de la parte D (1.6 a 1.14)</h1>
      <Unicafe />
    </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
