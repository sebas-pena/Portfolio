import {
	JavaScriptLogo,
	NextJsLogo,
	NodeLogo,
	ReactLogo,
	ReduxIcon,
	SassLogo,
} from "../icons/icons"

export const AboutMeScreen = ({ imageSrc }) => {
	return (
		<div className="aboutme__ctn">
			<h2>Sobre Mi</h2>
			<img src={imageSrc} />
			<div className="aboutme__description">
				<p>
					Mi nombre es Pablo, tengo 19 años y me apasiona el mundo de la
					tecnología, sobre todo el aspecto visual y el lado del cliente, por
					eso me enfoqué en el desarrollo front-end.
				</p>
				<p>
					Mi interés por la programación empezó desde chico, pero no fue sino
					hasta los 16 años que decidí comenzar a aprender Python con un libro (
					Python for kids 📙 ), posteriormente he utilizado Java y a partir de
					los 18 conocí en el mundo de JavaScript y el desarrollo web.
				</p>
				<p>
					Actualmente, estoy estudiando Ingeniería en Computación (UDELAR), y
					aprendiendo de forma autodidacta.
				</p>
			</div>
			<h3>Habilidades:</h3>
			<div className="aboutme__skills">
				<div className="aboutme__icon" style={{ backgroundColor: "#61DAFB" }}>
					<ReactLogo size={48} color="#fff" />
				</div>
				<div className="aboutme__icon" style={{ backgroundColor: "#CD6799" }}>
					<SassLogo size={48} color="#fff" />
				</div>
				<div className="aboutme__icon" style={{ backgroundColor: "#8DC949" }}>
					<NodeLogo size={48} color="#fff" />
				</div>
				<div className="aboutme__icon">
					<JavaScriptLogo size={47} />
				</div>
				<div className="aboutme__icon" style={{ backgroundColor: "#7045b1" }}>
					<ReduxIcon size={40} color="#ffffff" />
				</div>
			</div>
		</div>
	)
}
