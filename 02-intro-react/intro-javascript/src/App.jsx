import './App.css'
import ArraysArreglos from './basesJS/ArraysArreglos'
import AsyncAwait from './basesJS/AsyncAwait'
import DesectructuracionObjectos from './basesJS/DesectructuracionObjectos'
import DesestructuracionArreglos from './basesJS/DesestructuracionArreglos'
import Fetch from './basesJS/Fetch'
import Funciones from './basesJS/Funciones'
import ImportExport from './basesJS/ImportExport'
import ObjetosLiterales from './basesJS/ObjetosLiterales'
import OperadorTernario from './basesJS/OperadorTernario'
import Promesas from './basesJS/Promesas'
import TemplateString from './basesJS/TemplateString'
import VariablesConstante from './basesJS/VariablesConstante'

function App() {

  return (
    <>
      <VariablesConstante />
      <TemplateString />
      <ObjetosLiterales />
      <ArraysArreglos />
      <Funciones />
      <DesectructuracionObjectos />
      <DesestructuracionArreglos />
      <ImportExport />
      <Promesas />
      <Fetch />
      <AsyncAwait />
      <OperadorTernario />
    </>
  )
}

export default App
