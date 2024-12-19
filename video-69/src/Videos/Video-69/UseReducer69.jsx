import "./index.css"

import { useReducer } from "react"

export const UerReducer69 = () => {

    const reducer = (state, action) => {
        // console.log(state, action)
        if (action.type === "INCREMENT") {
            return state + 1;
        }
        if (action.type === "DECREMENT") {
            return state - 1;
        }
    }

    // const [count, setCout] = useState(0)


    const [count, dispatch] = useReducer(reducer, 0)
    // console.log(useReducer(reducer, 0))
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
        </div>
    )
}