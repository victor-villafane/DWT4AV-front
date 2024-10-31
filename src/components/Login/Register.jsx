import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVerify, setPasswordVerify] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(password !== passwordVerify){
            alert("Las contraseñas no coinciden")
            return
        }
        const response = await fetch("http://localhost:2025/api/usuarios",{
            method: "POST",
            body: JSON.stringify({"email": email, "password": password, "passwordConfirm": passwordVerify}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if( response.status == 201 ){
            //Hacia donde quiero navegar
            // const login = await fetch("http://localhost:2025/api/usuarios/login",{
            //     method: "POST",
            //     body: JSON.stringify({"email": email, "password": password}),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })
            // const data = await login.json() 
            // localStorage.setItem('token', data.token)           
            // if(data.token){
            //     navigate('/')
            // }else{
            //     navigate('/login')
            // }
            navigate('/login')
        }else{
            setError("Error al registrar usuario")
        }
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleChangePasswordVerify = (event) => {
        setPasswordVerify(event.target.value)
    }

    const getInputClassNamePass = () => {
        return password !== passwordVerify ? "form-control is-invalid" : "form-control"
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <form 
          onSubmit={handleSubmit} 
          className="p-4 shadow-lg rounded" 
          style={{ width: '350px', backgroundColor: '#f9f9f9' }}
        >
          <h3 className="text-center mb-4 text-primary">Registrar Usuario</h3>
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
              className={  getInputClassNamePass() }
              id="password" 
              placeholder="Ingresa tu contraseña"
              onChange={handleChangePassword}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Repetir contraseña</label>
            <input 
              type="password" 
              className={  getInputClassNamePass() }
              id="passwordVerify" 
              placeholder="Ingresa tu contraseña nuevamente"
              onChange={handleChangePasswordVerify}
              required
            />
          </div>          
          <button type="submit" className="btn btn-primary w-100">Registrar!</button>
          <div className="text-center mt-3">
            <Link to="/login" className="text-decoration-none text-secondary">Ya tenes usuario?</Link>
          </div>
            {
            error && <div className="text-center mt-3">
                <p className='text-danger' >{error}</p>
            </div>
            }
        </form>
      </div>
    )
}

export default Register