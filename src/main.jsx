import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Імпорт BrowserRouter
import { Provider } from "react-redux"; // Імпорт Provider
import store from "./redux/store"; // Імпорт вашого Redux store
import App from "./App"; // Ваш компонент App

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
