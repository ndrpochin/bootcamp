/* eslint-disable react/prop-types */
import React from 'react'

const Total = (props) => {
  const [
    { exercises: exercise1 },
    { exercises: exercise2 },
    { exercises: exercise3 }
  ] = props.course.parts
  return (
    <>
      <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
    </>
  )
}

export default Total
