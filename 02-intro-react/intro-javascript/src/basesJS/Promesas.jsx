/* eslint-disable no-unused-vars */
import React from 'react'
import { getHeroeById } from './ImportExport'
const Promesas = () => {
    console.log("Buscando personaje....")
    const retornaHeroe = new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(1);
            heroe ?
                resolve(heroe)
                :
                reject("Personaje no encontrado con ese ID")
        }, 3000)

    })

    retornaHeroe
        .then(resolve => {
            console.log("Personaje encontrado:")
            console.log(resolve)
        })
        .catch(error => console.warn(error))


    return (
        <>
            <h1>Promesas</h1>
        </>
    )
}

export default Promesas