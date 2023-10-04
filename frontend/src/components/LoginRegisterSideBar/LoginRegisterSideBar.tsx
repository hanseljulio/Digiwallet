import React from "react";
import "./LoginRegisterSideBar.css";

interface SidebarProps {
  picture?: string;
}

function LoginRegisterSideBar(props: SidebarProps) {
  return (
    <div className="loginregister-sidebar-div">
      <div className="loginregister-wrapper absolute bg-secondary w-[480px] h-screen bg-primary right-0 top-0">
        <img
          className="pt-[250px] pl-[100px]"
          src={props.picture ? props.picture : ""}
          alt=""
        />
      </div>
    </div>
  );
}

export default LoginRegisterSideBar;
