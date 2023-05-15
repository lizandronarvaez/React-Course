/* eslint-disable no-unused-vars */
import React from 'react'
import Heroes from "../data/heroes"
// eslint-disable-next-line react-refresh/only-export-components
const ImportExport = () => {

    // BUscar el heroe por su id
    // Metodo find() devuelve un valor su es true, sino no devuelve nada
    const getHeroeById = id => Heroes.find(heroe => heroe.id === id);

    // Buscar los heroes por su owner
    // Metodo filter, devuelve varios valores si el valor es true
    const getHeroeByOwner = owner => Heroes.filter(heroe => heroe.owner.toLowerCase() === owner.toLowerCase());

    // console.log(getHeroeById(4))
    // console.log(getHeroeByOwner("dc"))

    return (
        <>
            <h1>Import/Export Modules</h1>
        </>
    )
}

const getHeroeById = id => Heroes.find(heroe => heroe.id === id);

export {
    ImportExport as default,
    getHeroeById
}