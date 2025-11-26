import BuyDcImg from "../assets/img/buy-comics-digital-comics.png"
import MerchandiseImg from "../assets/img/buy-comics-merchandise.png"
import ShopImg from "../assets/img/buy-comics-shop-locator.png"
import SubImg from "../assets/img/buy-comics-subscriptions.png"
import VisaImg from "../assets/img/buy-dc-power-visa.svg"


function ProductCard (){
    return(
    <>
        <div className="flex">
            <img src={BuyDcImg} alt="" />
            <h3>DIGITAL COMICS</h3>
        
        </div>
   <div className="flex">
            <img src={MerchandiseImg}alt="" />
            <h3>DC MERCHANDISE</h3>
        
        </div>
          <div className="flex">
            <img src={ShopImg}alt="" />
            <h3>SUBSCRIPTION</h3>
        
        </div>
             <div className="flex">
            <img src={SubImg} alt="" />
            <h3>COMIC SHOP LOCATOR</h3>
        
        </div>
        <div className="flex">
            <img src={VisaImg} alt="" />
            <h3>DC POWER VISA</h3>
        
        </div>
        </>
    )
}
export default ProductCard;