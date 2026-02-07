import ListItem from "./ListItem"
export default function TaskList({toDoList}) {
  return (
    <ul>
      {toDoList.map((item, index) => <ListItem index={index} item={item} />)}
    </ul>
  )
}