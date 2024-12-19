import { useState } from "react"
import "./ToggleSwitch.css"

export const ToggleSwitch31A = () => {

    const [isOn, setIsOn] = useState(false);

    // console.log(isOn)
    const handleToggleSwitch = () => {
        setIsOn(!isOn)
    }

    const checkIsOn = isOn ? "on" : "off"

    // const toggleBGColor = { background: isOn ? "#4caf50" : "#f44336" }
    const toggleBGColor = { background: isOn ? "#4caf50" : "" }

    return (
        <>
            <div className="toggle-switch"
                onClick={handleToggleSwitch}
                style={toggleBGColor}
            >
                <div className={`switch ${checkIsOn}`} >
                    <span className="switch-state">{checkIsOn}</span>
                </div>
            </div >

            {/* <div className="toggle-switch"
                onClick={handleToggleSwitch}
                style={{ background: isOn ? "#4caf50" : "#f44336" }}
            >
                <div className={`switch ${isOn ? "on" : "off"}`} >
                    <span className="switch-state">{isOn ? "on" : "off"}</span>
                </div>
            </div > */}
        </>
    )
}