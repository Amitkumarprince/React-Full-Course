import { useContext } from "react"
import { use } from "react"
import { BioContext, useBioContext } from "./ContexAPI"

export const Home = () => {
    // for single data no curle bracket
    // const  {myName, myAge}  = useBioContext()
    // const  {myName, myAge}  = useContext(BioContext)
    const  {myName, myAge}  = use(BioContext)

    return (
        <h1>Hello Home. My name is {myName}. I am {myAge} Years old.</h1>
    )
}