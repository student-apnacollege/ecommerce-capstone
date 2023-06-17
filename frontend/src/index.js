import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import TopNav from "./components/others/TopNav";
import Navbar from "./components/others/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TopNav />
    <Navbar />
  </React.StrictMode>
);
