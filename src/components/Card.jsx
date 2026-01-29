export default function Card({nome, imgSrc, imgAlt, celular, email}) {
    return (
        <div>
            <h3>{nome}</h3>
            <img
            src={imgSrc}
            alt={imgAlt}
            />
            <p>{celular}</p>
            <p>{email}</p>
        </div>
    )
}