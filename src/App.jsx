import React from "react"
import Hola from "./components/Hola"
function App() {
//---------------------------------------
console.log("HOLA DESDE REACT")
const nombre = "Charlie"
const usuarios = [
  { id: 1, name: 'Ana García', email: 'ana@example.com' },
  { id: 2, name: 'Carlos López', email: 'carlos@example.com' },
  { id: 3, name: 'Elena Martínez', email: 'elena@example.com' },
  { id: 4, name: 'David Rodríguez', email: 'david@example.com' },
]
//---------------------------------------
  return (
    <>
      <ul>
        { usuarios.map( (usuario, indice) => <li key={indice} >{usuario.name} - { usuario.email }</li> ) }  
      </ul>
      <p>Recorriendo usuarios</p>
      < Hola name={nombre} lastName={"Mio"} />
    </>
  )
}

export default App
