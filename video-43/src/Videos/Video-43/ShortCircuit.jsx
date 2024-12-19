import { useState } from "react"
import "./Ev.css"

export const ShortCircuit = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState("");
    return (
        <section className=" contaner short-contaniner">
            <h1>Welcome to the ShortCurcuit Evaluation!</h1>
            {isLoggedIn && <p>you are logged in!</p>}
            {user ? `Hello ${user}` : "plz log in!"}
            <div>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                <button onClick={() => setUser("vinod Thapa")}>Set User</button>
                <button onClick={() => setUser("")}>Clear User</button>
            </div>
        </section>
    )
}