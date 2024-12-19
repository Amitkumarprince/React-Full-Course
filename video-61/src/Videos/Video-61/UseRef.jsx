import { useRef } from "react";

export const UseRef61 = () => {

    // const username = document.getElementById("username")
    // const password = document.getElementById("username")
    // console.log(username, password) // save kerne per

    const username = useRef(null)
    const password = useRef(null)

    // console.log(username)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value)
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="username" ref={username} />
            <br />
            <input type="text" id="password" ref={password} />
            <br />
            <button>Submit</button>
        </form>
    )
}