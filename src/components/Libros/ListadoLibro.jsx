import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ListadoLibro = () => {

    const [libros, setLibros] = useState([])

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
            .then(response => response.json())
            .then(data => setLibros(data.items || []))
    }, [])

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Harry Potter Books</h1>
            <div className="row">
                {
                    libros.map((libro) => (
                        <div className="col-md-4 mb-4" key={libro.id}>
                            <div className="card h-100">
                                <img
                                    src={libro.volumeInfo.imageLinks?.thumbnail}
                                    className="card-img-top"
                                    alt={libro.volumeInfo.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{libro.volumeInfo.title}</h5>
                                    <p className="card-text">Author: {libro.volumeInfo.authors?.[0]}</p>
                                    <Link to={`/libro/${libro.id}`} className="btn btn-primary">
                                        Ver detalle
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListadoLibro