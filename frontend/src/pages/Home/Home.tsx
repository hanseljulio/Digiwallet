import HomeSummary from "../../components/HomeSummary/HomeSummary";
import UserNav from "../../components/UserNav/UserNav";
import TableHead from "../../components/Table/TableHead";
import TableData from "../../components/Table/TableData";
import ShowSortSearch from "../../components/ShowSortSearch/ShowSortSearch";
import { useState, useEffect } from "react";
import { URL } from "../../constants/constants";
import { useStoreLoginPersist } from "../../store/store";

function Home() {
  const stateLoginPersist = useStoreLoginPersist();
  const [summaryData, setSummaryData] = useState<string[]>([]);

  console.log(summaryData);

  useEffect(() => {
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

    getUserData();
  }, []);

  return (
    <div className="home-div">
      <UserNav currentPage="home" />
      <HomeSummary
        name={summaryData[0]}
        accountNum={summaryData[1]}
        money={parseInt(summaryData[2])}
      />
      <ShowSortSearch />
      <div className="table-section ml-[200px] mr-[305px]">
        <table className="table-area w-full">
          <TableHead />
          <TableData
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
          />
        </table>
      </div>
    </div>
  );
}

export default Home;
