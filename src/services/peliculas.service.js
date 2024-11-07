import { call } from "./api.service"

export async function getPeliculas(){
    return call( { uri: "peliculas" } )
}

export async function getPelicula( id ){
    return call( { uri: `peliculas/${id}` } )
}