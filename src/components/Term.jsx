export default function Term({icone, nomeIcone, descricao}) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={nomeIcone}>
          {icone}
        </span>
        <span>{nomeIcone}</span>
      </dt>
      <dd>
        {descricao}
      </dd>
    </div>
  )
}