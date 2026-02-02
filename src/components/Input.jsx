export default function Input({type,placeholder, funcToCallBack}) {
  return (
    <input 
      onChange = {funcToCallBack} 
      type = {type} 
      placeholder = {placeholder}
    />
  )
}