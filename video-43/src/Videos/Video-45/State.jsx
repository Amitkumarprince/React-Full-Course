import { useState } from "react"

export const State45 = () => {
    const [count, setCount] = useState(0)
    return (
        <section>
            <h3>Count :- {count} </h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </section>
    )
}