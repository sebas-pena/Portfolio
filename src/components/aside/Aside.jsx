import { useState, useContext, useRef, useEffect } from "react"
import { Folder } from "../folder/Folder"
import { AppContext } from "../../context/AppContext"

import {
	ArrowIcon,
	FilesIcon,
	GitHubIcon,
	InstagramIcon,
	LinkedinIcon,
} from "../../assets/svgs/icons"

import "./aside.css"
import { FolderContext } from "../../context/FolderContext"

export const Aside = () => {
	const [openSection, setOpenSection] = useState(true)
	const [context] = useContext(AppContext)
	const activeFileRef = useRef(null)
	const { folders } = context
	const handleOpenSection = () => {
		setOpenSection(!openSection)
	}

	const foldersCtnRef = useRef(null)

	useEffect(() => {
		const folderCtn = foldersCtnRef.current
		if (folderCtn) {
			folderCtn.children[0].children[2].classList.toggle("active")
			activeFileRef.current = folderCtn.children[0].children[2]
		}
	}, [foldersCtnRef])

	return (
		<FolderContext.Provider value={activeFileRef}>
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
					<div className="aside__section ">
						<button
							className={"aside__section-header " + (openSection ? "open" : "")}
							onClick={handleOpenSection}
						>
							<ArrowIcon size={10} />
							<h2>PORTFOLIO</h2>
						</button>
						<div
							ref={foldersCtnRef}
							className={"aside__files-ctn " + (openSection ? "open" : "")}
						>
							{folders.map((folder) => (
								<Folder {...folder} key={folder.name} />
							))}
						</div>
					</div>
				</div>
			</aside>
		</FolderContext.Provider>
	)
}
