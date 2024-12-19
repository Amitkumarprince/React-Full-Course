import { useState } from "react"
import "./Todo.css"
import { MdCheck, MdDelete } from "react-icons/md";

export const Delete37 = () => {
    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])

    const handleInputChange = (value) => {
        setInputValue(value)

    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) return
        if (task.includes(inputValue)) {
            setInputValue("")
            return
        }

        setTask((prevTask) => [...prevTask, inputValue])
        setInputValue("")
    }

    const handleDeleteTodo = (value) => {
        // console.log(value)
        // console.log(task)
        // const updatedTask = task.filter((curTask) => curTask === value)
        const updatedTask = task.filter((curTask) => curTask !== value)
        setTask(updatedTask)
    }


    const handleClearTodoData = () => {
        setTask([])
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>

            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text"
                            className="todo-input"
                            autoComplete="off"
                            value={inputValue}
                            onChange={(e) => handleInputChange(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit">
                            Add Task
                        </button>
                    </div>
                </form>
            </section>

            <section>
                <ul>
                    {
                        task.map((curTask, index) => {
                            return (
                                <li key={index} className="todo-item">
                                    <span>{curTask} </span>
                                    <button className="check-btn" >
                                        <MdCheck />
                                    </button>
                                    <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}>
                                        <MdDelete />
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>

            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>
                    Clear All
                </button>
            </section>
        </section>
    )
}