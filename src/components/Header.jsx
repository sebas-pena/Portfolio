import Logo from "../assets/images/logo.png"

export const Header = () => {
  return (
    <header>
      <div className="header__buttons" />
      <h1>Portfolio</h1>
      <div className="header__image-ctn">
        <img src={Logo} alt="logo personal" />
      </div>
    </header>
  )
}
