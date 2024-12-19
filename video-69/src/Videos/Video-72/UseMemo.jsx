import { useMemo, useState } from "react"

// eslint-disable-next-line react/display-name
const ExpensiveComponents = () => {
    // Expensive calculation function
    const sum = () => {
        console.log("Calculating sum...");
        let i = 0;
        for (i = 0; i <= 1000000000; i++) {
            i = i + 1
        }
        return i;
    }

    // const total = useMemo(() => {
    //     return sum()
    // }, [])
    const total = useMemo(() => sum(), [])

    // const total = sum();

    return <p>sum: {total} </p>
}


const MemoParentComponent72 = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <ExpensiveComponents />
            <button onClick={() => setCount(count + 1)}>
                Re-render Parent
            </button>
            <p>Parent re-renders: {count} </p>
        </div>
    )
}

export default MemoParentComponent72;