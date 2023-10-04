import React from "react";
import "./Table.css";

interface TableDataProps {
  index: number;
  dateTime: string;
  type: string;
  fromTo: string;
  description: string;
  amount: number;
}

function TableData(props: TableDataProps) {
  const currencyConverter = (money: number): string => {
    if (props.type === "DEBIT") {
      return (
        "-" + money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00"
      );
    }

    return "+" + money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
  };

  const convertedMoney = currencyConverter(props.amount as number);

  return (
    <tr className={`${props.index % 2 === 0 ? "bg-white" : "bg-[#EDEDED]"}`}>
      <td className="px-[20px] py-[10px] text-left font-medium text-tabletext">
        {props.dateTime}
      </td>
      <td className="px-[20px] py-[10px] text-left font-medium text-tabletext">
        {props.type}
      </td>
      <td className="px-[20px] py-[10px] text-left font-medium text-tabletext">
        {props.fromTo}
      </td>
      <td className="px-[20px] py-[10px] text-left font-medium text-tabletext">
        {props.description}
      </td>
      <td
        className={`px-[20px] py-[10px] text-left font-medium ${
          props.type === "DEBIT" ? "text-tabletext" : "text-[#219653]"
        }`}
      >
        {convertedMoney}
      </td>
    </tr>
  );
}

export default TableData;
