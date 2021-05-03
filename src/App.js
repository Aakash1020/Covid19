import "./App.css";
import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <div className="App">
      <AnimatePresence initial={true} exitBeforeEnter>
        <Router>
          <Sidebar />
        </Router>
      </AnimatePresence>
    </div>
  );
}
