import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {SessionContext} from "../../contexts/session.context"
const NavBar = () => {

    const { token } = useContext(SessionContext)
    
    console.log(token)

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MiApp</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarNav">
                    <ul className='navbar-nav' >
                        {
                            !token
                                ? <>
                                    <li className='nav-item' >
                                        <Link className='nav-link' to="/login">login</Link>
                                    </li>
                                    <li className='nav-item' >
                                        <Link className='nav-link' to="/register">register</Link>
                                    </li>
                                </>
                                : <>
                                    <li className='nav-item' >
                                        <Link className='nav-link' to="/">home</Link>
                                    </li>
                                    <li className='nav-item' >
                                        <Link className='nav-link' to="/logout">logout</Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar