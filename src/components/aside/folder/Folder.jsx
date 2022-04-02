import { useState } from "react"
import {
  ArrowIcon,
  FolderIcon,
  GitHubIcon,
  GitForkIcon,
  PersonalCardIcon,
} from "../../../assets/svgs/icons"

import "./folder.css"
export const Folder = ({ name, files }) => {
  const handleOpenFolder = () => setOpenFolder(!openFolder)
  const [openFolder, setOpenFolder] = useState(false)

  const Icons = {
    PersonalCard: <PersonalCardIcon size={12} />,
    GitHub: <GitHubIcon size={12} />,
    GitFork: <GitForkIcon size={12} />,
  }

  return (
    <div className={"aside__section-folder " + (openFolder ? "open" : "")}>
      <button
        className={"aside__folder-header " + (openFolder ? "open" : "")}
        onClick={handleOpenFolder}
      >
        <ArrowIcon size={10} />
        <FolderIcon size={14} />
        <h3>{name}</h3>
      </button>
      <div className="aside__folder-scope"></div>
      {files.map(({ icon, fileName }) => (
        <button className="aside__folder-file" key={fileName}>
          {Icons[icon]}
          <p>{fileName}</p>
        </button>
      ))}
    </div>
  )
}
