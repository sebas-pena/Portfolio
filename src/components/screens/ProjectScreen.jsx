import {
	ExternalLinkIcon,
	GitHubIcon,
	ReactLogo,
	SassLogo,
	JavaScriptLogo,
} from "../icons/icons"

export const ProjectScreen = ({
	title,
	image,
	icons,
	repoLink,
	deployLink,
	finished,
}) => {
	const techIcons = {
		react: <ReactLogo size={38} color="#fff" />,
		sass: <SassLogo size={38} color="#fff" />,
		javascript: <JavaScriptLogo size={47} />,
	}
	return (
		<div className="project-screen__ctn">
			<h2>{title}</h2>
			<div
				className="project__image"
				style={{ backgroundImage: `url(${image})` }}
			>
				{!finished ? (
					<div className="project-image__progress">En progreso</div>
				) : null}
			</div>
			<div className="project-screen__links">
				<a className="project__link-github" target="_blank" href={repoLink}>
					<GitHubIcon size={14} color="#333333" />
					<span> Repositorio</span>
				</a>
				<a className="project__link-page" target="_blank" href={deployLink}>
					<ExternalLinkIcon size={14} color="#ffffff" />
					<span> Página</span>
				</a>
			</div>
			<div className="project-screen__tech">
				{icons.map((tech, index) => (
					<div key={tech + index} className={`tech__icon ${tech}`}>
						{techIcons[tech]}
					</div>
				))}
			</div>
		</div>
	)
}
