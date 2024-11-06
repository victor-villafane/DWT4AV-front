import { createContext, useState } from "react";

const SessionContext = createContext()

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

export { SessionContext, SessionProvider }