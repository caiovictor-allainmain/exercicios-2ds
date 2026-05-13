import "../../../src/styles/Profile.css";

export default function Profile({ nome, idade, profissao, foto }) {
  return (
    <div className="profile-card">
      <div>

        <img className="profile-card__photo" src={foto} alt={`Foto de ${nome}`} />

        <div/>
      </div>

    <div className="profile-card__info">
        <h2 className="profile-card__name">{nome}</h2>

        <span>{profissao}</span>
    <div className="profile-card__divider" />

        <p className="profile-card__age">

          <span>Idade</span>

          <span>{idade}</span>
        </p>
      </div>
    </div>
  )
}