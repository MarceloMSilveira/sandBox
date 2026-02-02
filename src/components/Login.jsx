import Input from "./Input"
import { useState } from "react"

export default function Login() {
  
  let [isMouseOver, setIsMouseOver] = useState(false)
  
  function mouseOver() {
    setIsMouseOver(true)
  }

  function mouseLeave() {
    setIsMouseOver(false)
  }

  return (
    <div>
      <h1>Hello:</h1>
      <form className="form">
        <Input type="text" placeholder="What's your name?"/>
        <button  style={{backgroundColor: isMouseOver ? 'black' : 'white'}} onMouseOver={mouseOver} onMouseLeave={mouseLeave} type="submit">Submit</button>
      </form>
    </div>
  )
}