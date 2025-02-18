export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// Action to add a new to-do
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: { text },
  };
};

// Action to remove a to-do
export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: { id },
  };
};

// Action to toggle a to-do's completion status
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
};
