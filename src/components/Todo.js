import React, { useState } from "react";
import "./todo.scss";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.map((todo, todoIndex) =>
      todoIndex === index ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleCompletion = (index) => {
    const updatedTodos = todos.map((todo, todoIndex) =>
      todoIndex === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>

      {/* Active Todos */}
      <div className="list">
        <ul>
          {todos
            .filter((todo) => !todo.completed)
            .map((todo, index) => (
              <li key={index} onClick={() => toggleCompletion(index)}>
                {todo.text}
                <img
                  src="/assets/delete-2-svgrepo-com.svg"
                  className="delete-btn"
                  alt="Delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteTodo(index); // Mark as completed on delete
                  }}
                />
              </li>
            ))}
        </ul>
      </div>

      {/* Completed Todos */}
      <div className="list">
        <h2>Completed Tasks</h2>
        <ul>
          {todos
            .filter((todo) => todo.completed)
            .map((todo, index) => (
              <li key={index} className="completed">
                {todo.text}
                
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
