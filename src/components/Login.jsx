import Input from "./Input"
import { useState } from "react"

export default function Login() {
  
  let [isMouseOver, setIsMouseOver] = useState(false)
  let [userName, setUserName] = useState('')
  let [userName2, setUserName2] = useState('')
  
  function mouseOver() {
    setIsMouseOver(true)
  }

  function mouseLeave() {
    setIsMouseOver(false)
  }

  function tratarOnChange(evt) {
    setUserName(evt.target.value)
  }

  function tratarClickDoBotao(evt) {
    evt.preventDefault()
    setUserName2(userName)
  }

  return (
    <div>
      <h1>Hello: {userName2}</h1>
      <form className="form">
        <Input type="text" placeholder="What's your first name?" />
        <Input type="text" placeholder="What's your last name?" />
        {/* <input 
          type="text" 
          placeholder="What's your name?"
          onChange={tratarOnChange}  
        /> */}
        <button  
          style={{backgroundColor: isMouseOver ? 'black' : 'white'}} 
          onMouseOver={mouseOver} 
          onMouseLeave={mouseLeave} 
          type="submit"
          onClick={tratarClickDoBotao} >
            Submit
        </button>
      </form>
    </div>
  )
}