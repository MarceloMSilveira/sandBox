import './App.css'
import Card from './components/Card'

function App() {
  const dadosDosContatos = [
  {
    nome: "Beyonce",
    img: {
      src: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      alt: "avatar_img"
    },
    celular: "+123 456 789",
    email: "b@beyonce.com"
  },
  {
    nome: "Jack Bauer",
    img: {
      src: "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      alt: "avatar_img"
    },
    celular: "+987 654 321",
    email: "jack@nowhere.com"
  },
  {
    nome: "Chuck Norris",
    img: {
      src: "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
      alt: "avatar_img"
    },
    celular: "+918 372 574",
    email: "gmail@chucknorris.com"
  }
];

  return (
    <>
      <h1>Props Study App</h1>
      <div>
        <h2>My Contacts</h2>

        <Card 
          nome = {dadosDosContatos[0].nome}
          imgSrc = {dadosDosContatos[0].img.src}
          imgAlt = {dadosDosContatos[0].img.alt}
          celular = {dadosDosContatos[0].celular}
          email = {dadosDosContatos[0].email}
        />

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
