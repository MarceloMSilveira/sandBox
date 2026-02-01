import { useState } from "react"

function App() {
  
  const startTime = new Date().toLocaleTimeString("pt-BR")
  let [time, setTime] = useState(startTime)

  function timeAdjust() {
    setInterval( () => {
      const newTime = new Date().toLocaleTimeString("pt-Br")
      setTime(newTime)
    } ,1000)
  }

  timeAdjust()

  return (
    <>
      <div className="container">
        <h1>{time}</h1>
      </div>
    </>
  )
}

export default App
