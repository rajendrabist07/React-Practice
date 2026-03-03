
import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState(['Learn React', 'Build Projects']);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, input]);
            setInput('');
        }
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <div className="todo-container">
            <h1>Array Status</h1>
            <span>Todo List</span>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add todo"
            />

            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList