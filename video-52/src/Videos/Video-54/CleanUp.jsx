import { useEffect, useState } from "react"

export const CleanUp54 = () => {
    const [count, setCount] = useState(0)

    // setInterval(() => {
    //     // setCount(count + 1)
    //     setCount((prev) => prev + 1)
    // }, 1000)

    // useEffect(() => {
    //     setInterval(() => {
    //         // setCount(count + 1)
    //         setCount((prev) => prev + 1)
    //     }, 1000)
    // }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            // setCount(count + 1)
            setCount((prev) => prev + 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="container">
            <div className="counter">
                <p>My Subscrivers on Youtube</p>
                <div className="odometer" id="odometer">
                    {count}
                </div>
                <h3 className="title">
                    Subscribers <br /> Realtime Counter
                </h3>
            </div>
        </div>
    )
}