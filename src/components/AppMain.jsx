import CurSeries from "./CurSeries";
import ProductCard from "./ProductCard";



function AppMain (){
    return(
  <main>
    <div className="bg-main-top"></div>
    <div className="bg-black">
      <CurSeries/>
    </div>
       
        <section className="bg-blue flex">
          <ProductCard/>
        </section>
        
      </main>

    )


}
export default AppMain;