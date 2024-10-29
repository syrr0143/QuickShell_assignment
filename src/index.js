import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppProvider from "./state/context.jsx";
import ErrorBoundary from "./Error";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </AppProvider>
  </React.StrictMode>
);
