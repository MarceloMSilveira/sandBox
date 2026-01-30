export default function Term({icone, nomeIcone, titulo, descricao}) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={nomeIcone}>
          {icone}
        </span>
        <span>{titulo}</span>
      </dt>
      <dd>
        {descricao}
      </dd>
    </div>
  )
}