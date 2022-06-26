# Ejercicios de FullStackOpen

https://fullstackopen.com/

# A) Introduccion a React

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

# B) JAVASCRIPT
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

# D) Un estado mas complejo, depurando aplicaciones React
### Ejercicios 1.6 1.14 (objetivo del finde)

## 1.6: unicafe, paso 
Como la mayoría de las empresas, Unicafe recopila comentarios de sus clientes. Su tarea es implementar una aplicación web para recopilar comentarios de los clientes. Solo hay tres opciones para los comentarios: good (bueno), neutral y bad(malo).

La aplicación debe mostrar el número total de comentarios recopilados para cada categoría. Su aplicación final podría verse así:

-ver imagen de la web-

Tenga en cuenta que su aplicación debe funcionar solo durante una única sesión del navegador. Una vez que actualice la página, los comentarios recopilados pueden desaparecer.

Puede implementar la aplicación en un solo archivo index.js. Puede utilizar el siguiente código como punto de partida para su aplicación.

```
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
```

## 1.7: unicafe, paso 2
Amplíe su aplicación para que muestre más estadísticas sobre los comentarios recopilados: el número total de comentarios recopilados, la puntuación promedio (buena: 1, neutral: 0, mala: -1) y el porcentaje de comentarios positivos.

-ver imagen de la web-

## 1.8: unicafe, paso 3
Refactorice su aplicación para que la visualización de las estadísticas se extraiga en su propio componente Statistics. El estado de la aplicación debe permanecer en el componente raíz App.

Recuerde que los componentes no deben definirse dentro de otros componentes:
```
// un lugar adecuado para definir un componente
const Statistics = (props) => {
  // ...
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // no defina componentes adentro de otro componente
  const Statistics = (props) => {
    // ...
  }

  return (
    // ...
  )
}
```

## 1.9: unicafe paso4
Cambie su aplicación para mostrar estadísticas solo una vez que se hayan recopilado los comentarios.

-ver imagen de la web-

## 1.10: unicafe step5
Continuemos refactorizando la aplicación. Extraiga los dos componentes siguientes:

- _Button_ para definir los botones utilizados para enviar comentarios
- _Statistics_ para mostrar una única estadística, por ejemplo, la puntuación media.

Para ser claros: el componente Statistics siempre muestra una única estadística, lo que significa que la aplicación utiliza varios componentes para representar todas las estadísticas:

```
const Statistics = (props) => {
  /// ...
  return(
    <div>
      <Statistic text="good" value ={...} />
      <Statistic text="neutral" value ={...} />
      <Statistic text="bad" value ={...} />
      // ...
    </div>
  )
}
```

El estado de la aplicación aún debe mantenerse en el componente raíz _App_.

## 1.11*: unicafe, paso 6
Muestra las estadísticas en una tabla HTML, de modo que su la aplicación se ve más o menos así:

-ver imagen de la web-

Recuerde mantener la consola abierta en todo momento. Si ve esta advertencia en su consola:

-ver imagen de la web-

Luego realice las acciones necesarias para que la advertencia desaparezca. Intente buscar en Google el mensaje de error si se queda atascado.

_Una fuente típica de un error Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.es la extensión de Chrome. Intente ir a chrome://extensions/e intente deshabilitarlos uno por uno y actualizar la página de la aplicación React; el error debería desaparecer eventualmente._

**¡Asegúrate de que a partir de ahora no veas ninguna advertencia en tu consola!**

## 1.12*: anécdotes, paso 1
El mundo de la ingeniería de software está lleno con anécdotas que destilan verdades atemporales de nuestro campo en breves frases.

Expanda la siguiente aplicación agregando un botón en el que se puede hacer clic para mostrar una anécdota aleatoria del campo de la ingeniería de software:


```
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)

  return (
    <div>
      {props.anecdotes[selected]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
```

Google te dirá cómo generar números aleatorios en JavaScript. Recuerde que puede probar la generación de números aleatorios, por ejemplo, directamente en la consola de su navegador.

Su aplicación finalizada podría verse así

-ver imagen de la web-

**ADVERTENCIA** create-react-app convertirá automáticamente su proyecto en un repositorio git a menos que cree su aplicación dentro de un repositorio git existente. **Lo más probable es que no desee que cada uno de sus proyectos sea un repositorio separado**, así que simplemente ejecute el comando rm -rf .git en la raíz de su aplicación.

# 1.13*: anecdotes, paso 2
Expande tu aplicación para que puedas votar por la anécdota mostrada.

-ver imagen de la web-

NB almacene los votos de cada anécdota en una matriz u objeto en el estado del componente. Recuerde que la forma correcta de actualizar el estado almacenado en estructuras de datos complejas como objetos y matrices es hacer una copia del estado.

Puede crear una copia de un objeto como este:

```
const points = { 0: 1, 1: 3, 2: 4, 3: 2 }

const copy = { ...points }
// increment the property 2 value by one
copy[2] += 1
```

O una copia de una matriz como esta:
```
const points = [1, 4, 6, 3]

const copy = [...points]
// increment the value in position 2 by one
copy[2] += 1
```

El uso de una matriz podría ser la opción más sencilla en este caso. Buscar en Google te proporcionará muchos consejos sobre cómo crear una matriz llena de ceros de la longitud deseada, como esto.

## 1,14*: anecdotes, paso 3
Ahora implemente la versión final de la aplicación que muestra la anécdota con el mayor número de votos

-ver imagen de la web-

Si se empatan varias anécdotas en el primer lugar, es suficiente con solo mostrar uno de ellos.
Este fue el último ejercicio de esta parte del curso y es hora de enviar tu código a GitHub y marcar todos tus ejercicios terminados en el sistema de envío de ejercicios.