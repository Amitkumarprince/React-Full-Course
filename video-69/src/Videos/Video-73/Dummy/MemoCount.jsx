import { memo } from "react"
import { useRef } from "react"

export const Counts = () => {
// const Counts = () => {
// export const Counts = memo(() => {
    const renderCount = useRef(0)
    console.log(renderCount)

    return (
        <div>
            <p>
                Nothing changed here but Ive now rendered:
                <span>{renderCount.current++} time(s) </span>
            </p>
        </div>
    )
    };
// });

// export default memo(Counts);