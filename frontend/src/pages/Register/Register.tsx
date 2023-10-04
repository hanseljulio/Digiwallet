import React, { useState } from "react";
import LoginRegisterNav from "../../components/LoginRegisterNav/LoginRegisterNav";
import LoginRegisterSideBar from "../../components/LoginRegisterSideBar/LoginRegisterSideBar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { HEADER, REGISTER, URL } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const submitTest = async (e: any) => {
    e.preventDefault();
    const nameArray = name.split(" ");

    let firstName = "";
    let lastName = "";

    if (nameArray.length === 1) {
      firstName = nameArray[0];
    } else {
      lastName = nameArray[nameArray.length - 1];
      for (let i = 0; i < nameArray.length - 1; i++) {
        firstName += nameArray[i];

        if (i !== nameArray.length - 2) {
          firstName += " ";
        }
      }
    }

    const registerData = {
      method: "POST",
      headers: {
        "Content-Type": HEADER,
      },
      body: JSON.stringify({
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
      }),
    };

    try {
      const response = await fetch(URL + REGISTER, registerData);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
    } catch (e) {
      console.log(e);
    } finally {
      navigate("/login");
    }
  };

  return (
    <div className="register-div">
      <LoginRegisterNav />
      <LoginRegisterSideBar picture="./img/signup.png" />

      <div className="register-area mx-[200px] pt-[185px]">
        <h1 className="text-[40px] font-bold pb-[60px]">Register</h1>
        <form action="" onSubmit={submitTest}>
          <Input
            label="Name"
            name="register-name"
            type="text"
            width="w-[450px]"
            spacing="pb-[24px]"
            placeholder="Asep Budiantoro Chandradiman"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            name="register-email"
            type="email"
            width="w-[450px]"
            spacing="pb-[24px]"
            placeholder="asep.bc@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            name="register-password"
            type="password"
            width="w-[450px]"
            spacing="pb-[24px]"
            placeholder="*********"
            onChange={(e) => setPassword(e.target.value)}
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
