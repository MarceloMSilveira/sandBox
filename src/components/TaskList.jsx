import ListItem from "./ListItem"
export default function TaskList({toDoList, clickItem}) {
  return (
    <ul>
      {toDoList.map((item, index) => <ListItem key={index} item={item} clickItem={clickItem} id={index}/>)}
    </ul>
  )
}