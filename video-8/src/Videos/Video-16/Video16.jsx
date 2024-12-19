export const Profile16 = () => {
    return (
        <>
            <h1>Prpfile card challenge</h1>
            <ProfileCard
                name="Amit"
                age={26}
                greeting={
                    <div>
                        <strong>Hi Amit, have a wonderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Hicking</p>
                <button>Contact</button>
            </ProfileCard>

            <br /><br /><br />
            
            <ProfileCard
                name="Deepak"
                age={25}
                greeting={
                    <div>
                        <strong>Hi Deepak, have a wonderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Playing, Hicking</p>
                <button>Contact</button>
            </ProfileCard>
        </>
    )
}

const ProfileCard = (props) => {
    return (
        <>
            <h2>Name: {props.name} </h2>
            <p>Age: {props.age} </p>
            <p>{props.greeting} </p>
            <div>{props.children} </div>
        </>
    )
}


// const ProfileCard = (props) => {
//     const { name, age, greeting, children } = props;
//     return (
//         <>
//             <h2>Name: {name} </h2>
//             <p>Age: {age} </p>
//             <p>{greeting} </p>
//             <div>{children} </div>
//         </>
//     )
// }


// const ProfileCard = ({name, age, greeting, children}) => {
//     return (
//         <>
//             <h2>Name: {name} </h2>
//             <p>Age: {age} </p>
//             <p>{greeting} </p>
//             <div>{children} </div>
//         </>
//     )
// }