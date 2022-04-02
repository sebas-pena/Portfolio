import { useState, useRef } from "react"
import { Folder } from "./folder/Folder"

import {
	ArrowIcon,
	FilesIcon,
	GitHubIcon,
	InstagramIcon,
	LinkedinIcon,
} from "../../assets/svgs/icons"
import "./aside.css"

export const Aside = () => {
	const [openSection, setOpenSection] = useState(true)

	const handleOpenSection = () => {
		setOpenSection(!openSection)
	}

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
				<div className="aside__section ">
					<button
						className={"aside__section-header " + (openSection ? "open" : "")}
						onClick={handleOpenSection}
					>
						<ArrowIcon size={10} />
						<h2>PORTFOLIO</h2>
					</button>
					<div className={"aside__files-ctn " + (openSection ? "open" : "")}>
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
						<Folder />
					</div>
				</div>
			</div>
		</aside>
	)
}
