import { useState } from "react";
import useCounter from "../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {

    const { counter, addCounter} = useCounter(0);
    const [show, setShow] = useState(true);
    return (
        <>
            <h1>Hooks useMemo</h1>
            <hr />
            <div>
                <h2>Contador <Small value={counter} /></h2>
                <button
                    className='btn btn-primary'
                    onClick={() => addCounter(1)}
                >
                    Incrementar
                </button>
                <button
                    className="btn btn-secondary m-1"
                    onClick={()=>setShow(!show)}
                >
                   Show/SetShow {JSON.stringify(show)}
                </button>
            </div>
        </>
    )
}

export default Memorize