// import "./Ev.css"

export const EventProps24 = () => {

    const handleWelcomeUser = (user) => {
        console.log(`Hello ${user}`)
    }
    const handelHover = () => {
        console.log("Hey Thanks for hovering me")
    }
    return (
        <>
            <WelcomeUser
                // onClick={() => handleWelcomeUser("Amit")}
                onButtonClick={() => handleWelcomeUser("Amit")}
                onMouseEnter={handelHover}
            />
        </>
    )
}

const WelcomeUser = (props) => {

    const handleGreeting = (user) => {
        console.log(`Hey ${user}, Welcome`)
        props.onMouseEnter()
    }
    return (
        <>
            {/* <button onClick={props.onClick} >Click Me</button> */}
            <button onClick={props.onButtonClick} >Click Me</button>
            <button onMouseEnter={props.onMouseEnter} >Click Me</button>
            <button onClick={handleGreeting} >Click Me</button>
            <button onClick={() => handleGreeting("Amit")} >Click Me</button>
        </>
    )
}