import { useRef } from "react"

const FocusScreen = () => {

  const inputRef = useRef()
  console.log(inputRef)
  const onclick = () => {
    inputRef.current.select()
  }
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingresa un texto"
        className='form-control'
      />
      <button
        className="btn btn-primary mt-3"
        onClick={onclick}
      >
        setFocus
      </button>
    </>
  )
}

export default FocusScreen