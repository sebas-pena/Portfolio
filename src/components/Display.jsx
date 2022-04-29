import { useContext } from "react"
import { StoreContext } from "../store/StoreProvider"
import { AboutMeScreen } from "./screens/AboutmeScreen"
import { PresentationScreen } from "./screens/PresentationScreen"
import { ProjectScreen } from "./screens/ProjectScreen"

export const Display = () => {
  const [store] = useContext(StoreContext)
  const { folders, display } = store
  const activeFile = folders[display[0]].files[display[1]]

  const screens = {
    Aboutme: <AboutMeScreen {...activeFile.screenConfig} />,
    Presentation: <PresentationScreen {...activeFile.screenConfig} />,
    Project: <ProjectScreen {...activeFile.screenConfig} />,
  }

  return <div className="display-ctn">{screens[activeFile.screen]}</div>
}
