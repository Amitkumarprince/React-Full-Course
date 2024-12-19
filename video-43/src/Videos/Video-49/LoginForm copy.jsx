import { useState } from "react"
import "./Registration.css"
export const LoginForm = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target.value;

        setUser((prev) => ({ ...prev, [name]: value }))
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(user)
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
                value={user.username}
                onChange={handleInputChange}

                />

                <label htmlFor="password">
                    <b>Password</b>
                </label>
                <input type="text"
                    name="password"
                    placeholder="Enter Password"
                    required
                // value={user.password}
                value={user.password}
                onChange={handleInputChange}
                />

                <button type="submit">
                    Login
                </button>
            </form>
        </section>
    )
}