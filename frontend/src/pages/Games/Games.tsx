import { useState, useEffect } from "react";
import UserNav from "../../components/UserNav/UserNav";
import { useStoreLoginPersist } from "../../store/store";
import { URL } from "../../constants/constants";
import GameSummary from "../../components/GamesSummary/GamesSummary";

function Games() {
  const stateLoginPersist = useStoreLoginPersist();
  const [summaryData, setSummaryData] = useState<string[]>([]);
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
  }, []);

  return (
    <div className="games-div">
      <UserNav currentPage="games" />
      <GameSummary
        name={summaryData[0]}
        accountNum={summaryData[1]}
        money={parseInt(summaryData[2])}
      />
    </div>
  );
}

export default Games;
