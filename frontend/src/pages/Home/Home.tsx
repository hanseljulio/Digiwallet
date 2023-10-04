import HomeSummary from "../../components/HomeSummary/HomeSummary";
import UserNav from "../../components/UserNav/UserNav";
import TableHead from "../../components/Table/TableHead";
import TableData from "../../components/Table/TableData";

function Home() {
  return (
    <div className="home-div">
      <UserNav currentPage="home" />
      <HomeSummary name="Asep" accountNum="13099441122" money={1200000} />

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
