import "./index.css"

import { useReducer } from "react"

export const UerReducer70A = () => {

    const initialState = {
        count: 0,
    }

    const reducer = (state, action) => {

        switch (action.type) {
            case "INCREMENT":
                return { count: state.count + 1 };
            case "DECREMENT":
                return { count: state.count - 1 };
            case "RESET":
                return { count: 0 };

            default:
                return state;
        }
    }

    const [stateA, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="container">
            <h1>{stateA.count} </h1>
            <button className="btn"
                onClick={() => dispatch({ type: "INCREMENT" })}
            >Increment</button>
            <br />
            <button className="btn"
                onClick={() => dispatch({ type: "DECREMENT" })}
            >Decrement</button>
            <br />
            <button className="btn"
                onClick={() => dispatch({ type: "RESET" })}
            >Reset</button>
        </div>
    )
}