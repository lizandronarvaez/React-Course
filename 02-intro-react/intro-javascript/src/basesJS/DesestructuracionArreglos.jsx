/* eslint-disable no-unused-vars */
import React from 'react'

const DesestructuracionArreglos = () => {

    // Tarea desestructuracion
    // 1º Declarar la funcion y las propiedades a retornar
    const useState = (valor) => {
        return [valor, () => console.log(`Hola ${valor}`)]
    }

    // 2º desestructurar las propiedades de la funcion y asignarle un valor
    const [nombre, setNombre] = useState("Lizandro");
    setNombre()
    // console.log(nombre)
    return (
        <>
            <h1>Desestructuracion de Arreglos,arrays,matrices</h1>
            {nombre === "Lizandro" ? "Tu eres Lizandro" : "Tu no eres Lizandro"}
        </>
    )
}

export default DesestructuracionArreglos