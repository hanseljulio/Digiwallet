import React from "react";
import "./LoginRegisterNav.css";
import { useNavigate } from "react-router-dom";

function LoginRegisterNav() {
  const navigate = useNavigate();

  const redirectLogin = () => {
    navigate("/login");
  };

  const redirectRegister = () => {
    navigate("/register");
  };

  return (
    <div className="user-nav-div">
      <div className="flex user-nav-wrapper mx-[200px] py-[18px] justify-between bg-transparent">
        <div className="logo-section flex items-center">
          <h1 className="text-[24px] font-bold">DigiWallet</h1>
        </div>
        <div className="nav-selection">
          <ul className="flex gap-10 items-center font-semibold text-sm mr-[110px]">
            <li className="text-secondarytext">Home</li>
            <li
              className="text-white hover:cursor-pointer"
              onClick={redirectLogin}
            >
              Login
            </li>
            <li
              className="text-white underline hover:cursor-pointer"
              onClick={redirectRegister}
            >
              Register
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterNav;
