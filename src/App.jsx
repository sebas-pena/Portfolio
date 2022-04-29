import { useContext } from "react"
import { Aside } from "./components/Aside"
import { Display } from "./components/Display"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { StoreContext } from "./store/StoreProvider"

import "./App.css"

function App() {
  const [store] = useContext(StoreContext)
  return (
    <div id="App" theme={store.theme}>
      <Header />
      <div className="main-content">
        <Aside />
        <Display />
      </div>
      <Footer />
    </div>
  )
}

export default App
