import './App.css'
import Card from './components/Card'

function App() {
  const dadosDosContatos = [
    {
      nome: ,
      img: {
        src: , 
        alt:
      }, 
      celular: ,
      email: 
    }
  ]

  return (
    <>
      <h1>Props Study App</h1>
      <div>
        <h2>My Contacts</h2>

        <Card nome='Falcão'/>

        <h3>Jack Bauer</h3>
        <img
          src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
          alt="avatar_img"
        />
        <p>+987 654 321</p>
        <p>jack@nowhere.com</p>

        <h3>Chuck Norris</h3>
        <img
          src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
          alt="avatar_img"
        />
        <p>+918 372 574</p>
        <p>gmail@chucknorris.com</p>
      </div>
    </>
  )
}

export default App
