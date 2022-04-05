import { useState } from "react"

import { templateConfig } from "./templateConfig"
import { Aside } from "./components/Aside"
import { Display } from "./components/Display"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { AppContext } from "./context/AppContext"
import "./App.css"

function App() {
  const { folders } = templateConfig
  const [context, setContext] = useState({
    folders: folders,
    display: [0, 0],
  })
  return (
    <AppContext.Provider value={[context, setContext]}>
      <div id="App" theme="light">
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
