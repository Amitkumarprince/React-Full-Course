import "./index.css"

import { useReducer } from "react"

export const UerReducer70C = () => {

    const initialState = {
        count: 0,
        inc: 0,
        dec: 0,
    }

    const reducer = (state, action) => {
        console.log(state, action)
        switch (action.type) {
            case "INCREMENT":
                return {
                    ...state,
                    count: state.count + 1,
                    inc: state.inc + 2,
                    dec: state.dec + 3
                };
            case "DECREMENT":
                return {
                    ...state,
                    count: state.count - 1,
                    inc: state.inc - 2,
                    dec: state.dec - 3,
                };
            case "RESET":
                return {
                    ...state,
                    count: 0,
                    inc: 0,
                    dec: 0,
                };

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="container">
            <h1>{state.count} </h1>
            <h1>{state.inc} </h1>
            <h1>{state.dec} </h1>
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