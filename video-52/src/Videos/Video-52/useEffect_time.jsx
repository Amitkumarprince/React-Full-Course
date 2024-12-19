import { useEffect, useState } from "react"
import "./useEffect.css"

export const ReactUseEffect_Time52 = () => {
    const [date, setDate] = useState()

    useEffect(() => {
        setInterval(() => {
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString())
        }, 1000)
    }, [])

    // setInterval(() => {
    //     const updatedDate = new Date();
    //     setDate(updatedDate.toLocaleTimeString())
    //     // console.log("hi")
    // }, 1000)

    return (
        <div className="container effect-container">
            <h1>Date : {date}</h1>

        </div>
    )
}