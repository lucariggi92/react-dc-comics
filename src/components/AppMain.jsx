import CurSeries from "./CurSeries";
import ProductCard from "./ProductCard";



function AppMain() {
  return (
    <main>
      <div className="bg-main-top"></div>
      <div className="bg-black">
        <CurSeries />
      </div>

      <section className="bg-blue">
        <div className="container flex p-20 g-10 justify-center align-center">
          <ProductCard />
        </div>

      </section>

    </main>

  )


}
export default AppMain;