export const Buttons9 = () => {
    const age = 5;

    let canWatch = "Not Available"
    if (age >= 18) canWatch = "Watch Now"


    const CanWatch = () => {
        if (age >= 18) return "Watch Now"
        return "Not Available"
    }

    return (
        <>
            <div>
                <h3>Age: {age} </h3>
                <div>
                    <button style={{ color: "red" }}>
                        {age >= 18 ? "Watch Now" : "Not Available"}
                    </button>

                    <button style={{ color: "blue" }}>
                        {canWatch}
                    </button>

                    <button style={{ color: "blue" }}>
                        {CanWatch()}
                    </button>
                </div>
            </div>
        </>
    )
}