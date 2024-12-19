import { useState } from "react"
import "./Registration.css"
export const LoginForm = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    // const handleInputChange = (e) => {
    //     // setUserName(e.target.value)
    //     const {name, value}= e.target;

    //     switch (name) {
    //         case "username":
    //             setUserName(value)
    //             break;

    //         case "password":
    //             setPassword(value)
    //             break;

    //         default:
    //             break;
    //     }
    // }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
            username,
            password
        }
        console.log(formData)
    }



    return (
        <section className="container">
            <form
                onSubmit={handleFormSubmit}
            >
                <h2>Login </h2>

                <label htmlFor="username">
                    <b>UserName</b>
                </label>
                <input type="text"
                    name="username"
                    placeholder="Enter UserName"
                    required
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                // onChange={handleInputChange}


                />

                <label htmlFor="password">
                    <b>password</b>
                </label>
                <input type="text"
                    name="password"
                    placeholder="Enter password"
                    required
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                // onChange={handleInputChange}
                />

                <button type="submit">
                    Login
                </button>
            </form>
        </section>
    )
}