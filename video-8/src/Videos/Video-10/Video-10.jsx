export const Video10 = () => {
    const students = []
    return (
        <>
            <p>{students.length === 0 && "No student found"} </p>
            {/* <p>{!students.length && "No student found"} </p> */}
            <p>Number of students - {students.length} </p>
        </>
    )
}