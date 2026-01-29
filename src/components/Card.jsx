import './card.css'
import Image from './Image'

export default function Card({nome, imgSrc, imgAlt, celular, email}) {
    return (
        <div className='card'>
            <div className='top'>
                <h3 className='name'>{nome}</h3>
                <Image src={imgSrc} alt={imgAlt}/>
            </div>
            <div className='bottom'>
                <p className='info'>{celular}</p>
                <p className='info'>{email}</p>
            </div>
        </div>
    )
}