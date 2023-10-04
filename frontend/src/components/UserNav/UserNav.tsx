import React from "react";
import { useNavigate } from "react-router-dom";

interface HomeNavProps {
  currentPage?: string;
}

function UserNav(props: HomeNavProps) {
  const navigate = useNavigate();

  const redirectTransfer = () => {
    navigate("/transfer");
  };

  const redirectTopup = () => {
    navigate("/topup");
  };

  const redirectGames = () => {
    navigate("/games");
  };

  const redirectLogout = () => {
    navigate("/login");
  };

  const redirectHome = () => {
    navigate("/");
  };

  return (
    <div className="user-nav-div ">
      <div className="flex user-nav-wrapper mx-[200px] py-[18px] justify-between bg-transparent">
        <div className="logo-section flex items-center">
          <h1 className="text-[24px] font-bold">DigiWallet</h1>
        </div>
        <div className="nav-selection">
          <ul className="flex gap-10 items-center pt-[8px] font-semibold text-sm mr-[110px]">
            <li
              className={`text-secondarytext ${
                props.currentPage === "home" ? "underline" : ""
              } hover:cursor-pointer`}
              onClick={redirectHome}
            >
              Home
            </li>
            <li
              className={`text-secondarytext ${
                props.currentPage === "transfer" ? "underline" : ""
              } hover:cursor-pointer`}
              onClick={redirectTransfer}
            >
              Transfer
            </li>
            <li
              className={`text-secondarytext ${
                props.currentPage === "topup" ? "underline" : ""
              } hover:cursor-pointer`}
              onClick={redirectTopup}
            >
              Topup
            </li>
            <li
              className={`text-secondarytext ${
                props.currentPage === "games" ? "underline" : ""
              } hover:cursor-pointer`}
              onClick={redirectGames}
            >
              Games
            </li>
            <li
              className="text-secondarytext hover:cursor-pointer"
              onClick={redirectLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserNav;
