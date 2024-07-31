import React, { useState } from 'react'

function App() {
    // hooks to hold all data
    const [todos, setTodos] = useState([])
    // hooks for getting all data from input field
    const [newTodo, setNewtodo] = useState('')

    // function to add todo
    function addTodo() {
        let newTodos = [...todos, { todos: newTodo.trim() }]
        setTodos(newTodos)
        setNewtodo('')
        console.log(newTodos)
    }

    // function to delete todo
    function deleteTodo(index) {
        let newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    return (


        <div className="container text-center mt-5 mb-5 mx-auto bg-light p-5 rounded w-50 shadow">
            <h1 className=" mb-5 display-1">Taskmaster</h1>
            <input className="form-control w-50 mx-auto" type="text" value={newTodo} onChange={(e) => setNewtodo(e.target.value)} placeholder="Enter Your Task" />
            <br />
            <button className="btn btn-success mx-3" onClick={addTodo}>Add Task</button>
            <button className="btn btn-danger mx-3" onClick={deleteTodo}>Delete Task</button>
            <ul className="list-group w-50 mx-auto mt-5 ">
                {
                    todos.map((todo) => {
                        return <li className="list-group-item">{todo.todos}</li>
                    })
                }
            </ul>

        </div >
    )
}

export default App