import React from "react";
import UserNav from "../../components/UserNav/UserNav";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Transfer.css";

function Transfer() {
  return (
    <div className="transfer-div">
      <UserNav currentPage="transfer" />
      <h1 className="text-[40px] pt-[110px] pb-[60px] font-bold text-center">
        Transfer
      </h1>
      <div className="transfer-form">
        <form action="">
          <Input
            label="From"
            name="transfer-from"
            type="text"
            width="w-[450px]"
            spacing="pb-[24px]"
            disabled={true}
          />
          <Input
            label="To"
            name="transfer-to"
            type="text"
            width="w-[450px]"
            spacing="pb-[24px]"
          />
          <Input
            label="Amount"
            name="transfer-amount"
            type="number"
            width="w-[450px]"
            spacing="pb-[24px]"
          />
          <Input
            label="Description"
            name="transfer-description"
            type="text"
            width="w-[450px]"
            spacing="pb-[24px]"
          />
          <Button
            text="Send"
            styling="w-[450px] bg-primary px-[20px] py-[16px] text-white font-bold rounded-[5px]"
          />
        </form>
      </div>
    </div>
  );
}

export default Transfer;
