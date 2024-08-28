const TodoItemComponent = (props) => {

    const { todo, deleteTodo, changeStatus, setTodo } = props;
    return (
        <li className="list-group-item">
            <div className={todo.completed ? "text-decoration-line-through" : ""}>
                {/* <div className={todo.completed && "text-decoration-line-through"}> */}
                <span>{todo.id}. {todo.title} - {todo.dueDate}</span>
            </div>
            <button onClick={() => changeStatus(todo)} className="btn btn-success btn-sm me-2">{todo.completed ? "Undo" : "Complete"}</button>
            {/* <button disabled={todo.completed ? true : false} className="btn btn-warning btn-sm me-2">Edit</button> */}
            <button onClick={() => setTodo(todo)} disabled={todo.completed} className="btn btn-warning btn-sm me-2">Edit</button>
            <button onClick={() => deleteTodo(todo)} disabled={todo.completed} className="btn btn-danger btn-sm me-2">Delete</button>
        </li>
    )
}

export default TodoItemComponent