import './App.css'
import Card from './components/Card'
import Image from './components/Image';

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

  const leaderImgSrc = '../public/eu.jpg';
  const leaderImgAlt = 'Proj Leader Img'

  return (
    <>
      <h1>Props Study App</h1>
      <div>
        <h2>My Contacts:</h2>
        <Image src={leaderImgSrc} alt={leaderImgAlt} />
        
        {
          dadosDosContatos.map(
            (contato, index)=>{
              const card = <Card
                key={index}
                nome = {contato.nome}
                imgSrc = {contato.img.src}
                imgAlt = {contato.img.alt}
                celular = {contato.celular}
                email = {contato.email}
              />
              return card;
            }
          )
        }
      </div>
    </>
  )
}

export default App
