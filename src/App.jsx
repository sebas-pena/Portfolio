import { useState } from "react"

import { portfolioConfig } from "./portfolioConfig"
import { Aside } from "./components/aside/Aside"
import { Display } from "./components/display/Display"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { AppContext } from "./context/AppContext"
import "./App.css"

function App() {
  const [context, setContext] = useState({
    portfolioConfig,
    display,
  })
  // ?????????????????????????
  return (
    <AppContext.Provider value={portfolioConfig}>
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
