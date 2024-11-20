import { useEffect, useState } from 'react'
import socket from '../services/socket.service.js'

const CharMultiUsuario = () => {

    const [username, setUsername] = useState("")
    const [login, setLogin] = useState(false)
    const [receiver, setReciver] = useState("")
    const [messages, setMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState("")

    const handleLogin = () => {
        setLogin(true)
        socket.emit("nuevo usuario", username)
    }

    const sendMessage = () => {
        if (currentMessage && receiver) {
            socket.emit('chat message', { message: currentMessage, to: receiver });
            setCurrentMessage('');
        }
    }

    useEffect( () => {
        socket.on("chat message", (recibido) => {
            setMessages( () => [...messages, recibido] )
        })
        return () => {
            socket.off("chat message")
        }
    }, [] )

    return (
        <div className='container' style={{ maxWidth: "600px" }} >
            {
                !login ? (
                    <div className="card mt-4">
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <button
                                className="btn btn-primary"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                )
                    : (
                        <div className="card mt-4">
                            <div className="card-body">
                                <h3 className='card-title mb-4' >Bienvenido, {username}</h3>
                                <div className="mb-3">
                                    <label htmlFor="receiver" className="form-label">Enviar a</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="receiver"
                                        value={receiver}
                                        onChange={(e) => setReciver(e.target.value)}
                                    />
                                </div>

                                <div className="messages-container mb-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    {messages.map((msg, index) => (
                                        <div key={index} className="card mb-2">
                                            <div className="card-body py-2">
                                                <h6 className="card-subtitle mb-1 text-muted">{msg.from}</h6>
                                                <p className="card-text">{msg.message}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="4"
                                        value={currentMessage}
                                        onChange={(e) => setCurrentMessage(e.target.value)}
                                    />
                                </div>

                                <button
                                    className="btn btn-primary"
                                    onClick={sendMessage}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default CharMultiUsuario