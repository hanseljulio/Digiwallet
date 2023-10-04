import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import LoginRegisterNav from "../../components/LoginRegisterNav/LoginRegisterNav";
import LoginRegisterSideBar from "../../components/LoginRegisterSideBar/LoginRegisterSideBar";

function Login() {
  return (
    <div className="login-div">
      <LoginRegisterNav />
      <LoginRegisterSideBar picture="./img/login.png" />
      <div className="register-area mx-[200px] pt-[185px]">
        <h1 className="text-[40px] font-bold pb-[60px]">Login</h1>
        <form action="">
          <Input
            label="Email"
            name="register-email"
            type="email"
            width="w-[450px]"
            spacing="pb-[24px]"
            placeholder="asep.bc@gmail.com"
          />
          <Input
            label="Password"
            name="register-password"
            type="password"
            width="w-[450px]"
            spacing="pb-[24px]"
            placeholder="*********"
          />
          <Button
            text="Submit"
            styling="w-[450px] bg-primary px-[20px] py-[16px] text-white font-bold rounded-[5px]"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
