import projectImg from "../../assets/images/meli-clon.png"

import "./projectScreen.css"

export const ProjectScreen = () => {
	return (
		<div className="project-screen__ctn">
			<h2>Project Name</h2>
			<div
				className="project-screen__images"
				style={{ backgroundImage: `url(${projectImg})` }}
			></div>
			<div className="project-screen__links">
				<a>Repositorio</a>
				<a>Pagina</a>
			</div>
			<div className="project-screen__tech"></div>
		</div>
	)
}
