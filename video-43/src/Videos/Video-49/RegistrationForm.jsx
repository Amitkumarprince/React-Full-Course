import { useState } from "react";
import "./Registration.css";

export const RegistrationForm49 = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser((prev) => ({ ...prev, [name]: value }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>

                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input type="text"
                        name="firstName"
                        placeholder="Enter firstName"
                        required
                        value={user.firstName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input type="text"
                        name="lastName"
                        placeholder="Enter lastName"
                        required
                        value={user.lastName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input type="text"
                        placeholder="Enter Email"
                        name="email"
                        required
                        value={user.email}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="password">
                        <b>password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        required
                        value={user.password}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="phone">
                        <b>phone Number</b>
                    </label>
                    <input
                        type="phone"
                        name="phone"
                        placeholder="9525308611"
                        required
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                    />

                    <p>By creating an account you agree to out
                        <a href="#" style={{ color: "dodgerblue" }}  >
                            Terms & privacy
                        </a>
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </div>

                </div>
            </form>

            <section
                className="summary"
            // style={{ textAlign: "center", marginTop: "30px" }}
            >
                <p>
                    Hello, my name is
                    <span>
                        {user.firstName} {user.lastName}
                    </span>
                    . My email adress is <span>{user.email} </span> and my phoner number is
                    <span>{user.phoneNumber} </span>
                </p>

            </section>


        </>
    )
}

