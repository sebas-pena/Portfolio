import { useState, useContext, useRef, useEffect } from "react"
import { Folder } from "./Folder"
import { AppContext } from "../context/AppContext"
import { FolderContext } from "../context/FolderContext"
import { templateConfig } from "../templateConfig"
import {
  ArrowIcon,
  FilesIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
} from "./icons/icons"

const SocialIcon = {
  github: <GitHubIcon size={23} />,
  instagram: <InstagramIcon size={23} />,
  linkedin: <LinkedinIcon size={23} />,
}

export const Aside = () => {
  const [openExplorer, setOpenExplorer] = useState(false)
  const [theme, setTheme] = useState("light")
  const [openSection, setOpenSection] = useState(true)
  const [context] = useContext(AppContext)
  const activeFileRef = useRef(null)
  const { folders, socialMedia } = templateConfig
  console.log(folders, socialMedia)
  const handleOpenSection = () => {
    setOpenSection(!openSection)
  }

  const foldersCtnRef = useRef(null)

  const handleChangeTheme = () => {
    const app = document.querySelector("#App")
    if (theme == "dark") {
      app.setAttribute("theme", "light")
      setTheme("light")
    } else {
      app.setAttribute("theme", "dark")
      setTheme("dark")
    }
  }

  useEffect(() => {
    const folderCtn = foldersCtnRef.current
    if (folderCtn) {
      folderCtn.children[0].children[2].classList.toggle("active")
      activeFileRef.current = folderCtn.children[0].children[2]
    }
  }, [foldersCtnRef])

  console.log(context)

  return (
    <FolderContext.Provider value={activeFileRef}>
      <aside>
        <div className="aside__left-bar">
          <div className="aside__social-icons">
            <div
              style={{ height: 24 }}
              onClick={() => {
                setOpenExplorer(!openExplorer)
              }}
            >
              <FilesIcon size={23} />
            </div>
            {socialMedia.map(({ icon, url }) => (
              <a href={url} target="_blank">
                {SocialIcon[icon]}
              </a>
            ))}
          </div>
          <button className="aside__change-theme" onClick={handleChangeTheme}>
            {theme === "dark" ? <SunIcon size={23} /> : <MoonIcon size={23} />}
          </button>
        </div>
        <div className={"aside__explorer-ctn " + (openExplorer ? "open" : "")}>
          <div className="aside__explorer-header">
            <h2>Explorer</h2>
          </div>
          <div className="aside__section ">
            <button
              className={"aside__section-header " + (openSection ? "open" : "")}
              onClick={handleOpenSection}
            >
              <ArrowIcon size={10} />
              <h2>PORTAFOLIO</h2>
            </button>
            <div
              ref={foldersCtnRef}
              className={"aside__files-ctn " + (openSection ? "open" : "")}
            >
              {folders.map((folder, index) => (
                <Folder {...folder} folderIndex={index} key={folder.name} />
              ))}
            </div>
          </div>
        </div>
      </aside>
    </FolderContext.Provider>
  )
}
