import React from "react"
import Hola from "./components/Hola"
import List from "./components/Listado/List"
import Contador from "./components/Contador/Contador"
import FetchList from "./components/Fetch/FetchList"
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
const cssProperties = { color: "blue", backgroundImage: "url('https://picsum.photos/200/300')" }
  return (
    <>
      <List listadoUsuarios={usuarios} style={cssProperties} className="" >
        {/* TODO LO QUE ENVIE ENTRE SUS ESTIQUETAS TERMINA EN CHILDREEN */}
        <h1>HOLA DESDE APP.JS</h1>
      </List>
      <p>Recorriendo usuarios</p>
      < Hola name={nombre} lastName={"Mio"} />
      <Contador></Contador>
      <FetchList></FetchList>
    </>
  )
}

export default App
