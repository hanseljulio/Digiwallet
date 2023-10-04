import React from "react";

interface HomeSummaryProps {
  name?: string;
  accountNum?: string;
  money?: number;
}

function HomeSummary(props: HomeSummaryProps) {
  const currencyConverter = (money: number): string => {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
  };

  const convertedMoney = currencyConverter(props.money as number);

  return (
    <div className="home-summary-div ml-[200px] mr-[305px] pt-[120px]">
      <div className="greeting-section">
        <h1 className="text-[40px] font-bold">Good morning, {props.name}!</h1>
      </div>
      <div className="flex account-number-section justify-between">
        <h1 className="text-[20px] font-medium">Account: {props.accountNum}</h1>
        <p className="text-[20px] font-medium">Balance:</p>
      </div>
      <div className="money-section">
        <h1 className="text-right text-[50px] font-medium">
          IDR {convertedMoney}
        </h1>
      </div>
    </div>
  );
}

export default HomeSummary;
