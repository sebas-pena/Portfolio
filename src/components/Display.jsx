import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { AboutMeScreen } from "./screens/AboutmeScreen"
import { PresentationScreen } from "./screens/PresentationScreen"
import { ProjectScreen } from "./screens/ProjectScreen"

export const Display = () => {
  const [{ folders, display }] = useContext(AppContext)

  const activeFile = folders[display[0]].files[display[1]]
  console.log(activeFile)

  const screens = {
    Aboutme: <AboutMeScreen {...activeFile.screenConfig} />,
    Presentation: <PresentationScreen {...activeFile.screenConfig} />,
    Project: <ProjectScreen {...activeFile.screenConfig} />,
  }

  return <div className="display-ctn">{screens[activeFile.screen]}</div>
}
