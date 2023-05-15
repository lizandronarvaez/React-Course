// eslint-disable-next-line no-unused-vars
import React from 'react'

const VariablesConstante = () => {
    // NO CAMBIA EL VALOR NI SE PUEDE REASIGNAR
    const nombre = "Lizandro"
    // VARIABLE MODIFICABLE
    let valorVariable = 10;
    // SI SE QUIERE REASIGNAR SOLO SE ESCRIBE EL NOMBRE DE LA VARIABLE
    valorVariable = 11;

    // condicional de una variable

    if (valorVariable !== 11) {
        const nombre = "Narvaez";
        return <p>{nombre}</p>
    } else {
        return (
            <>  
                <h1>Variables y Constantes</h1>
                <p>Esto es una constante {nombre}</p>
                <p>Esto es una variable {valorVariable}</p>
            </>
        )
    }

}

export default VariablesConstante