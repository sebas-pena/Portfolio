import { Aside } from "./components/Aside"
import { Display } from "./components/Display"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { StoreContext, StoreProvider } from "./store/StoreProvider"

import "./App.css"

function App() {
  const [store] = useContext(StoreContext)
  return (
    <StoreProvider>
      <div id="App" theme={store.theme}>
        <Header />
        <div className="main-content">
          <Aside />
          <Display />
        </div>
        <Footer />
      </div>
    </StoreProvider>
  )
}

export default App
