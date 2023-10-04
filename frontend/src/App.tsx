import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Transfer from "./pages/Transfer/Transfer";
import Topup from "./pages/Topup/Topup";
import Success from "./pages/Success/Success";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/topup" element={<Topup />} />
      </Routes>
    </div>
  );
}

export default App;
