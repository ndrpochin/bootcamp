# Ejercicios de FullStackOpen

https://fullstackopen.com/

## Introduccion a React

### Ejercicios 1.1 y 1.2

Use `create-react-app` para inicializar una nueva aplicación. Modifique index.js para que coincida con lo siguiente

```
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

y elimine archivos adicionales (App.js, App.css, App.test.js, logo.svg, setupTests.js, reportWebVitals.js).

Desafortunadamente, toda la aplicación está en el mismo componente. Refactorice el código para que conste de tres componentes nuevos: _Header, Content y Total_. Todos los datos aún residen en el componente _App_, que pasa los datos necesarios a cada componente mediante props. _Header_ se encarga de representar el nombre del curso, _Content_ representa las partes y su número de ejercicios y _Total_ representa el número total de ejercicios.

El cuerpo del componente _App_ será aproximadamente como sigue:

```
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```

ADVERTENCIA create-react-app convierte automáticamente el proyecto en un repositorio de git a menos que la aplicación se cree dentro de un repositorio ya existente. Lo más probable es que no quieras que el proyecto se convierta en un repositorio, así que ejecuta el comando `rm -rf .git` en la raíz del proyecto.

## 1.2: Información del curso, paso 2

Refactorice el componente _Content_ para que no represente ningún nombre de partes o su número de ejercicios por sí mismo. En su lugar, solo representa tres componentes _Part_ de los cuales cada uno representa el nombre y el número de ejercicios de una parte.

```
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```
Nuestra aplicación pasa información de una manera bastante primitiva en este momento, ya que se basa en variables individuales. Esta situación mejorará pronto.
