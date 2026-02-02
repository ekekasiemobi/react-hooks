// Requirements:

import { useState } from "react"
import './counter.css'

// Use useState for todos array
// Use useState for input field
// Input field for new todo
// Add button to add todo
// Display all todos in a list
// Delete button for each todo

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const deleteTodo = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter a new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button className="add-btn" onClick={addTodo}>Add</button>

      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="del-btn" onClick={() => deleteTodo(index)}>Delete</button>
            <br /> <br />
          </li> 
          
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;

