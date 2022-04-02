import { useState } from "react"

import { templateConfig } from "./templateConfig"
import { Aside } from "./components/aside/Aside"
import { Display } from "./components/display/Display"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { AppContext } from "./context/AppContext"
import "./App.css"

function App() {
	const { folders } = templateConfig
	const [context, setContext] = useState({
		folders: folders,
		display: folders[0].files[0],
	})
	return (
		<AppContext.Provider value={[context, setContext]}>
			<div id="App" className="dark">
				<Header />
				<div className="main-content">
					<Aside />
					<Display />
				</div>
				<Footer />
			</div>
		</AppContext.Provider>
	)
}

export default App
