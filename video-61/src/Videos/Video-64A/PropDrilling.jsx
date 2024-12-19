import { useContext } from "react"
import { BioContext } from "./ContexAPI"

export const ParentComponent64 = () => {

    const  {myName, myAge}  = useContext(BioContext)

    return (
        <section>
            <h1>Component A {myName}</h1>
            <ChildComponent data="React JS" />
        </section>
    )
}

const ChildComponent = (props) => {
    return (
        <>
            <h1>Hello, I am component B</h1>
            <GrandChildComponent data={props.data} />
        </>
    )
}

const GrandChildComponent = (props) => {
    
    return (
        <>
            <h1>Hello, I am component c </h1>
            <GrandGrandChildComponent data={props.data} />
        </>
    )
}


const GrandGrandChildComponent = (props) => {
    const  {myName, myAge}  = useContext(BioContext)
    return (
        <>
            <h1>Hello, I love {props.data}  {myName}</h1>
        </>
    )
}