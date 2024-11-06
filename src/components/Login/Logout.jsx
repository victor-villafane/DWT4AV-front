import React, { useContext } from 'react'
import { Navigate } from "react-router-dom"
import {SessionContext} from '../../contexts/session.context'

const Logout = () => {
    // localStorage.clear()
    const { onLogout } = useContext(SessionContext)
    onLogout()
    return <Navigate to="/login" />
}

export default Logout