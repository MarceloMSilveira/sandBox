export default function Input({onChangeInput, inputContent}) {
  return (
    <input onChange={onChangeInput} type="text" value={inputContent}/>
  )  
}


