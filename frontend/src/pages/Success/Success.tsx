import React from "react";
import UserNav from "../../components/UserNav/UserNav";
import "./Success.css";
import Button from "../../components/Button/Button";

interface SuccessProps {
  currentPage: string;
  amount?: number;
  from?: string;
  to?: string;
  description?: string;
  exitFunction: () => void;
}

const capitalize = (text: string) => {
  const firstLetter = text[0].toUpperCase();
  const modifiedLetter = firstLetter + text.slice(1);
  return modifiedLetter === "Topup" ? "Top up" : modifiedLetter;
};

function Success(props: SuccessProps) {
  const currencyConverter = (money: number): string => {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const transactionId = Math.floor(
    Math.random() * (999999999999999 - 10000000000000 + 1) + 10000000000000
  ).toString();

  const capitalizedTitle = capitalize(props.currentPage);
  const convertedAmount = currencyConverter(props.amount as number);

  return (
    <div className="flex success-div">
      <UserNav currentPage={props.currentPage} />
      <div className="flex-col wrapper">
        <h1 className="text-secondarytext text-[40px] mt-[110px] pb-[60px] font-bold text-center">
          {capitalizedTitle}
        </h1>
        <div className="success-card-area">
          <div className="success-card w-[488px] h-[597px] bg-white">
            <div className="checkmark pt-[50px] pb-[60px]">
              <img src={"./img/success.png"} className="pb-[30px]" alt="" />
              <h1 className="text-[#2DC071] text-3xl font-bold text-center">
                {capitalizedTitle} Success
              </h1>
            </div>
            <div className="flex-col details justify-between mx-[40px]">
              <div className="flex justify-between amount-details pb-4 items-center">
                <p>Amount</p>
                <p className="money-amount font-bold">{convertedAmount}</p>
              </div>
              <div className="flex justify-between transaction-id-details pb-4">
                <p>Transaction Id</p>
                <p>{transactionId}</p>
              </div>
              <div className="flex justify-between from-details pb-4">
                <p>From</p>
                <p>{props.from}</p>
              </div>
              <div className="flex justify-between to-details pb-4">
                <p>To</p>
                <p>{props.to}</p>
              </div>
              <div className="flex justify-between description-details">
                <p>Description</p>
                <p className="w-[166px] text-right">{props.description}</p>
              </div>
            </div>
            <div className="flex print-close-buttons justify-center gap-[30px] pt-[40px]">
              <Button text="Print" />
              <Button text="Close" onClick={props.exitFunction} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
