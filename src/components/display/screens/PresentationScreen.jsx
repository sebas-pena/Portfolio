import { useContext } from "react"

import { AppContext } from "../../../context/AppContext"
import "./presentationScreen.css"
export const PresentationScreen = () => {
	const context = useContext(AppContext)
	console.log(context)
	console.log(context[0].folders[0].files[0])
	const perfilImg = context[0].folders[0].files[0].screenConfig.imageSrc
	const curriculum = context[0].folders[0].files[0].screenConfig.cvSrc
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
