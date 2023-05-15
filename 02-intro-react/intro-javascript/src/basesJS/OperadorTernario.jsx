/* eslint-disable no-unused-vars */
import React from 'react'

const OperadorTernario = () => {
    // Vmos a comprobar si el usuario esta logeado o no

    const usuarioLogeado = true;
    // Una forma de operador ternario

    // usuarioLogeado ?
    //     console.log("Usuario logeado") :
    //     console.log("No haz iniciado sesion aun")


    // Segunda forma de operador ternario
    const usuario = !usuarioLogeado && "Usuario logeado"

    console.log(usuario)
    return (
        <>
            <h1>Operador Ternario </h1>
        </>
    )
}

export default OperadorTernario