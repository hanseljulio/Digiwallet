import React from "react";
import LoginRegisterNav from "../../components/LoginRegisterNav/LoginRegisterNav";
import LoginRegisterSideBar from "../../components/LoginRegisterSideBar/LoginRegisterSideBar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function Register() {
  return (
    <div className="register-div">
      <LoginRegisterNav />
      <LoginRegisterSideBar picture="./img/signup.png" />

      <div className="register-area mx-[200px] pt-[185px]">
        <h1 className="text-[40px] font-bold pb-[60px]">Register</h1>
        <form action="">
          <Input
            label="Name"
            name="register-name"
            type="text"
            width="w-[450px]"
            spacing="pb-[24px]"
            placeholder="Asep Budiantoro Chandradiman"
          />
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

export default Register;
