import { useState } from "react"

export const Controlled47 = () => {
    const [name, setName] = useState("")

    const handleChange = (event) => {
        setName(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // const dataValue= document.querySelector("#inputValue").value
        // console.log(dataValue)
        console.log(name)
    }
    return (
        <section className="container">
            <h1>Controlled vs UnControlled  Component</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name :
                    <input
                        id="inputName"
                        type="text"
                        value={name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit" className="state-button">
                    Submit
                </button>
            </form>
        </section>
    )
}

