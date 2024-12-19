export const SeriesCard = (props) => {
    return (
        <li key={props.data.id}>
            <div>
                <img
                    src={props.data.img_url}
                    alt={props.data.name}
                    width="40%"
                    height="40%"
                />
            </div>
            <div>
                <h2>Name: {props.data.name} </h2>
                <h3>Rating: {props.data.rating} </h3>
                <p>Summary: {props.data.description} </p>
                <p>Genre: {props.data.genre} </p>
                <p>Caste: {props.data.cast} </p>
                <a href={props.data.watch_url} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </li>
    )
}