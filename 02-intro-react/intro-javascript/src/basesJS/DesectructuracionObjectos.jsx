/* eslint-disable no-unused-vars */
import React from 'react'

const DesectructuracionObjectos = () => {
    // Declaracion del objeto personaje
    const personaje = {
        nombre: "Tony Stark",
        edad: 50,
        traje: true
    }
    // Desestructuracion objecto personaje
    const { nombre: heroe, edad, traje } = personaje;

    const useContext = ({ nombre, edad, traje }) => {
        return {
            personajeNombre: nombre,
            edadPersonaje: edad,
            trajePersonaje: traje,
        }
    }

    const { personajeNombre } = useContext(personaje);
    // console.log(personajeNombre)
    return (
        <>
            <h1>Desestructuracion de Objetos</h1>
            <h3>Personajes</h3>
            <p>{heroe} <span>{traje ? "lleva traje" : "no lleva traje"}</span></p>
        </>
    )
}

export default DesectructuracionObjectos