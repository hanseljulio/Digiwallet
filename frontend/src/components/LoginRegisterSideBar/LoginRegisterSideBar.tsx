import React from "react";
import "./LoginRegisterSideBar.css";

interface SidebarProps {
  picture?: string;
}

function LoginRegisterSideBar(props: SidebarProps) {
  return (
    <div className="loginregister-sidebar">
      <div className="loginregister-wrapper absolute bg-secondary w-[480px] h-screen bg-primary right-0 top-0">
        <img
          className="m-auto pt-[250px]"
          src={props.picture ? props.picture : ""}
          alt=""
        />
      </div>
    </div>
  );
}

export default LoginRegisterSideBar;
