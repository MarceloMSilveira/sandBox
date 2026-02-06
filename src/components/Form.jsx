import Input from "./Input"
import Btn from "./Btn"
export default function Form({tratarChangeInput, tratarBtnClick}) {
  
  return (
    <div className="form">
      <Input onChangeInput = {tratarChangeInput} />
      <Btn tratarBtnClick={tratarBtnClick}/>
    </div>
  )
}