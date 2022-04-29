import { useState, useContext } from "react"
import {
  ArrowIcon,
  FolderIcon,
  GitHubIcon,
  GitForkIcon,
  PersonalCardIcon,
} from "./icons/icons"

import { StoreContext } from "../store/StoreProvider"

const Icons = {
  PersonalCard: <PersonalCardIcon size={12} />,
  GitHub: <GitHubIcon size={12} />,
  GitFork: <GitForkIcon size={12} />,
}
export const Folder = ({ name, files, folderIndex }) => {
  const handleOpenFolder = () => setOpenFolder(!openFolder)
  const [openFolder, setOpenFolder] = useState(false)
  const [{ activeFileRef }, dispatch] = useContext(StoreContext)

  const handleChangeFile = ({ currentTarget }) => {
    activeFileRef.classList.toggle("active")
    currentTarget.classList.toggle("active")

    dispatch({
      type: "SET_DISPLAY",
      payload: [
        currentTarget.getAttribute("folder"),
        currentTarget.getAttribute("file"),
      ],
    })
    dispatch({
      type: "SET_ACTIVE_FILE",
      payload: currentTarget,
    })
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
