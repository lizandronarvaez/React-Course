/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback((value) => {
        setCounter(counterValue=> counterValue + value)
    }, [],
    )

    return (
        <>
            <h1>useCallBack Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </>
    )
}

export default CallBackHook