import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers";

// Using Redux Toolkit's configureStore to create the store
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
