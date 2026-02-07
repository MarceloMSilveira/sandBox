import { useState } from 'react'
import './listItem.css'
export default function ListItem({item}) {

  let [isDone,setIsDone] = useState(false)

  return (
    <li 
      style={isDone ? {textDecoration:'line-through'} : {textDecoration:'none'}}
      onClick={()=>isDone ? setIsDone(false) : setIsDone(true)}>{item}
    </li>
  )
}