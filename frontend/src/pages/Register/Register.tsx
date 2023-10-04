import React from "react";
import LoginRegisterNav from "../../components/LoginRegisterNav/LoginRegisterNav";
import LoginRegisterSideBar from "../../components/LoginRegisterSideBar/LoginRegisterSideBar";

function Register() {
  return (
    <div className="register-div">
      <LoginRegisterNav />
      <LoginRegisterSideBar />
    </div>
  );
}

export default Register;
