import { useState } from "react"
import "./Contact.css"

export const ContactForm51A = () => {

    const [contact, setContacts] = useState({
        username: "",
        email: "",
        message: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContacts((prev) => ({
            ...prev,
            [name]: value,
        }))
    }



    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(contact)
    }



    return (
        <section className="container">
            <form onSubmit={handleFormSubmit}>
                <h1>Contact Form</h1>

                <label htmlFor="userName">UserName</label>
                <input type="text" name="username" required autoComplete="off"
                    value={contact.username}
                    // onChange={(e) => setUserName(e.target.value)}
                    onChange={handleInputChange}
                />

                <label htmlFor="email">password</label>
                <input type="text" name="email" required autoComplete="off"
                    value={contact.email}
                    // onChange={(e) => setPassword(e.target.value)}
                    onChange={handleInputChange}
                />

                <label htmlFor="message">message</label>
                <textarea type="text" name="message" required autoComplete="off"
                    rows="6" value={contact.message}
                    // onChange={(e) => setMessage(e.target.value)}
                    onChange={handleInputChange}
                ></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
    )
}