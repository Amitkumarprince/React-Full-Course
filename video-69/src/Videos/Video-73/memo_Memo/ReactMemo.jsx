import { useMemo, useState } from "react";
// import Counts from "./MemoCount";
import { Counts } from "./MemoCount";

export const Memo_useMemo73 = () => {
    const [count, setCount] = useState(0);

    // const myBioData = {
    //     name: "Amit",
    //     age: 26
    // }

    const myBioData = useMemo(() => {
        return {
            name: "Amit",
            age: 26
        }
    }, [])

    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
            </div>
            <Counts bioData={myBioData} />
        </>
    )
}