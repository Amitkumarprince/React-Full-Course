import "./Ev.css"

export const EventHandling23 = () => {

    const handleButtonClick = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.type)
        // alert("Hello I Am onClick Event")
    }

    const handleWelcomeUser = (User) => {
        console.log(`Hello ${User}, Welcome`)
    }

    return (
        <>
            <button onClick={handleButtonClick}>Click me A</button>
            <button onClick={(event) => handleButtonClick(event)}>Click me B</button>
            <br />
            <button onClick={(event) => console.log(event)}>Inline FunctionA</button>
            <button onClick={(event) => console.log(event, event.target, event.type)}>Inline FunctionB</button>
            <button onClick={() => console.log("Hello Amit")}>Inline FunctionC</button>
            <br />
            <button onClick={() => handleWelcomeUser("Amit")}>Click Me C</button>
        </>
    )
}