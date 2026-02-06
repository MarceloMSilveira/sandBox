import './App.css'
import { useState } from 'react'
import Form from './components/Form'

function App() {
  
  let [inputContent, setInputContent] = useState('')
  let [toDoList, setToDoList] = useState([])

  const tratarInput = evt => setInputContent(evt.target.value)
  const btnClick = () => setToDoList([...toDoList, inputContent])

  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Form 
          tratarChangeInput = {tratarInput}
          tratarBtnClick = {btnClick}
      ></Form>
      <div>
        <ul>
          {toDoList.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App
