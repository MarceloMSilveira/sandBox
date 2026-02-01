import Input from "./Input"

export default function Login() {
  return (
    <div>
      <h1>Hello:</h1>
      <form className="form">
        <Input type="text" placeholder="What's your name?"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}