// import CounterApp from "./01-useState/CounterApp"
// import CounterCustomHook from "./01-useState/CounterCustomHook"
// import FormularioNormal from "./02-useEffect/FormularioNormal"
// import FormularioCustomHook from "./02-useEffect/FormularioCustomHook"
// import Ecommerce from "./03-Multiple-Custom-Hooks/Ecommerce"
// import FocusScreen from "./04-useRef/FocusScreen"
// import Memorize from "./06-memos/Memorize"
// import CallBackHook from "./06-memos/CallBackHook";
// import { Padre } from "./07-tarea-memorize/Padre";
// import TodoAppList from "./08-useReducer/TodoAppList";
import MainApp from "./09-useContext/MainApp"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </>
  )
}

export default App
