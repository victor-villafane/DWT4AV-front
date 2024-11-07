import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as servicePelicula from '../../services/peliculas.service'
const DetallePelicula = () => {

    const [pelicula, setPelicula] = useState({})
    const { id } = useParams()

    useEffect( () => {
        servicePelicula.getPelicula( id )
        .then( pelicula => {
            setPelicula( pelicula )
        })
    } )

    return (
        <div className="card" style={{ width: "100%" }} >
        <img src={ pelicula.img_link } className="card-img-top" alt="Pulp Fiction" />
        <div className="card-body">
            <h5 className="card-title">{ pelicula.name }</h5>
            <p className="card-text"><strong>Año:</strong> {pelicula.year}</p>
            <p className="card-text"><strong>Duración:</strong> {pelicula.duration}</p>
            <p className="card-text"><strong>Género:</strong> { pelicula.genre }</p>
            <p className="card-text"><strong>Certificado:</strong> {pelicula.certificate}</p>

            <div className="my-3">
                <h6>Director</h6>
                <p className="card-text">{ pelicula.director_name }</p>
            </div>

            <div className="my-3">
                <h6>Escritores</h6>
                <p className="card-text">{ pelicula.writter_name }</p>
            </div>

            <div className="my-3">
                <h6>Elenco</h6>
                <p className="card-text">{ pelicula.cast_name }</p>
            </div>

            <div className="my-3">
                <h6>Clasificación IMDb</h6>
                <p className="card-text">⭐ {pelicula.imdb_rating}({ pelicula.imbd_votes } votos)</p>
            </div>

            <Link to={"pelicula/" + pelicula._id} className="btn btn-primary">Ver detalle</Link>
        </div>
    </div>
    )
}

export default DetallePelicula