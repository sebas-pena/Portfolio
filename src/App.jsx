import "./App.css"
import { Aside } from "./components/aside/Aside"
import { Display } from "./components/display/Display"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"

function App() {
  return (
    <div id="App" className="dark">
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
