import './card.css'

export default function Card({nome, imgSrc, imgAlt, celular, email}) {
    return (
        <div className='card'>
            <div className='top'>
                <h3 className='name'>{nome}</h3>
                <img className='circle-img'
                    src={imgSrc}
                    alt={imgAlt}
                />
            </div>
            <div className='bottom'>
                <p className='info'>{celular}</p>
                <p className='info'>{email}</p>
            </div>
        </div>
    )
}