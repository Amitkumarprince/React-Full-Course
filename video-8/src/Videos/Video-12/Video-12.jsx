import seriesData from "../../api/seriesData.json"

export const Video12 = () => {
    return (
        <ul>
            <li>
                <div>
                    <div>
                        <img src={seriesData[0].img_url} alt={seriesData[0].name} width="40%" height="40%" />
                    </div>
                    <div>
                        <h2>Name: {seriesData[0].name} </h2>
                        <h3>Rating: {seriesData[0].rating} </h3>
                        <p>Summary: {seriesData[0].description} </p>
                        <p>Genre: {seriesData[0].genre} </p>
                        <p>Caste: {seriesData[0].cast} </p>
                        <a href={seriesData[0].watch_url} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </li>

            <li>
                <div>
                    <div>
                        <img src={seriesData[1].img_url} alt="" width="40%" height="40%" />
                    </div>
                    <div>
                        <h2>Name: {seriesData[1].name} </h2>
                        <h3>Rating: {seriesData[1].rating} </h3>
                        <p>Summary: {seriesData[1].description} </p>
                        <p>Genre: {seriesData[1].genre} </p>
                        <p>Caste: {seriesData[1].cast} </p>
                        <a href={seriesData[1].watch_url} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </li>
        </ul>

    )
}

