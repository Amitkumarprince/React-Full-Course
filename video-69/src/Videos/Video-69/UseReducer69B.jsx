import { useReducer } from "react"
import "./index.css"

export const UseReducer69B = () => {
    const starter = {
        count1: 0,
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREASE":
                return { count1: state.count1 + 1 }
            case "DECREASE":
                return { count1: state.count1 - 1 }
            case "RESET":
                return { count1: 0 }

            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer, starter)
    return (
        <section className="container">
            <h1>{count.count1} </h1>
            <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
            <button onClick={() => dispatch({ type: "DECREASE" })}>Decrease</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            <button onClick={() => dispatch({ type: "RESETa" })}>Reset</button>
        </section>
    )
}