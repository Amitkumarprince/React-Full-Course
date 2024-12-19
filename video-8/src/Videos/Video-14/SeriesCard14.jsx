export const SeriesCard14 = (props) => {
    const {data} = props;
    return (
        <li>
            <div>
                <img
                    src={data.img_url}
                    alt={data.name}
                    width="40%"
                    height="40%"
                />
            </div>
            <div>
                <h2>Name: {data.name} </h2>
                <h3>Rating: {data.rating} </h3>
                <p>Summary: {data.description} </p>
                <p>Genre: {data.genre} </p>
                <p>Caste: {data.cast} </p>
                <a href={data.watch_url} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </li>
    )
}


// export const SeriesCard14 = (props) => {
//     const {id, img_url, name, rating, description, genre, cast, watch_url} = props.data
//     return (
//         <li key={id}>
//             <div>
//                 <img
//                     src={img_url}
//                     alt={name}
//                     width="40%"
//                     height="40%"
//                 />
//             </div>
//             <div>
//                 <h2>Name: {name} </h2>
//                 <h3>Rating: {rating} </h3>
//                 <p>Summary: {description} </p>
//                 <p>Genre: {genre} </p>
//                 <p>Caste: {cast} </p>
//                 <a href={watch_url} target="_blank">
//                     <button>Watch Now</button>
//                 </a>
//             </div>
//         </li>
//     )
// }

// export const SeriesCard14 = ({ data }) => {
//     const {img_url, name, rating, description, genre, cast, watch_url } = data;
//     return (
//         <li >
//             <div>
//                 <img
//                     src={img_url}
//                     alt={name}
//                     width="40%"
//                     height="40%"
//                 />
//             </div>
//             <div>
//                 <h2>Name: {name} </h2>
//                 <h3>Rating: {rating} </h3>
//                 <p>Summary: {description} </p>
//                 <p>Genre: {genre} </p>
//                 <p>Caste: {cast} </p>
//                 <a href={watch_url} target="_blank">
//                     <button>Watch Now</button>
//                 </a>
//             </div>
//         </li>
//     )
// }
