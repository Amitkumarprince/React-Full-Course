import { useState } from "react"
import "./Todo.css"
import { Time } from "./Time";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";

// const todoKey = "reactTodo"

// const getLocalStorageTodoData = () => {
//     const rowTodos = localStorage.getItem(todoKey)
//     if (!rowTodos) return []
//     return JSON.parse(rowTodos)
// }

export const Todo40A = () => {
    const [task, setTask] = useState(()=>getLocalStorageTodoData())



    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;

        if (!content) return;

        // for checking in present
        // if (task.includes(inputValue)) return;
        const ifTodoContentMatched = task.find(
            (curTask) => curTask.content === content
        )
        if (ifTodoContentMatched) return;

        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    }

    // localStorage.setItem(todoKey, JSON.stringify(task))
    setLocalStorageTodoData(task)

    // Todo handleDeleteTodo function
    const handleDeleteTodo = (value) => {
        // console.log(task)
        // console.log(value)
        const updatdTask = task.filter((curTask) => curTask.content !== value)
        setTask(updatdTask)
    }

    // todo handleClearTodoData function
    const handleClearTodoData = () => {
        // console.log(task)
        setTask([])
    }

    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked }
            } else {
                return curTask;
            }
        })
        setTask(updatedTask);
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <Time />
            </header>

            <TodoForm onAddTodo={handleFormSubmit} />

            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask) => {
                            return (
                                <TodoList
                                    key={curTask.id}
                                    data={curTask.content}
                                    checked={curTask.checked}
                                    onhandleDeleteTodo={handleDeleteTodo}
                                    onHandleCheckedTodo={handleCheckedTodo}
                                />
                            )
                        })
                    }
                </ul>
            </section>

            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear all</button>
            </section>

        </section>
    )
}

