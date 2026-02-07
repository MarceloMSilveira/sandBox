import Input from "./Input"
import Btn from "./Btn"
export default function Form({tratarChangeInput, tratarBtnClick, inputContent}) {
  
  return (
    <div className="form">
      <Input onChangeInput = {tratarChangeInput} inputContent = {inputContent}/>
      <Btn tratarBtnClick={tratarBtnClick}/>
    </div>
  )
}