export default function Input({type,placeholder, myFunc, value}) {
  return (
    <input 
      onChange = {myFunc} 
      type = {type} 
      placeholder = {placeholder} 
      value={value}
    />
  )
}