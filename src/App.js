import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./redux/actions";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all"); // New state to handle filtering
  const todos = useSelector((state) => state.todos.todos); // Get todos from Redux
  const dispatch = useDispatch();

  // Filtered todos based on the current filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true; // "all" filter shows all todos
  });

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTodo(task)); // Dispatch action to add todo
      setTask(""); // Clear the input field
    }
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button className="add-task-btn" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      {/* Filter buttons */}
      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === "active" ? "active" : ""}`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`filter-btn ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <div className="todo-list">
        <ul>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button
                className="complete-btn"
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="delete-btn"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
