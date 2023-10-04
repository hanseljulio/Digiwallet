import React from "react";
import "./Table.css";

function TableHead() {
  return (
    <tr className="table-head-area">
      <th className="px-[20px] py-[10px] text-left w-[208px] h-[69px] text-tabletext">
        Date & Time
      </th>
      <th className="px-[20px] py-[10px] text-left w-[146px] h-[69px] text-tabletext">
        Type
      </th>
      <th className="px-[20px] py-[10px] text-left w-[208px] h-[69px] text-tabletext">
        From/To
      </th>
      <th className="px-[20px] py-[10px] text-left w-[275px] h-[69px] text-tabletext">
        Description
      </th>
      <th className="px-[20px] py-[10px] text-left w-[206px] h-[69px] text-tabletext">
        Amount
      </th>
    </tr>
  );
}

export default TableHead;
