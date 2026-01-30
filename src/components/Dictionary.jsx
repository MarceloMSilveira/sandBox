import Term from "./Term"
import emojipedia from "../assets/emojipedia"

export default function Dictionary() {
  return (
    <dl className="dictionary">
      
      {emojipedia.map(emoji => <Term key={emoji.id} icone= {emoji.emoji} nomeIcone= {emoji.name} descricao={emoji.meaning}/>)}
      
    </dl>
  )
}