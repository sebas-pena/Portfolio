export const PresentationScreen = ({
  firstLine,
  imageSrc,
  cvSrc,
  secondLine,
  mail,
}) => {
  return (
    <div className="presentation-screen__ctn">
      <div className="presentation-screen__main">
        <div>
          <h2>{firstLine}</h2>
          <p>{secondLine}</p>
        </div>
        <img src={imageSrc} alt="perfil" />
      </div>
      <div className="presentation-screen__buttons">
        <a className="presentation-screen__mail" href={`mailto://${mail}`}>
          Contacto
        </a>
        <a
          className="presentation-screen__cv"
          href={cvSrc}
          download="Pablo Peña"
        >
          Descargar CV
        </a>
      </div>
    </div>
  )
}
