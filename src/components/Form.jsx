export default function Form ({tratarInput}) {
  return (
    <form>
      <input onChange={tratarInput} name="fName" placeholder="First Name" />
      <input onChange={tratarInput} name="lName" placeholder="Last Name" />
      <input onChange={tratarInput} name="email" placeholder="Email" />
      <button>Submit</button>
    </form>
  )
}


