import HomeSummary from "../../components/HomeSummary/HomeSummary";
import UserNav from "../../components/UserNav/UserNav";
import TableHead from "../../components/Table/TableHead";
import TableData from "../../components/Table/TableData";
import ShowSortSearch from "../../components/ShowSortSearch/ShowSortSearch";
import { useState, useEffect } from "react";
import { URL } from "../../constants/constants";
import { useStoreLoginPersist } from "../../store/store";
import { ITableData } from "../../interfaces/interfaces";
import Pagination from "../../components/Pagination/Pagination";

function Home() {
  const stateLoginPersist = useStoreLoginPersist();
  const [summaryData, setSummaryData] = useState<string[]>([]);
  const [tableData, setTableData] = useState<ITableData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);
  const [size, setSize] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>("date");
  const [sortDir, setSortDir] = useState<string>("desc");
  const [search, setSearch] = useState<string>("");

  const updateSortBy = (newSortBy: string) => {
    setSortBy(newSortBy);
  };

  const updateSortDir = (newSortDir: string) => {
    setSortDir(newSortDir);
  };

  const updateSearch = (newSearch: string) => {
    setSearch(newSearch);
  };

  const movePage = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  const filterData = async (
    page: number,
    size: number,
    sortBy: string,
    sortDir: string,
    search: string
  ) => {
    search.replaceAll(" ", "%20");

    const filterURL =
      URL +
      `/transactions?${
        !page ? "" : `page=${currentPage}&size=${size}`
      }&sortBy=${sortBy}&sortDir=${sortDir}&search=${search}`;

    try {
      const response = await fetch(filterURL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${stateLoginPersist.token}`,
        },
      });
      const result = await response.json();

      setCount(result.data.count);
      setCurrentPage(result.data.page);
      setSize(result.data.size);
      setTableData(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getUserData = async () => {
    try {
      const response = await fetch(URL + "/details", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${stateLoginPersist.token}`,
        },
      });
      const result = await response.json();
      setSummaryData([
        result.data.first_name,
        result.data.id,
        result.data.wallet.balance,
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserData();

    filterData(currentPage, size, sortBy, sortDir, search);
  }, [currentPage, sortBy, sortDir, search]);

  const dateConverter = (date: Date) => {
    const time = date.toTimeString().substring(0, 5);

    const modifiedDate = date.toUTCString().substring(4, 16);

    return `${time} - ${modifiedDate}`;
  };

  return (
    <div className="home-div">
      <UserNav currentPage="home" />
      <HomeSummary
        name={summaryData[0]}
        accountNum={summaryData[1]}
        money={parseInt(summaryData[2])}
      />
      <ShowSortSearch
        updateSortBy={updateSortBy}
        updateSortDir={updateSortDir}
        updateSearch={updateSearch}
      />
      <div className="table-section ml-[200px] mr-[305px]">
        <table className="table-area w-full">
          <TableHead />
          {tableData.map((tdata, index) => {
            const convertedDate = dateConverter(new Date(tdata.created_at));
            const convertedType =
              tdata.to_wallet_id === null ? "CREDIT" : "DEBIT";
            const convertedFromTo =
              tdata.source_of_fund_id !== null
                ? tdata.source_of_fund_id
                : tdata.to_wallet_id;
            return (
              <TableData
                index={index + 1}
                dateTime={convertedDate}
                type={convertedType}
                fromTo={convertedFromTo.toString()}
                description={tdata.description}
                amount={tdata.amount}
              />
            );
          })}
        </table>
      </div>
      <div className="pagination-section ml-[200px] mr-[305px] pt-[100px] pb-[50px]">
        <Pagination
          page={currentPage}
          count={count}
          size={size}
          movePage={movePage}
        />
      </div>
    </div>
  );
}

export default Home;
