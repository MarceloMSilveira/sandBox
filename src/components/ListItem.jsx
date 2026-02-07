export default function ListItem({item, clickItem}) {

  return (
    <li 
      onClick={clickItem}>{item}
    </li>
  )
}