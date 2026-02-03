import Input from "./Input"
import { useState } from "react"

export default function Login() {
  
  let [isMouseOver, setIsMouseOver] = useState(false)
  let [fullName, setFullName] = useState({
    fName:'',
    lName:''
  })
  
  
  function mouseOver() {
    setIsMouseOver(true)
  }

  function mouseLeave() {
    setIsMouseOver(false)
  }

  function tratarOnChangeFNameInput(evt) {
    setFullName(
      {...fullName,
        fName : evt.target.value
      })
  }

  function tratarOnChangeLNameInput(evt) {
    setFullName(
      {...fullName,
        lName : evt.target.value
      })
  }

  // function tratarClickDoBotao(evt) {
  //   evt.preventDefault()
  //   setUserName2(userName)
  // }

  return (
    <div>
      <h1>Hello: {fullName.fName} {fullName.lName}</h1>
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