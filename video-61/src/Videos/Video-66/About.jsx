import { useBioContext } from "./ContexAPI"

export const About = () => {
    // for single data no curle bracket
    const { myName, myAge } = useBioContext()

    return (
        <h1>Hello About. My name is {myName}. I am {myAge} Years old.</h1>
    )
}