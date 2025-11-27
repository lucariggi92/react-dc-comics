
import ColonneFooter from "./ColonneFooter";
import SignButton from "./SignButton";
import SocialLinks from "./SocialLinks";

function AppFooter() {
    return (
        <footer className="bg-footer">
            <img src="../src/assets/img/dc-logo-bg.png" alt="" className="bg-logo" />
             <ColonneFooter/>
            <SignButton />
            <SocialLinks />
        </footer>
    )
}
export default AppFooter;