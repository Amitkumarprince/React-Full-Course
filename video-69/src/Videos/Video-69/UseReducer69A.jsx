import { useReducer } from "react"
import "./index.css"

export const UseReducer69A = () => {
    const reducer = (state, action) => {
        // if (action.type === "INCREASE")
        //     return state + 1

        // if (action.type === "DECREASE")
        //     // console.log(action.type)
        //     return state - 1

        // if (action.type === "RESET")
        //     return state = 0

        switch (action.type) {
            case "INCREASE":
                return state + 1

            case "DECREASE":
                return state - 1

            case "RESET":
                return state = 0

            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <section className="container">
            <h1>{count} </h1>
            <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
            <button onClick={() => dispatch({ type: "DECREASE" })}>Decrease</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </section>
    )
}