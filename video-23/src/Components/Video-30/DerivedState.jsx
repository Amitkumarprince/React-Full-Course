import { useState } from "react"
import "./Derived.css"
// const users = 

export const DerivedState30 = () => {
    const [users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        // { name: "Angles", age: 45 },
    ])

    const userCount = users.length;

    // const AverageAge = users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount
    const AverageAge = users.reduce((start, curElem) => start + curElem.age, 0) / userCount
    return (
        <>
            <div className="main-div">
                <h1>User List</h1>
                <ul>
                    {
                        users.map((curElem, index) => {
                            return <li key={index}>
                                {curElem.name} - {curElem.age} years old.
                            </li>
                        })
                    }
                </ul>
                <p>Total Users: {userCount}</p>
                <p>Average age: {AverageAge}</p>
            </div>
        </>
    )
}