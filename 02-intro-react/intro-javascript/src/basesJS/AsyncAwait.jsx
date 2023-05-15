/* eslint-disable no-unused-vars */
import React from 'react'

const AsyncAwait = () => {

    const getPersonajes = async () => {

        const personajesApi = await fetch("https://rickandmortyapi.com/api/character")
        const {results} = await personajesApi.json()
        // console.log(results)
    }

    getPersonajes()

    return (
        <>
            <h1>Async / Await </h1>
        </>
    )
}

export default AsyncAwait