/* eslint-disable no-unused-vars */
import React from 'react'

const Funciones = () => {
    // Esto es una funcion simple
    const saludar = nombre => `Hola, ${nombre}`
    // Esto es una funcion compleja
    const saludar2 = (nombre) => {
        return `Hola,${nombre}`
    }

    // FUNCION pero con un return implicito sin tener que declararlo
    const getUser = nombre => (
        {
            uid: "abc1993",
            username: nombre
        }
    )

    return (
        <>
            <h1>Funciones</h1>
            {console.log(getUser("Lizandro Narvaez"))}
        </>
    )
}

export default Funciones