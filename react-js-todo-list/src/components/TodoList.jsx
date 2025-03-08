import React, { useState } from 'react'
import "./TodoList.css"

const TodoList = () => {

    const [todo , setTodo] = useState("")
    const [todos , SetTodos] = useState([])

    const onTaskChange = (e) => {
        console.log(e.target.value)
        setTodo(e.target.value)
    }

    const AddTask = () => {
        SetTodos([...todos , todo])
        console.log(todos)
        setTodo("")
    }

    const deleteTodo = (id) => {
        const unDeletedTasks = todos.filter((_ , a) => a !== id )
        SetTodos(unDeletedTasks)
    }

  return (
    <div>
      
        <h2>
            I am todo List
        </h2>

        <input type="text" value={todo} onChange={onTaskChange} />

        <button onClick={AddTask} >Add Task</button>

        <ul>
            {todos.map((task , idx) => {
                return (
                    <div className='todos' >
                        <li key={idx}>
                            {task} 
                        </li> 

                        <div className='todo-icons' >
                            <i class="fa fa-trash" onClick={ () => deleteTodo(idx)} aria-hidden="true"></i>
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                        </div>

                    </div>
                )
            })}
        </ul>

    </div>
  )
}

export default TodoList
