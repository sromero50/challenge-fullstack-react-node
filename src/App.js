import React from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./views/home";
import Operations from "./views/operations";
import AuthProvider from "./Context/authProvider";

function App() {
  
  return (
    <Router>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operations" element={<Operations  />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
