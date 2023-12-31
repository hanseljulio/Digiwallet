import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Transfer from "./pages/Transfer/Transfer";
import Topup from "./pages/Topup/Topup";
import { Navigate, Outlet } from "react-router-dom";
import { useStoreLoginPersist } from "./store/store";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const PrivateRoutes = () => {
    const stateLoginPersist = useStoreLoginPersist();
    if (stateLoginPersist.token === "") {
      return <Navigate to="/error" replace />;
    }

    return <Outlet />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/error" element={<ErrorPage />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/topup" element={<Topup />} />
          <Route path="/games" element={<Games />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
