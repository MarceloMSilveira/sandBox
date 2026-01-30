import './card.css'
import Image from './Image'
import Detail from './detail'

export default function Card({nome, imgSrc, imgAlt, celular, email}) {
    return (
        <div className='card'>
            <div className='top'>
                {/* <p>{newKey}</p> */}
                <h3 className='name'>{nome}</h3>
                <Image src={imgSrc} alt={imgAlt}/>
            </div>
            <div className='bottom'>
                <Detail info={celular} />
                <Detail info={email} />
            </div>
        </div>
    )
}