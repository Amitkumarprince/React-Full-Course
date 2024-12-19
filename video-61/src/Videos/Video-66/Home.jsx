import { useBioContext } from "./ContexAPI"

export const Home = () => {
    // for single data no curle bracket
    const  {myName, myAge}  = useBioContext()

    return (
        <h1>Hello Home. My name is {myName}. I am {myAge} Years old.</h1>
    )
}