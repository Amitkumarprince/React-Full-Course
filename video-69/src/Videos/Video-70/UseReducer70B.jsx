import "./index.css"

import { useReducer } from "react"

export const UerReducer70B = () => {

    const initialState = {
        count: 0,
        inc: 2,
        dec: 2,
    }

    const reducer = (state, action) => {
        console.log(state, action)
        switch (action.type) {
            case "INCREMENT":
                return { 
                    ...state,
                    count: state.count + 1 };
            case "DECREMENT":
                return { 
                    ...state,
                    count: state.count - 1 };
            case "RESET":
                return { 
                    ...state,
                    count: 0 };

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="container">
            <h1>{state.count} </h1>
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