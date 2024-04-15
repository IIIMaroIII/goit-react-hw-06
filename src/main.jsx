import React from "react";
import ReactDOM from "react-dom/client";
import store, { persistor } from "./redux/store.js";

import App from "./App.jsx";
import "modern-normalize/modern-normalize.css";
import "reset-css/reset.css";

import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
