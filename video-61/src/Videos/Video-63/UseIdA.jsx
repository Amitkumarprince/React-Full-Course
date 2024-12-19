import { useId } from "react"

export const UseId63A = () => {
    const id = useId();
    return (
        <form>
            <div>
                <label htmlFor={id + "usernameId"}>Username: </label>
                <input type="text" id={id + "usernameId"} name="name" />
            </div>
            <div>
                <label htmlFor={id + "emailId"}>Email: </label>
                <input type="text" id={id + "emailId"} name="email" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}