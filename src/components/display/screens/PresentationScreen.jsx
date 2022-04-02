import "./presentationScreen.css"
import curriculum from "../../../assets/curriculum.pdf"
import perfilImg from "../../../assets/images/perfil.png"
export const PresentationScreen = () => {
	return (
		<div className="presentation-screen__ctn">
			<div className="presentation-screen__main">
				<div>
					<h2>
						Hola, soy <span>Pablo Peña</span>
					</h2>
					<p>Desarrollador Front-End</p>
				</div>
				<img src={perfilImg} alt="perfil" />
			</div>
			<div className="presentation-screen__buttons">
				<a
					className="presentation-screen__mail"
					href="mailto://sebapena2002@gmail.com"
				>
					Contacto
				</a>
				<a
					className="presentation-screen__cv"
					href={curriculum}
					download="Pablo Peña"
				>
					Descargar CV
				</a>
			</div>
		</div>
	)
}
