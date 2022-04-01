import "./header.css"
import Logo from "../../assets/images/logo.png"
export const Header = () => {
  return (
    <header>
      <div>
        <img src={Logo} alt="logo personal" />
      </div>
      <h1>Portfolio</h1>
    </header>
  )
}
