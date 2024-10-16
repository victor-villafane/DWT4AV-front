import React, { useState } from 'react'

const Contador = () => {
  const [ acumulador, setAcumulador ] = useState(0)
//   const [ nombre, setNombre ] = useState("")
//https://react.dev/learn/responding-to-events

  const sumar = () => {
    setAcumulador( acumulador + 1 )
  }

  return (
    <button onClick={ sumar } >Sumar: { acumulador } </button>
    // <>
    //     <input onChange={ (e) => setNombre(e.target.value) } />
    //     { nombre }
    // </>
  )
}

export default Contador