import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store"; // Ensure this path is correct

// Create the root element using React 18's new method
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app wrapped with the Redux Provider to make the store available
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Redux store is now provided to App */}
      <App />
    </Provider>
  </React.StrictMode>
);


