import React, { useState } from 'react'
import "./listItem.css"
import { Button } from 'react-bootstrap'
const ListItem = ({item}) => {
  const [ contador, setContador ] = useState(0)
  const miFuncionClick = () => {
    console.log('Click', contador)
    setContador(contador + 1)
  }

  return (
    <li className='listItem' >
        {item.name} - { item.email }
        <Button onClick={miFuncionClick} >Click {contador}</Button> 
    </li>
  )
}

export default ListItem