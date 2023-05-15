/* eslint-disable no-unused-vars */
import React from 'react'

const ArraysArreglos = () => {
    // Declarar un arreglo
    const arrayPrueba = [1,2,3,4];
    
    // copiar un arreglo y añadir nuevos push sin modificar el anterior
    const arrayPrueba2 = [...arrayPrueba,5];

    const arrayPrueba3=arrayPrueba2.map(x=> x / 2 )
    // console.log(`Arreglo sin modificar`)
    // console.log(arrayPrueba)
    // console.log(`Arreglo modificado`)
    // console.log(arrayPrueba2)
    // console.log(arrayPrueba3)
    return (
        <>
            <h1>Arregles - Arrays - Matrices</h1>
        </>
    )
}

export default ArraysArreglos