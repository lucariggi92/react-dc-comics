import BuyDcImg from "../assets/img/buy-comics-digital-comics.png"
import MerchandiseImg from "../assets/img/buy-comics-merchandise.png"
import ShopImg from "../assets/img/buy-comics-shop-locator.png"
import SubImg from "../assets/img/buy-comics-subscriptions.png"
import VisaImg from "../assets/img/buy-dc-power-visa.svg"


function ProductCard() {
    return (
        <>
               <a href="" className="flex align-center"><img src={BuyDcImg} alt="" className="imgProducts"/>
                <h3 className="p-20">DIGITAL COMICS</h3></a> 

               
                <a href="" className="flex align-center"><img src={MerchandiseImg} alt="" className="imgProducts"/>
                <h3 className="p-20">DC MERCHANDISE</h3></a>

                   
                <a href="" className="flex align-center"><img src={ShopImg} alt="" className="imgProducts"/>
                 <h3 className="p-20">SUBSCRIPTION</h3></a>

            
                <a href="" className="flex align-center"><img src={SubImg} alt="" className="imgProducts"/>
                 <h3 className="p-20">COMIC SHOP LOCATOR</h3></a>

                    
                <a href="" className="flex align-center"><img src={VisaImg} alt="" className="imgProducts"/>
                   <h3 className="p-20">DC POWER VISA</h3></a>
        </>
    )
}
export default ProductCard;