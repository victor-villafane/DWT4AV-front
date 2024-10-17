import React, { useState, useEffect } from 'react'

const FetchList = () => {
  const [listado, setListado] = useState([])
  const [ page, setPage ] = useState(1)
  const getDatos = async(uri) => {
    const response = await fetch(uri)
    const datos = await response.json()
    setListado( datos )
    console.log( datos )
  }
//   getDatos()
  useEffect( () => {
    //mounted
    // getDatos(`https://rickandmortyapi.com/api/character/?page=${page}`)
    getDatos("http://localhost:2025/api/peliculas")
    return () => {
        console.log("UnMount")
    }
  }, [page] )

  const paginaSiguiente = () => {
    setPage( page + 1 )
    // getDatos( `https://rickandmortyapi.com/api/character/?page=${page}` )
  }

  const paginaAnterior = () => {
    if( page > 1 ) setPage( page - 1 )
    // getDatos( `https://rickandmortyapi.com/api/character/?page=${page}` )
  }


  return (
    <>
        {/* <button onClick={ getDatos } >Fetch</button> */}
        <button onClick={ paginaAnterior } >  Anterior {page} </button>
        <button onClick={ paginaSiguiente } >  Siguiente {page} </button>
        <ul>
        {
            listado.map( (personaje, indice) => {
                return <li key={indice} >{personaje.name}</li>
            } )
        }
        </ul>
    </>
  )
}

export default FetchList