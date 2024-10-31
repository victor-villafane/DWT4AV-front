import React,{ useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ListadoPeliculas from '../components/Peliculas/ListadoPeliculas'
const Home = () => {
    const navigate = useNavigate()
    const [peliculas, setPeliculas] = useState([])

    useEffect( () => {
        fetch("http://localhost:2025/api/peliculas", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        })
        .then( response => {

            if( response.status >= 300  ) 
                navigate("/login")

            return response.json()
        } )
        .then( data => setPeliculas(data) )
        .catch( error => navigate("/login") )
    },[] )

    return (
        <ListadoPeliculas listado={peliculas} />
    )
}

export default Home