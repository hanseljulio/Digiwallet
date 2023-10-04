import { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import LoginRegisterNav from "../../components/LoginRegisterNav/LoginRegisterNav";
import LoginRegisterSideBar from "../../components/LoginRegisterSideBar/LoginRegisterSideBar";
import { URL, HEADER, LOGIN } from "../../constants/constants";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitTest = async (e: any) => {
    e.preventDefault();

    const loginData = {
      method: "POST",
      headers: {
        "Content-Type": HEADER,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    try {
      const response = await fetch(URL + LOGIN, loginData);

      if (!response.ok) {
        alert(`${response.statusText} - Incorrect email or password`);
      }
      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login-div">
      <LoginRegisterNav />
      <LoginRegisterSideBar picture="./img/login.png" />
      <div className="register-area mx-[200px] pt-[185px]">
        <h1 className="text-[40px] font-bold pb-[60px]">Login</h1>
        <form action="" onSubmit={submitTest}>
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

export default Login;
