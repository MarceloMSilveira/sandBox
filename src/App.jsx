import './App.css'
import { useState } from 'react'

function App() {
  
  let [inputContent, setInputContent] = useState('')
  let [toDoList, setToDoList] = useState([])

  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={evt=>setInputContent(evt.target.value)} type="text" />
        <button onClick={()=>setToDoList([...toDoList, inputContent])}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App
