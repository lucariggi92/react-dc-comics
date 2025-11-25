import ProductCard from "./ProductCard";
import style from "./AppMain.module.css";


function AppMain (){
    return(
  <main>
        <h1 className={`${style["bg-black"]}` }>---Content goes here---</h1>
        <section className={`${style["bg-blue"]} ${style.flex}` }>
          <ProductCard/>
        </section>
        
      </main>

    )


}
export default AppMain;