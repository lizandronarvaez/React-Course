import { useState } from "react"

const useCounter = (defaultValue = 1) => {
    const [counter, setCounter] = useState(defaultValue);

    const addCounter = (value) => setCounter(counter + value)
    const resetCounter = () => setCounter(defaultValue)
    const subCounter = () => {
        counter <= 0 ?
            null
            : setCounter(counter - 1)
    }
    return {
        counter,
        addCounter,
        subCounter,
        resetCounter
    }
}


export default useCounter