import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Signup />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
