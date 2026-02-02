import Input from "./Input"
import { useState } from "react"

export default function Login() {
  
  let [isMouseOver, setIsMouseOver] = useState(false)
  let [fName, setFName] = useState('')
  let [lName, setLName] = useState('')
  
  function mouseOver() {
    setIsMouseOver(true)
  }

  function mouseLeave() {
    setIsMouseOver(false)
  }

  function tratarOnChangeFNameInput(evt) {
    setFName(evt.target.value)
  }

  function tratarOnChangeLNameInput(evt) {
    setLName(evt.target.value)
  }

  // function tratarClickDoBotao(evt) {
  //   evt.preventDefault()
  //   setUserName2(userName)
  // }

  return (
    <div>
      <h1>Hello: {fName} {lName}</h1>
      <form className="form">
        <Input type="text" placeholder="What's your first name?" funcToCallBack={tratarOnChangeFNameInput}/>
        <Input type="text" placeholder="What's your last name?" funcToCallBack={tratarOnChangeLNameInput}/>
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
          //onClick={tratarClickDoBotao} 
          >
            Submit
        </button>
      </form>
    </div>
  )
}