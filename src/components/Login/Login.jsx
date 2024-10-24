import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:2025/api/usuarios/login",{
            method: "POST",
            body: JSON.stringify({"email": email, "password": password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <form 
          onSubmit={handleSubmit} 
          className="p-4 shadow-lg rounded" 
          style={{ width: '350px', backgroundColor: '#f9f9f9' }}
        >
          <h3 className="text-center mb-4 text-primary">Iniciar Sesión</h3>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Ingresa tu correo"
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Ingresa tu contraseña"
              onChange={handleChangePassword}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none text-secondary">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>
    )
}

export default Login