import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import SortSearch from "./SortSearch";

function ShowSortSearch() {
  return (
    <div className="flex show-sort-search-div ml-[200px] mr-[305px] justify-between pt-[100px]">
      <div className="show-transaction">
        <Dropdown
          label="Show"
          spacing="flex gap-6 items-center text-[#737373] font-normal pb-4"
          labelStyle="text-[#737373] font-normal"
          options={[
            "Last 10 transactions",
            "This month",
            "Last month",
            "This year",
            "Last year",
          ]}
        />
      </div>
      <div className="sort-search-section">
        <SortSearch />
      </div>
    </div>
  );
}

export default ShowSortSearch;
