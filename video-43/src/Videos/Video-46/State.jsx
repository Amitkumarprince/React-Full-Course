import { useState } from "react"

export const State46 = () => {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(0)


    const handleIncrease = () => {
        setCount(count + step)
    }
    const handleDecrease = () => {
        setCount(count - step)
    }
    const handleReset = () => {
        setCount(0)
    }
    return (
        <section>
            <h3>Count :- {count} </h3>
            <input type="number"
                value={step}
                onChange={(e) => setStep(Number(e.target.value))}
            />
            <br />
            <br />
            <button onClick={handleIncrease} disabled={count == 100}>Increase</button>
            <button onClick={handleDecrease} disabled={count <= 0}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </section>
    )
}


// import { useState } from "react"

// export const State46 = () => {
//     const [count, setCount] = useState(0)
//     const [step, setStep] = useState(0)

//     return (
//         <section>
//             <h3>Count :- {count} </h3>
//             <input type="number"
//                 value={step}
//                 onChange={(e) => setStep(Number(e.target.value))}
//             />
//             <br />
//             <br />
//             <button onClick={() => setCount(count + step)} disabled={count == 100}>Increase</button>
//             <button onClick={() => setCount(count - step)} disabled={count <= 0}>Decrement</button>
//             <button onClick={() => setCount(0)}>Reset</button>
//         </section>
//     )
// }