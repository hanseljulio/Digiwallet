import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomeNav from "./components/HomeNav/HomeNav";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeNav />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
