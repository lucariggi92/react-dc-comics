
import LinkNav from "../../LinkNav";
import LogoImg from "../assets/img/dc-logo.png"

function AppHeader() {
  return (
  
    <header >
      {/* metti container qui dentro nav e tutte le proprietà  */}
      
      <nav className="flex container space-between align-center uppercase f-header p-20  ">
        <a href=""><img src={LogoImg} alt="" className="logo"/></a>
       <LinkNav/>
      </nav>
    </header>
  )
}
export default AppHeader;