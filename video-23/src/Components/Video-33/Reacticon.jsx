import { FaToggleOff } from "react-icons/fa6";
import { PiUserSwitchThin } from "react-icons/pi";


export const ReactIcon33 = () => {
    return (
        <>
            <h1 style={{ color: "#000", textAlign: "center" }}>
                Toggle Switch
                <br />
                <FaToggleOff style={{ color: "red", textAlign: "center", padding: "20px" }} />
                <PiUserSwitchThin style={{ color: "black", backgroundColor: "Blue", textAlign: "center", padding: "20px" }} />
            </h1>
        </>
    )
}