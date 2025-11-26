import comics from "../assets/comics"
function CurSeries() {
    return (
        <div className="container flex wrap p-20">
            {comics.map((currentSeries) =>
                <div key={currentSeries.id} className="col">
                    <img src={currentSeries.thumb} alt={currentSeries.series} className="imgSeries"/>
                    <h3>{currentSeries.series}</h3>
                </div>
            )}
        </div>

    )
}
export default CurSeries;