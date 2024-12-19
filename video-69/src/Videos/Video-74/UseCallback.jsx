import { memo, useCallback, useState } from "react";

const ButtonC = memo(({ onClickA, children }) => {
    console.log(`Rendering button: ${children} `)

    return (
        <button onClick={onClickA}>{children}</button>
    )
});

export const UseCallback74 = () => {
    const [count, setCount] = useState(0);

    // const increment = () => {
    //     // console.log("increment inside")
    //     // setCount((prevCount) => prevCount + 1);
    // }

    const increment = useCallback(() => {
        console.log("increment inside")
        setCount((prevCount) => prevCount + 1);
    }, [])

    // const decrement = () => {
    //     // console.log("decrement inside")
    //     setCount((prevCount) => prevCount - 1);
    // }

    const decrement = useCallback(() => {
        console.log("decrement inside")
        setCount((prevCount) => prevCount - 1);
    }, [])



    return (
        <div>
            <h1>Count: {count} </h1>
            <ButtonC onClickA={increment}> Increment </ButtonC>
            <ButtonC onClickA={decrement}> Decrement </ButtonC>
        </div>
    )
}

