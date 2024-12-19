import { useContext } from "react"
import { use } from "react"
import { BioContext, useBioContext } from "./ContexAPI"

export const About = () => {
    // for single data no curle bracket
    // const { myName, myAge } = useBioContext()
    // const { myName, myAge } = use(BioContext)

    const newHook = true;
    let myName, myAge;
    if (newHook) {
        //  ({ myName, myAge } = useContext(BioContext))
        // not use useContex
         ({ myName, myAge } = use(BioContext))
    }

    return (
        <h1>Hello About. My name is {myName}. I am {myAge} Years old.</h1>
    )
}