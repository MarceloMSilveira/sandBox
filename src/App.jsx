import { useState } from "react"

function App() {
  
  let [counter, setCounter] = useState(0)

  return (
    <>
      <div className="container">
        <h1>SET TIME EXERCISE</h1>
        <button 
          onClick={()=> {
            console.log(counter)
            const newValue = counter + 1;
            setCounter(newValue)
          }}>
          +
        </button>
        <button onClick={ () => {
          const newValue = counter - 1;
          setCounter (newValue);
          } }>
          -
        </button>
      </div>
    </>
  )
}

export default App
