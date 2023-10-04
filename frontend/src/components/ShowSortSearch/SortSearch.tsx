import "./ShowSortSearch.css";

function SortSearch() {
  return (
    <div className="flex gap-3 sort-search-div items-center">
      <p className="text-[#737373] font-normal w-[70px]">Sort by</p>
      <div className="date-amount">
        <select
          className="p-4 bg-[#F1F1F1] w-full rounded"
          name="date-amount-dropdown"
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>
      <div className="asc-desc">
        <select
          className="p-4 bg-[#F1F1F1] w-full rounded"
          name="asc-desc-dropdown"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="input-search">
        <input
          type="text"
          className="search-input w-[258px] text-sm"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default SortSearch;
