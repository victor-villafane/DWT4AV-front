import React, { useState, useCallback, useImperativeHandle, useMemo, Profiler } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../../contexts/session.context'
import { login } from '../../services/auth.service'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const onLogin = useLogin()

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()

    login({ email, password })
      .then(usuario => {
        console.log(usuario)
        onLogin(usuario.token)
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })

  }, [login, email, password, onLogin, navigate])

  const handleChangeEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [])

  const handleChangePassword = useCallback((event) => {
    setPassword(event.target.value)
  }, [])

  const calculoComplejo = (num) => {
    console.log("Realizando calculo!")
    for (let indice = 0; indice < 1000000; indice++) { }
    return num * 3
  }

  const valorGuardado = useMemo(() => calculoComplejo(123), [])

  console.log(valorGuardado)

  const onRenderCallback = (id, phase, duracion) => {
    console.log(`Renderizado ${id} en fase ${phase} y tomo ${duracion}`)
  }

  return (
    <Profiler id="login" onRender={onRenderCallback}>
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
            <Link to="/register" className="text-decoration-none text-secondary">¿Olvidaste tu contraseña?</Link>
          </div>
        </form>
      </div>
    </Profiler>
  )
}

export default Login