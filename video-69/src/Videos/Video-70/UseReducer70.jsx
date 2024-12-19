import "./index.css"

import { useReducer } from "react"

export const UerReducer70 = () => {
    const reducer = (state, action) => {
        // console.log(state, action)
        // if (action.type === "INCREMENT") {
        //     return state + 1;
        // }
        // if (action.type === "DECREMENT") {
        //     return state - 1;
        // }
        // if (action.type === "RESET") {
        //     return state = 0;
        // }

        switch (action.type) {
            case "INCREMENT":
                return state + 1;
            case "DECREMENT":
                return state - 1;
            case "RESET":
                return state = 0;

            default:
                return state;
        }
    }

    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <div className="container">
            <h1>{count} </h1>
            <button className="btn" disabled={count >= 100}
                onClick={() => dispatch({ type: "INCREMENT" })}
            >Increment</button>
            <br />
            <button className="btn" disabled={count <= 0}
                onClick={() => dispatch({ type: "DECREMENT" })}
            >Decrement</button>
            <br />
            <button className="btn"
                onClick={() => dispatch({ type: "RESET" })}
            >Reset</button>
        </div>
    )
}