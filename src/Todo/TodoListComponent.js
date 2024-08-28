import TodoItemComponent from "./TodoItemComponent";

const TodoListComponent = (props) => {

    const { title, todoList, deleteTodo, changeStatus, setTodo } = props;

    return (
        <div className="row">
            <h3 className="mt-4">
                {title}
            </h3>
            <ul className="list-group">
                {/* {TODO_DUMMY_DATA.filter(filteredTodo => !filteredTodo.completed).map(todo => (
                        <TodoItemComponent todo={todo} />
                    ))} */}

                {todoList.map(todo => (
                    <TodoItemComponent setTodo={setTodo} changeStatus={changeStatus} deleteTodo={deleteTodo} key={todo.id} todo={todo} />
                ))}
                {/* <TodoItemComponent todo={} />
                    <TodoItemComponent todo={} />
                    <TodoItemComponent todo={} /> */}
                {/* <li className="list-group-item">
                        <div>
                            <span>1. Task One - 2024-12-12</span>
                        </div>
                        <button className="btn btn-success btn-sm me-2">Complete</button>
                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm me-2">Delete</button>
                    </li> */}
                {/* <li className="list-group-item">
                        <div>
                            <span>2. Task Two - 2024-12-12</span>
                        </div>
                        <button className="btn btn-success btn-sm me-2">Complete</button>
                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm me-2">Delete</button>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <span>3. Task Three - 2024-12-12</span>
                        </div>
                        <button className="btn btn-success btn-sm me-2">Complete</button>
                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm me-2">Delete</button>
                    </li> */}
            </ul>
        </div>
    )
}

export default TodoListComponent