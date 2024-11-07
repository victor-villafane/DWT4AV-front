import { createContext, useContext, useState } from "react";

const SessionContext = createContext()

function useSession(){
    return useContext(SessionContext)
}

function useLogOut(){ 
    const { onLogout } = useSession()
    return onLogout
}

function useLogin(){
    const { onLogin } = useSession()
    return onLogin
}

function useToken(){
    const { token } = useSession()
    return token
}

function SessionProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token"))

    const onLogout = () => {
        localStorage.clear()
        setToken(null)
    }

    const onLogin = (jwt) => {
        localStorage.setItem("token", jwt)
        setToken(jwt)
    }

    return (
        <SessionContext.Provider value={{ token, onLogout, onLogin }}>
            {children}
        </SessionContext.Provider>

    )
}

export { SessionContext, SessionProvider, useSession, useLogOut, useLogin, useToken }