import './App.css'
import { useState } from 'react'
import Form from './components/Form'
import TaskList from './components/TaskList'

function App() {
  
  let [inputContent, setInputContent] = useState('')
  let [toDoList, setToDoList] = useState([])

  const tratarInput = evt => setInputContent(evt.target.value)
  const btnClick = () => {
    setToDoList([...toDoList, inputContent])
    setInputContent("")
  }
  const tratarItemListClick = evt => setToDoList(toDoList.filter((item, index)=> index != evt.target.id))
  

  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Form 
          tratarChangeInput = {tratarInput}
          tratarBtnClick = {btnClick}
          inputContent = {inputContent}
      />
      <div>
        <TaskList toDoList = {toDoList} clickItem={tratarItemListClick}/>
      </div>
    </div>
  )
}

export default App
