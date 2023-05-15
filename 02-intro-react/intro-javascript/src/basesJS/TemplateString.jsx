/* eslint-disable no-unused-vars */
import React from 'react'

const TemplateString = () => {
  // variables
  const nombreCurso = "ReactJs";
  const yearCurso = 2023;
  const objetivoCurso = "Desarrollador Web"
  // variables donde se incluyen con template strings
  let curso = `El curso es de ${nombreCurso}, empezé el curso el año ${yearCurso} y mi objetivo es ser un ${objetivoCurso}`

  // funcion como saludo
  const saludoCurso = (saludo) => {
    return `Hola soy Lizandro Narvaez, 
            y te muestro lo que estoy estudiando, 
            ${saludo}
            `
  }
  return (
    <>
    <h1>TemplateString ` `</h1>
      <p>{saludoCurso(curso)}</p>
    </>
  )
}

export default TemplateString