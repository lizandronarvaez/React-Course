/* eslint-disable no-unused-vars */
import React from 'react'

const Fetch = () => {
    const urlGet = "https://rickandmortyapi.com/api/character";
    const peticion = fetch(urlGet);
    peticion
        .then(response => response.json())
        .then(({ results }) => results)
        .catch(error => console.log(error))

    return (
        <>
            <h1>Promesas con Fetch</h1>
        </>
    )
}

export default Fetch