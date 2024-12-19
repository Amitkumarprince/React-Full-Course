import { useEffect, useState } from "react"

export const Pokemon59 = () => {
    const [pokemon, setPokemon] = useState([])
    const API = "https://pokeapi.co/api/v2/pokemon?limit=24"

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API)
            const data = await res.json()
            // console.log(data)

            const detailedPokemonData = data.results.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url)
                const data = await res.json()
                // console.log(data)
                return data;
            })
            // console.log(detailedPokemonData)

            const detailedResponses = await Promise.all(detailedPokemonData)
            console.log(detailedResponses)
            setPokemon(detailedResponses)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    return (
        <section className="container">
            <header>
                <h1>Lets Catch Pokemon</h1>
            </header>
            <div>
                <ul className="cards">
                    {
                        pokemon.map((curPokemon)=>{
                            return <li key={curPokemon.id}>{curPokemon.name} </li>
                        })
                    }
                </ul>
            </div>
        </section>
    )
}