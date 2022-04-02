import { useState } from "react"
import { ArrowIcon, FolderIcon, GitHubIcon } from "../../../assets/svgs/icons"

import "./folder.css"
export const Folder = () => {
	const handleOpenFolder = () => setOpenFolder(!openFolder)
	const [openFolder, setOpenFolder] = useState(false)

	return (
		<div className="aside__section-folder">
			<button
				className={"aside__folder-header " + (openFolder ? "open" : "")}
				onClick={handleOpenFolder}
			>
				<ArrowIcon size={10} />
				<FolderIcon size={14} />
				<h3>ALGO</h3>
			</button>
			<div className="aside__folder-scope"></div>
			<button className="aside__folder-file">
				<GitHubIcon size={12} />
				<p>Algo 2</p>
			</button>
		</div>
	)
}
