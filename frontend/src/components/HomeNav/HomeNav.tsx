import React from "react";

interface HomeNavProps {
  currentPage?: string;
}

function HomeNav(props: HomeNavProps) {
  return (
    <div className="user-nav-div">
      <div className="flex user-nav-wrapper mx-[200px] py-[18px] justify-between bg-transparent">
        <div className="logo-section flex items-center">
          <h1 className="text-[24px] font-bold">DigiWallet</h1>
        </div>
        <div className="nav-selection">
          <ul className="flex gap-10 items-center font-semibold text-sm mr-[110px]">
            <li
              className={`text-secondarytext ${
                props.currentPage === "home" ? "underline" : ""
              }`}
            >
              Home
            </li>
            <li
              className={`text-secondarytext ${
                props.currentPage === "transfer" ? "underline" : ""
              }`}
            >
              Transfer
            </li>
            <li
              className={`text-secondarytext ${
                props.currentPage === "topup" ? "underline" : ""
              }`}
            >
              Topup
            </li>
            <li
              className={`text-secondarytext ${
                props.currentPage === "games" ? "underline" : ""
              }`}
            >
              Games
            </li>
            <li className="text-secondarytext">Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
