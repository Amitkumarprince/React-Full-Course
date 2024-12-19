import { useContext } from "react"
import { BioContext } from "./ContexAPI"

export const Home = () => {
    // for single data no curle bracket
    const  {myName, myAge}  = useContext(BioContext)

    return (
        <h1>Hello Home. My name is {myName}. I am {myAge} Years old.</h1>
    )
}