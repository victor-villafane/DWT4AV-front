import React,{ useEffect, useState } from 'react'

const Home = () => {

    useEffect( () => {
        fetch("http://localhost:2025/api/peliculas", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        })
        .then( response => response.json() )
        .then( data => console.log(data) )
    },[] )

    return (
        <div>Home</div>
    )
}

export default Home