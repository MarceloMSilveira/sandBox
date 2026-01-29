import './card.css'

export default function Card({nome, imgSrc, imgAlt, celular, email}) {
    return (
        <div className='card'>
            <div className='top'>
                <h3 className='name'>{nome}</h3>
            </div>
            <div>
                <img className='circle-img'
                    src={imgSrc}
                    alt={imgAlt}
                />
            </div>
            <div className='bottom'>
                <p>{celular}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}