import ListItem from "./ListItem"
export default function TaskList({toDoList}) {
  return (
    <ul>
      {toDoList.map((item, index) => <ListItem key={index} item={item} />)}
    </ul>
  )
}