import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Statistics } from "./pages/Statistics";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import "./styles.css";
import { ServoControl } from "./components/controls/ServoControl";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Layout route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="controls" element={<ServoControl />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
