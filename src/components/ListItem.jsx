export default function ListItem({item, clickItem,id}) {

  return (
    <li 
      onClick={clickItem}
      id={id}
    >{item}
    </li>
  )
}