export default function TaskList({toDoList}) {
  return (
    <ul>
      {toDoList.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  )
}