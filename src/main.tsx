import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";
import "./styles/utility.css";
import "./styles/button.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/solution.css";
import "./styles/spotlight.css";
import "./styles/testimonials.css";
import "./styles/pricing.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/toast.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="bottom-right" autoClose={4200} newestOnTop pauseOnHover />
  </React.StrictMode>
);
