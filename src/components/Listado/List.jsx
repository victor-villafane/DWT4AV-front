import React from 'react'
import ListItem from './ListItem'
import "./list.css"
const List = ( {children, listadoUsuarios, ...rest} ) => {
  return (
    <ul className='list' {...rest} >
        { children }
        { listadoUsuarios.map( (usuario, indice) => <ListItem key={indice} item={usuario} /> ) }
    
    </ul>
  )
}

export default List