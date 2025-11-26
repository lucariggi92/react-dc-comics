
import LogoImg from "../assets/img/dc-logo.png"
function AppHeader() {
  return (
    <header >
      {/* metti container qui dentro nav e tutte le proprietà  */}
      <nav className="flex container space-between align-center p-20 uppercase f-header">
        <a href=""><img src={LogoImg} alt="" className="logo"/></a>

        <ul className="flex g-10">
          <li><a href="">Characters</a></li>
          <li><a href="">Comics</a></li>
          <li><a href="">Movies</a></li>
          <li><a href="">TV</a></li>
          <li><a href="">Games</a></li>
          <li><a href="">Collectibles</a></li>
          <li><a href="">Videos</a></li>
          <li><a href="">Fans</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Shop</a></li>
        </ul>
      </nav>
    </header>
  )
}
export default AppHeader;