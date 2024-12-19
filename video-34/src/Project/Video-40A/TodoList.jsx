import { MdCheck, MdDelete } from "react-icons/md"

export const TodoList = ({ data, checked, onhandleDeleteTodo, onHandleCheckedTodo }) => {
    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList"} >{data}</span>
            <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
                <MdCheck />
            </button>
            <button className="delete-btn" onClick={() => onhandleDeleteTodo(data)}>
                <MdDelete />
            </button>
        </li>
    )
}