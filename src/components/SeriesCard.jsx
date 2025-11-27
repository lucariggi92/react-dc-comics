export default function SeriesCards(props) {
    const { image, title } = props;
    return (
        <div className="col">

            <a href=""><img src={image} alt={title} className="imgSeries" />
                <h3>{title}</h3></a>
        </div>


    )
}