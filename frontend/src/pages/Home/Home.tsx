import HomeSummary from "../../components/HomeSummary/HomeSummary";
import UserNav from "../../components/UserNav/UserNav";
import TableHead from "../../components/Table/TableHead";
import TableData from "../../components/Table/TableData";
import ShowSortSearch from "../../components/ShowSortSearch/ShowSortSearch";
import { useState, useEffect } from "react";
import { URL } from "../../constants/constants";
import { useStoreLoginPersist } from "../../store/store";
import { ITableData } from "../../interfaces/interfaces";

function Home() {
  const stateLoginPersist = useStoreLoginPersist();
  const [summaryData, setSummaryData] = useState<string[]>([]);
  const [tableData, setTableData] = useState<ITableData[]>([]);

  const filterData = (sortBy?: string, sortDir?: string, search?: string) => {
    filterDataHelper(sortBy, sortDir, search);
  };

  const filterDataHelper = async (
    sortBy?: string,
    sortDir?: string,
    search?: string
  ) => {
    if (!sortBy) {
      sortBy = "date";
    }

    if (!sortDir) {
      sortDir = "desc";
    }

    if (!search) {
      search = "";
    } else {
      search.replaceAll(" ", "%20");
    }

    const filterURL =
      URL +
      `/transactions?sortBy=${sortBy}&sortDir=${sortDir}&search=${search}`;

    try {
      const response = await fetch(filterURL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${stateLoginPersist.token}`,
        },
      });
      const result = await response.json();
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

  const getUserTransactions = async () => {
    try {
      const response = await fetch(URL + "/transactions", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${stateLoginPersist.token}`,
        },
      });
      const result = await response.json();
      setTableData(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserData();
    getUserTransactions();
  }, []);

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
      <ShowSortSearch searchChange={filterData} />
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
    </div>
  );
}

{
  /* <TableData
index={1}
dateTime="20:10 - 30 June 2022"
type="DEBIT"
fromTo="310001001"
description="Fore Coffee"
amount={75000}
/>
<TableData
index={2}
dateTime="20:10 - 30 June 2022"
type="CREDIT"
fromTo="310001001"
description="Fore Coffee"
amount={1000000}
/> */
}

export default Home;
