import React from "react";

interface GameSummaryProps {
  name: string;
  accountNum: string;
  money: number;
}

function GameSummary(props: GameSummaryProps) {
  const currencyConverter = (money: number): string => {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
  };

  const convertedMoney = currencyConverter(props.money as number);

  return (
    <div className="flex justify-between home-summary-div ml-[200px] mr-[305px] pt-[120px]">
      <div className="flex-col greeting-section">
        <h1 className="text-[24px]">Good morning, {props.name}!</h1>
        <h1 className="text-[18px] font-medium">Account: {props.accountNum}</h1>
      </div>

      <div className="flex-col money-section text-right">
        <p className="text-[18px] font-medium">Balance:</p>
        <h1 className="text-right text-[30px] font-medium">
          IDR {convertedMoney}
        </h1>
      </div>
    </div>
  );
}

export default GameSummary;
