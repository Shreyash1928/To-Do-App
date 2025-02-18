import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";

// Load todos from localStorage (if available)
const loadTodosFromLocalStorage = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const initialState = {
  todos: loadTodosFromLocalStorage(),
};

let nextTodoId =
  initialState.todos.length > 0
    ? Math.max(...initialState.todos.map((todo) => todo.id)) + 1
    : 0;

const todoReducer = (state = initialState, action) => {
  let updatedTodos;

  switch (action.type) {
    case ADD_TODO:
      updatedTodos = [
        ...state.todos,
        {
          id: nextTodoId++,
          text: action.payload.text,
          completed: false,
        },
      ];
      // Save updated todos to localStorage
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { ...state, todos: updatedTodos };

    case REMOVE_TODO:
      updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      // Save updated todos to localStorage
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { ...state, todos: updatedTodos };

    case TOGGLE_TODO:
      updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      // Save updated todos to localStorage
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { ...state, todos: updatedTodos };

    default:
      return state;
  }
};

export default todoReducer;
