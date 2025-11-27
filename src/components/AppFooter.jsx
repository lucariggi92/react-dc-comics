
import ColonneFooter from "./ColonneFooter";
import SignButton from "./SignButton";
import SocialLinks from "./SocialLinks";

function AppFooter() {
    return (
        <footer className="text-white ">
            <div className="bg-footer p-20"> 
            <div className="container wrap"> 
            <img src="../src/assets/img/dc-logo-bg.png" alt="" className="bg-logo" />
             <ColonneFooter/>
          
                </div>
                </div>
            <div className="bg-black">  
                <SignButton />
            <SocialLinks />
            </div>
        </footer>
    )
}
export default AppFooter;