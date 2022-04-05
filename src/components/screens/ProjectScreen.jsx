import {
	ExternalLinkIcon,
	GitHubIcon,
	ReactLogo,
	SassLogo,
} from "../../assets/svgs/icons"

export const ProjectScreen = ({
	title,
	image,
	icons,
	repoLink,
	deployLink,
}) => {
	const techIcons = {
		react: <ReactLogo size={38} color="#fff" />,
		sass: <SassLogo size={38} color="#fff" />,
	}
	return (
		<div className="project-screen__ctn">
			<h2>{title}</h2>
			<div
				className="project__image"
				style={{ backgroundImage: `url(${image})` }}
			>
				<div className="project-image__progress">En progreso</div>
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
