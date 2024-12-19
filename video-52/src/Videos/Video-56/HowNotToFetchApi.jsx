import { useEffect, useState } from "react";
import "./pokemon.css";

export const HowNotToFetchApi56 = () => {
    const [pokemon, setPokemon] = useState(null)

    // const API = "https://pokeapi.co/api/v2/pokemon/pikachu"
    const API = "https://pokeapi.co/api/v2/pokemon/squirtle"

    const fetchPokemon = () => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    console.log(pokemon)

    if (!pokemon)
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )

    return (
        <section className="container">
            <header>
                <h1>Lets Catch Pokemon</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card">
                    <figure>
                        <img
                            // src={pokemon.sprites.other.dream_world.front_default}
                            // src={pokemon.sprites.other.showdown.front_default}
                            src={pokemon.sprites.other.home.front_default}
                            alt={pokemon.name}
                            className="pokemon-image"
                        />
                    </figure>
                    <h1>{pokemon.name} </h1>
                </li>
            </ul>
        </section>
    );
}


// import { useEffect, useState } from "react";
// import "./pokemon.css";

// export const HowNotToFetchApi56 = () => {
//     const [pokemon, setPokemon] = useState(null)

//     const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

//     const fetchPokemon = () => {
//         fetch(API)
//             .then((res) => res.json())
//             .then((data) => {
//                 setPokemon(data)
//             })
//             .catch((error) => console.log(error))
//     }

//     useEffect(() => {
//         fetchPokemon()
//     }, [])

//     console.log(pokemon)

//     if (pokemon) {
//         return (
//             <section className="container">
//                 <header>
//                     <h1>Lets Catch Pokemon</h1>
//                 </header>
//                 <ul className="card-demo">
//                     <li className="pokemon-card">
//                         <figure>
//                             <img
//                                 src={pokemon.sprites.other.dream_world.front_default}
//                                 // src={pokemon.sprites.other.showdown.front_default}
//                                 // src={pokemon.sprites.other.home.front_default}
//                                 alt={pokemon.name}
//                                 className="pokemon-image"
//                             />
//                         </figure>
//                         <h1>{pokemon.name} </h1>
//                     </li>
//                 </ul>
//             </section>
//         );
//     }
// };


// import { useEffect, useState } from "react";
// import "./Effect.css";

// export const HowNotToFetchApi56 = () => {
//     const [pokemon, setPokemon] = useState([])


//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then((res) => res.json())
//             .then((data) => {
//                 setPokemon(data)
//             })
//             .catch((error) => console.log(error))
//     }, [])


//     return (
//         <div>
//             <ul>data:
//                 {
//                     pokemon.map((curData) => {
//                         return <li key={curData.id}> {curData.title} </li>
//                     })
//                 }
//             </ul>
//         </div>
//     );
// };