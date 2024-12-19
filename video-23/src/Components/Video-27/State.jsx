import { useState } from "react";

export const MainParent27 = () => {
    return (
        <>
            <State />
            <Sibling />
        </>
    )
}

const State = () => {
    const [count, setCount] = useState(0)
    console.log("parent")

    const handleButtonClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <div>
                <h1>Count - {count}</h1>
                <button onClick={handleButtonClick}>Increase</button>
            </div>
            <ChildComponent data={count} />
        </>
    )
}

const ChildComponent = ({ data }) => {
    console.log("child")
    return (
        <div>
            <h2>Child Component - {data} </h2>
        </div>
    )
}

function Sibling() {
    console.log("Sibling")
    return (
        <div>
            <h2>Siblings</h2>
        </div>
    );
}