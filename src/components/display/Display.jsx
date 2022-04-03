import { PresentationScreen } from "./screens/PresentationScreen"
import "./display.css"
import { AboutMeScreen } from "./screens/AboutmeScreen"

export const Display = () => {
	return (
		<div className="display-ctn">
			<AboutMeScreen />
		</div>
	)
}
