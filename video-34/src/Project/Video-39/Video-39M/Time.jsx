import { useEffect, useState } from "react"

export const Time = () => {
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
            <h2>
                {dateTime}
            </h2>
        </>
    )
}