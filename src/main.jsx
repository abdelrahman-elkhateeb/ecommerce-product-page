import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppGalleryProvider } from "./context/AppGalleryProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppGalleryProvider>
      <App />
    </AppGalleryProvider>
  </React.StrictMode>,
);
