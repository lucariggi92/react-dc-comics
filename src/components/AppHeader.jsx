import style from "../components/AppHeader.module.css";
import LogoImg from "../assets/img/dc-logo.png"
function AppHeader (){
    return(
        <header className ={`${style.flex} ${style["space-between"]} ${style["align-center"]}`}>
        <a href=""><img src={LogoImg} alt="" /></a>
        <nav>
          <ul className={`${style.flex} ${style["g-20"]} `}>
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