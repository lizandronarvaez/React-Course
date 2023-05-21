// import React from 'react'
import PropTypes from 'prop-types'

const FirtsApp = ({ title, nombre }) => {
    return (
        <>
            <h1>CURSO: <span>{title}</span></h1>
            <p>{nombre}</p>
        </>
    )
}
// Declaracion de props
FirtsApp.propTypes = {
    title: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired
}

// Props por defecto en caso de undefined
FirtsApp.defaultProps = {
    nombre: "No hay ningun alumno",
    title: "No hay curso disponible"
}
export default FirtsApp