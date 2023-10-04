import React from "react";
import UserNav from "../../components/UserNav/UserNav";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Topup.css";
import Dropdown from "../../components/Dropdown/Dropdown";

function Topup() {
  return (
    <div className="topup-div">
      <UserNav currentPage="topup" />
      <h1 className="text-[40px] pt-[110px] pb-[60px] font-bold text-center">
        Topup
      </h1>
      <div className="topup-form">
        <form action="">
          <Dropdown label="From" spacing="pb-[24px]" />
          <Input
            label="To"
            name="topup-to"
            type="text"
            width="w-[450px]"
            spacing="pb-[24px]"
            disabled={true}
          />
          <Input
            label="Amount"
            name="topup-amount"
            type="number"
            width="w-[450px]"
            spacing="pb-[24px]"
          />
          <Button
            text="Top Up"
            styling="w-[450px] bg-primary px-[20px] py-[16px] text-white font-bold rounded-[5px]"
          />
        </form>
      </div>
    </div>
  );
}

export default Topup;
