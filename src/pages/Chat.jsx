import React,{ useState } from 'react'
import socket from '../services/socket.service.js'

const Chat = () => {
    const [ mensajes, setMensajes ] = useState([])
    const [ mensaje, setMensaje ] = useState("")

    socket.on( "respuesta", () => {
        console.log("Conectado al servidor")
    } )

    socket.on( "chat mensaje", (recibido) => {
        setMensajes( () => [...mensajes, recibido] )
    } )

    const sendMessage = () => {
        socket.emit("chat mensaje", mensaje)
    }

    console.log(mensajes)

    return (
        <div>
            <ul>
                {
                    mensajes.map( (m, index) => (
                        <li key={index}>{m}</li>
                    ) )
                }
            </ul>
            <input type="text" onChange={ (e) => setMensaje(e.target.value) } />
            <button onClick={sendMessage} >Enviar</button>
        </div>
    )
}

export default Chat