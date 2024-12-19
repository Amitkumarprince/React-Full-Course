export const SeriesCard19 = ({ data }) => {
    const { id, img_url, name, rating, description, genre, cast, watch_url } = data;

    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        // backgroundColor: `"var(--btn-hover-bg-color"`,
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        // backgroundColor: `${rating >= 8.5 ? "red" : "blue"}`,
        color: "var(--bg-color"
    }

    const ratingClass = rating >= 8.5 ? "super_hit" : "average"

    return (
        <li className="card">
            <div>
                <img
                    src={img_url}
                    alt={name}
                />
            </div>
            <div className="card-content">
                <h2>Name: {name} </h2>
                {/* <h3>Rating: <span className="super_hit">{rating}</span> </h3> */}
                {/* <h3>Rating: <span className={rating >= 8.5 ? "super_hit" : "average"}>{rating}</span> </h3> */}
                <h3>Rating: <span className={`rating timepass ${ratingClass}`}>{rating}</span> </h3>
                <p>Summary: {description} </p>
                <p>Genre: {genre} </p>
                <p>Caste: {cast} </p>
                <a href={watch_url} target="_blank">
                    <button style={btn_style}
                    >Watch Now</button>
                </a>
            </div>
        </li>
    )
}
