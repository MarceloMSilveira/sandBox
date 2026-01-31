import Input from "./Input";
export default function Register() {
  return (
      <div>
        <h1>Registre-se no Sistema:</h1>
        <form className="form">
          <Input type="text" placeholder="Username"/>
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirme Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    )
}