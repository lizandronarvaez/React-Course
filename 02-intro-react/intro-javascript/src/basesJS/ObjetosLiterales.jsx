/* eslint-disable no-unused-vars */
import React from 'react'

const ObjetosLiterales = () => {
    const desarrollo = {
        frontend: "JavaScript",
        backend: "Nodejs",
        librerias: {
            Primera: "ReactJS",
            Segunda: "VueJS"
        } 
    }

    // Si queremos crear un nuevo objeto sin modificar el anterior
    const desarrolloFrontend = {...desarrollo}
    desarrolloFrontend.frontend="html,css,javascript"
    console.log(desarrollo)
    console.log(desarrolloFrontend)

    return (
        <>
            <h1>Objetos Literales</h1>
        </>
    )
}

export default ObjetosLiterales