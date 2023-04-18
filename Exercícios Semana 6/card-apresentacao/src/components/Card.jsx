import "./card.css"

export default function Card({usuario}){
  return (
    <div className="card">
      <img className="card-apresentacao" src={usuario.foto} alt={usuario.nome} />
      <div className="card-dados">
        <h1>{usuario.nome}</h1>
        <h2>Idade: {usuario.idade} anos</h2>
        <div className="card-social">
          <a href={usuario.github} target="_blank"><box-icon type='logo' name='github' color='white' size='md' title="GitHub"></box-icon></a>
          <a href={usuario.linkedin} target="_blank"><box-icon type='logo' name='linkedin' color='white' size='md' title="LinkedIn"></box-icon></a>
        </div>
      </div>
    </div>
  )
}
