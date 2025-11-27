import comics from "../assets/comics"
import SeriesCard from "../components/SeriesCard"
function CurSeries() {
    return (
        <div className="container flex wrap p-20">
            {comics.map((currentSeries) =>
                <SeriesCard key = {currentSeries.id} image ={currentSeries.thumb} title ={currentSeries.series}/>         
            )}
        </div>

    )
}
export default CurSeries;