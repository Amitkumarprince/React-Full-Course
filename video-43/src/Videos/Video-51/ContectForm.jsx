import { useState } from "react"
import "./Contact.css"

export const ContactForm51 = () => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const contactData = {
            username,
            password,
            message
        }

        console.log(contactData)
    }

    return (
        <section className="container">
            <form onSubmit={handleFormSubmit}>
                <h1>Contact Form</h1>

                <label htmlFor="userName">UserName</label>
                <input type="text" name="username" required autoComplete="off"
                    value={username} onChange={(e) => setUserName(e.target.value)}
                />

                <label htmlFor="password">password</label>
                <input type="text" name="password" required autoComplete="off"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="message">message</label>
                <textarea type="text" name="message" required autoComplete="off"
                  rows="6"  value={message} onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
    )
}