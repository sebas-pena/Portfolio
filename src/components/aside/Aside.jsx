import { useState } from "react"
import "./aside.css"

import {
  ArrowIcon,
  FilesIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../../assets/svgs/icons"

export const Aside = () => {
  const [openSection, setOpenSection] = useState(false)
  const [openFolder, setOpenFolder] = useState(false)
  const handleOpenSection = () => setOpenSection(!openSection)
  const handleOpenFolder = () => setOpenFolder(!openFolder)

  return (
    <aside>
      <div className="aside__social">
        <FilesIcon size={23} />
        <InstagramIcon size={23} />
        <GitHubIcon size={23} />
        <LinkedinIcon size={23} />
      </div>
      <div className="aside__explorer-ctn">
        <div className="aside__explorer-header">
          <h2>Explorer</h2>
        </div>
        <div className={"aside__section " + (openSection ? "open" : "")}>
          <button
            className="aside__section-header "
            onClick={handleOpenSection}
          >
            <ArrowIcon size={10} />
            <h2>PORTFOLIO</h2>
          </button>
          <div className="aside__section-folder">
            <button
              className={"aside__folder-header " + (openFolder ? "open" : "")}
              onClick={handleOpenFolder}
            >
              <ArrowIcon size={10} />
              <h3>ALGO</h3>
            </button>
            <div className="aside__folder-scope"></div>
            <button className="aside__folder-file">
              <GitHubIcon size={12} />
              <p>Algo 2</p>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
