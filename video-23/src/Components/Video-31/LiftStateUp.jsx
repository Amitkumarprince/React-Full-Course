import { useState } from "react"

export const LiftStateUp31 = () => {
    const [inputValue, setInputValue] = useState("")

    return (
        <>
            <InputComponent InputValue={inputValue} setInput={setInputValue} />
            <DisplayComponent InputValue={inputValue} />
        </>
    )
}


const InputComponent = ({ InputValue, setInput }) => {
    // const [inputValue, setInputValue] = useState("")
    return (
        <>
            <input type="text"
                placeholder="Enter Your name"
                value={InputValue}
                onChange={(e) => setInput(e.target.value)}
            />
        </>
    )
}

const DisplayComponent = ({InputValue}) => {
    return (
        <>
            <p>The current input value is : {InputValue} </p>
        </>
    )
}