import { useState } from "react";

export const State26 = () => {
    // let state = useState(0)
    // console.log(state)
    const [count, setCount] = useState(0)

    const handleButtonClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1>Count - {count}</h1>
            <button onClick={handleButtonClick}>Increase</button>
        </>
    )
}