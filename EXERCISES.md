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

### 1.2: Información del curso, paso 2

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

## Ejercicios 1.3.-1.5.

**Pro-tip:** puede tener problemas cuando se trata de la estructura de los _props_ que reciben los componentes. Una buena manera de aclarar las cosas es imprimiendo los props en la consola, por ejemplo, de la siguiente manera:
```
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
```
### 1.3: información del curso, paso 3
Avancemos para usar objetos en nuestra aplicación. Modifique las definiciones de las variables del componente _App_ de la siguiente manera y también refactorice la aplicación para que siga funcionando:
```
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}
```
### 1.4: información del curso paso 4
Y luego coloque los objetos en un array. Modifique las definiciones de variables de _App_ de la siguiente forma y modifique las otras partes de la aplicación en consecuencia:
```
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      ...
    </div>
  )
}
```
**NB** en este punto puede asumir que siempre hay tres elementos, por lo que no es necesario pasar por las matrices usando bucles. Volveremos al tema de la representación de componentes basados en elementos dentro de arrays con una exploración más profunda en la siguiente parte del curso.

Sin embargo, no pase diferentes objetos como props separados del componente _App_ a los componentes _Content_ y _Total_. En su lugar, páselos directamente como una matriz:
```
const App = () => {
  // const definitions

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
```
### 1.5: información del curso paso 5
Llevemos los cambios un paso más allá. Cambie el curso y sus partes en un solo objeto JavaScript. Arregle todo lo que se rompa.
```
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      ...
    </div>
  )
}
```