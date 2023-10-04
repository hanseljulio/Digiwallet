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
}

const capitalize = (text: string) => {
  const firstLetter = text[0].toUpperCase();
  const modifiedLetter = firstLetter + text.slice(1);
  return modifiedLetter === "Topup" ? "Top up" : modifiedLetter;
};

function Success(props: SuccessProps) {
  const capitalizedTitle = capitalize(props.currentPage);

  return (
    <div className="flex success-div">
      <UserNav currentPage={props.currentPage} />
      <div className="flex-col wrapper">
        <h1 className="text-secondarytext text-[40px] mt-[110px] pb-[60px] font-bold text-center">
          {capitalizedTitle}
        </h1>
        <div className="success-card-area">
          <div className="success-card w-[488px] h-[597px] bg-white">
            <div className="checkmark pt-[50px] pb-[80px]">
              <img src={"./img/success.png"} className="pb-[30px]" alt="" />
              <h1 className="text-[#2DC071] text-3xl font-bold text-center">
                {capitalizedTitle} Success
              </h1>
            </div>
            <div className="flex-col details justify-between mx-[40px]">
              <div className="flex justify-between amount-details pb-4">
                <p>Amount</p>
                <p>1.000.000</p>
              </div>
              <div className="flex justify-between transaction-id-details pb-4">
                <p>Transaction Id</p>
                <p>338818239039011</p>
              </div>
              <div className="flex justify-between from-details pb-4">
                <p>From</p>
                <p>11234001000</p>
              </div>
              <div className="flex justify-between to-details pb-4">
                <p>To</p>
                <p>1234005001</p>
              </div>
              <div className="flex justify-between description-details">
                <p>Description</p>
                <p className="w-[166px] text-right">
                  Bayar hutang dan beli bakso
                </p>
              </div>
            </div>
            <div className="flex print-close-buttons justify-center gap-[30px] pt-[40px]">
              <Button text="Print" />
              <Button text="Close" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
