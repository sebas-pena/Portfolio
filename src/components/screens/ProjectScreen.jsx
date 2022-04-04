import projectImg from "../../assets/images/meli-clon.png"
import {
  ExternalLinkIcon,
  GitHubIcon,
  ReactLogo,
  SassLogo,
} from "../../assets/svgs/icons"

import "./projectScreen.css"

export const ProjectScreen = () => {
  return (
    <div className="project-screen__ctn">
      <h2>Clon de Mercado Libre</h2>
      <div className="project-images__ctn">
        <div className="project-screen__tech">
          <div className="tech__icon react">
            <ReactLogo size={38} color="#fff" />
          </div>
          <div className="tech__icon sass">
            <SassLogo size={38} color="#fff" />
          </div>
        </div>

        <div
          className="project__image"
          style={{ backgroundImage: `url(${projectImg})` }}
        >
          <div className="project-image__progress">En progreso</div>
        </div>
      </div>
      <div className="project-screen__links">
        <a
          className="project__link-github"
          target="_blank"
          href="https://github.com/sebas-pena/meli-clone"
        >
          <GitHubIcon size={14} color="#333333" />
          <span> Repositorio</span>
        </a>
        <a
          className="project__link-page"
          target="_blank"
          href="https://meli-clon-pp.herokuapp.com/"
        >
          <ExternalLinkIcon size={14} color="#ffffff" />
          <span> Página</span>
        </a>
      </div>
    </div>
  )
}
