import { useState } from "react"

export const CleanUp54 = () => {
    const [count, setCount] = useState(0)

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