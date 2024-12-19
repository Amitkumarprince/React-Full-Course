import "./Ev.css"

export const EventPropagation25 = () => {

    const handleGrandParent = (event) => {
        // event.stopPropagation(); // ye sirf ise he click hone dega
        console.log("GrandParent Clicked")
    };
    
    const handleParentClick = (event) => {
        // event.stopPropagation(); // ye sirf ise he click hone dega
        console.log("Parent Clicked")
    };

    const handleChildClick = (event) => {
        // console.log(event)
        // event.stopPropagation(); // ye sirf ise he click hone dega
        console.log("Child Clicked")
    };

    return (
        <section className="main-div">
            {/* <div className="g-div" onClick={handleGrandParent}>
                <div className="p-div" onClick={handleParentClick}>
                    <button className="c-div" onClick={handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div> */}
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div>
        </section>
    )
}