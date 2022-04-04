import { useState, useContext, useEffect } from "react"
import { FolderContext } from "../context/FolderContext"
import {
  ArrowIcon,
  FolderIcon,
  GitHubIcon,
  GitForkIcon,
  PersonalCardIcon,
} from "../assets/svgs/icons"

export const Folder = ({ name, files, folderIndex }) => {
  const handleOpenFolder = () => setOpenFolder(!openFolder)
  const [openFolder, setOpenFolder] = useState(false)
  const FoldersContext = useContext(FolderContext)
  const Icons = {
    PersonalCard: <PersonalCardIcon size={12} />,
    GitHub: <GitHubIcon size={12} />,
    GitFork: <GitForkIcon size={12} />,
  }

  const handleChangeFile = ({ currentTarget }) => {
    FoldersContext.current.classList.toggle("active")
    currentTarget.classList.toggle("active")
    FoldersContext.current = currentTarget
    console.log(currentTarget.getAttribute("folder"))
    console.log(currentTarget.getAttribute("file"))
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
      {files.map(({ icon, fileName }, index) => (
        <button
          className="aside__folder-file"
          key={fileName}
          folder={folderIndex}
          file={index}
          onClick={handleChangeFile}
        >
          {Icons[icon]}
          <p>{fileName}</p>
        </button>
      ))}
    </div>
  )
}