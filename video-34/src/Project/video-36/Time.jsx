import { useState } from "react"
import { useEffect } from "react"

export const Time36 = () => {
    const [dateTime, setDateTime] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            const formatedDate = now.toLocaleDateString()
            const formatedTime = now.toLocaleTimeString()

            setDateTime(`${formatedDate} - ${formatedTime}`)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <h2
                style={{ color: "red" }}>
                {dateTime}
            </h2>
        </>
    )
}