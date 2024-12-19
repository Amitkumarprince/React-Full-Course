import { useContext } from "react"
import { BioContext } from "./ContexAPI"

export const About = () => {
    // for single data no curle bracket
    const  {myName, myAge}  = useContext(BioContext)

    return (
        <h1>Hello About. My name is {myName}. I am {myAge} Years old.</h1>
    )
}