/* eslint-disable react/prop-types */
import React from 'react'

const Boton = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

export default Boton
