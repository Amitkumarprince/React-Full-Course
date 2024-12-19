export const Video11 = () => {
    const name = "Amit"
    const rating = 2
    const summary = " Baek Hyun-woo and Hong Hae-in navigate a tense relationship, both at home and at work. But upon deciding his future, Hyun-woo pays a visit to his family. "

    const returnGenre = () => {
        const genre = "RomCom"
        return genre
    }
    return (
        <>
            <section>
                <div>
                    <img src="http://localhost:5174/1.webp" alt="" width="40%" />
                </div>
                <div>
                    <h2>Name: {name} </h2>
                    <h3>Rating: {rating} </h3>
                    <p>Summary: {summary} </p>
                    <p>Genre: {returnGenre()} </p>
                </div>
            </section>
        </>
    )
}

export const Header = () => {
    return <h1>Header</h1>
}
export const Footer = () => {
    return <h1>copyright @thapatechnical</h1>
}