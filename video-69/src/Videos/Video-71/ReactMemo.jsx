import { useState } from "react";
// import Counts from "./MemoCount";
import {Counts} from "./MemoCount";

export const ReactMemo71 = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
            </div>
            <Counts />
        </>
    )
}