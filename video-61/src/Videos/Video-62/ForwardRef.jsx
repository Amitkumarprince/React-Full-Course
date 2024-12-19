import { forwardRef, useId, useRef } from "react";

export const ForwardRef62 = () => {

    const username = useRef(null)
    const password = useRef(null)

    // console.log(username)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value)
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <BeforeReact19Input label="username" ref={username} />
            <BeforeReact19Input label="password" ref={password} />
            <button>Submit</button>
        </form>
    )
}

const BeforeReact19Input = ({label, ref}) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id} >{label} </label>
            <input type="text" ref={ref} />
        </div>
    )
}
// const BeforeReact19Input = (props) => {
//     const id = useId();
//     return (
//         <div>
//             <label htmlFor={id} >{props.label} </label>
//             <input type="text" ref={props.ref} />
//         </div>
//     )
// }


// const BeforeReact19Input = forwardRef((props, ref) => {
//     const id = useId();
//     return (
//         <div>
//             <label htmlFor={id} >{props.label} </label>
//             <input type="text" ref={ref} />
//         </div>
//     )
// })