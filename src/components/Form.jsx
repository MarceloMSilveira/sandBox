export default function Form({tratarChangeInput, tratarBtnClick}) {
  
  return (
    <div className="form">
      <input onChange={tratarChangeInput} type="text" />
      <button onClick={tratarBtnClick}>
        <span>Add</span>
      </button>
    </div>
  )
}