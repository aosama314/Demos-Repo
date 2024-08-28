import { useState } from "react";
import TodoFormContainer from "./TodoFormContainer";
// import TodoItemComponent from "./TodoItemComponent";
import TodoListComponent from "./TodoListComponent";


const TODO_DUMMY_DATA = [
    { id: 1, title: "Task One", dueDate: "2024-12-12", completed: false },
    { id: 2, title: "Task Two", dueDate: "2024-12-12", completed: true },
    { id: 3, title: "Task Three", dueDate: "2024-12-12", completed: true },
    { id: 4, title: "Task Four", dueDate: "2024-12-12", completed: false },
    { id: 5, title: "Task Five", dueDate: "2024-12-12", completed: true },
    { id: 6, title: "Task Six", dueDate: "2024-12-12", completed: true }
];

const TODO_INITIAL_VALUE = { id: 0, title: "", dueDate: "", completed: false };


const TodoContainerComponent = () => {
    // const pending_tasks = TODO_DUMMY_DATA.filter(filteredTodo => !filteredTodo.completed);
    // const completed_tasks = TODO_DUMMY_DATA.filter(filteredTodo => filteredTodo.completed);

    const [todoList, setTodoList] = useState(TODO_DUMMY_DATA);
    const [todoObject, setTodoObject] = useState(TODO_INITIAL_VALUE);

    const generateNextId = () => {
        let maxId = 0;
        for (let index = 0; index < todoList.length; index++) {
            if (todoList[index].id > maxId) {
                maxId = todoList[index].id;
            }
        }

        return ++maxId;
    }

    const submitTodoFormHandler = () => {
        if (todoObject.id !== 0) {
            const modifiedTodoList = todoList.map(todoItem => {
                if (todoItem.id === todoObject.id) {
                    todoItem.title = todoObject.title;
                    todoItem.dueDate = todoObject.dueDate;
                }
                return todoItem;
            });
            setTodoList(modifiedTodoList);
        } else {
            setTodoList([...todoList, { ...todoObject, id: generateNextId() }]);
        }
        setTodoObject(TODO_INITIAL_VALUE);
    }

    const deleteTodoHandler = (todo) => {
        console.log(todo);
        const modifiedTodoList = todoList.filter(todoItem => todoItem.id !== todo.id);
        setTodoList(modifiedTodoList);
    }

    const changeTodoStatusHandler = (todo) => {
        console.log(todo);
        const modifiedTodoList = todoList.map(todoItem => {
            if (todoItem.id === todo.id) {
                todoItem.completed = !todoItem.completed;
            }
            return todoItem;
        });
        setTodoList(modifiedTodoList);
    }

    return (
        <div className="container">
            <TodoFormContainer submitForm={submitTodoFormHandler} todoItem={todoObject} setTodoItem={setTodoObject} />

            {/* <div className="row">
                <h3 className="mt-4">
                    Pending Tasks
                </h3>
                <ul className="list-group">
                    {TODO_DUMMY_DATA.filter(filteredTodo => !filteredTodo.completed).map(todo => (
                        <TodoItemComponent todo={todo} />
                    ))}

                    <TodoItemComponent todo={} />
                    <TodoItemComponent todo={} />
                    <TodoItemComponent todo={} />



                    <li className="list-group-item">
                        <div>
                            <span>1. Task One - 2024-12-12</span>
                        </div>
                        <button className="btn btn-success btn-sm me-2">Complete</button>
                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm me-2">Delete</button>
                    </li>
                    <li className="list-group-item">
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
                    </li>
                </ul>
            </div> */}
            <TodoListComponent setTodo={setTodoObject} changeStatus={changeTodoStatusHandler} deleteTodo={deleteTodoHandler} title="Pending Tasks" todoList={todoList.filter(filteredTodo => !filteredTodo.completed)} />

            {/* <div className="row">
                <h3 className="mt-4">
                    Completed Tasks
                </h3>
                <ul className="list-group">

                    {TODO_DUMMY_DATA.filter(filteredTodo => filteredTodo.completed).map(todo => (
                        <TodoItemComponent todo={todo} />
                    ))}

                    {TODO_DUMMY_DATA.filter(filteredTodo => filteredTodo.completed).map(todo => {
                        // console.log(todo);
                        return <TodoItemComponent todo={todo} />;
                    })}

                    <TodoItemComponent todo={} />
                    <TodoItemComponent todo={{ id: 5, title: "Task Five", dueDate: "2024-12-12", completed: true }} />
                    <TodoItemComponent todo={{ id: 6, title: "Task Six", dueDate: "2024-12-12", completed: true }} />

                    <li className="list-group-item">
                        <div>
                            <span>4. Task Four - 2024-12-12</span>
                        </div>
                        <button className="btn btn-success btn-sm me-2">Undo</button>
                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm me-2">Delete</button>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <span>5. Task Five - 2024-12-12</span>
                        </div>
                        <button className="btn btn-success btn-sm me-2">Undo</button>
                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm me-2">Delete</button>
                    </li>
                    <li className="list-group-item">
                        <div>
                            <span>6. Task Six - 2024-12-12</span>
                        </div>
                        <button className="btn btn-success btn-sm me-2">Undo</button>
                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm me-2">Delete</button>
                    </li>
                </ul>
            </div> */}

            <TodoListComponent setTodo={setTodoObject} changeStatus={changeTodoStatusHandler} deleteTodo={deleteTodoHandler} title="Completed Tasks" todoList={todoList.filter(filteredTodo => filteredTodo.completed)} />

        </div>
    )
}

export default TodoContainerComponent