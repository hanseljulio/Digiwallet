import { useState, useEffect } from "react";
import UserNav from "../../components/UserNav/UserNav";
import { useStoreLoginPersist } from "../../store/store";
import { URL } from "../../constants/constants";
import GameSummary from "../../components/GamesSummary/GamesSummary";
import GameCard from "../../components/GameCard/GameCard";
import "./Games.css";

function Games() {
  const stateLoginPersist = useStoreLoginPersist();
  const [summaryData, setSummaryData] = useState<string[]>([]);
  const [chance, setChance] = useState<number>(3);
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
      <div className="flex-col games-section text-center pt-[48px]">
        <h1 className="text-[40px] font-bold pb-[24px]">Games</h1>
        <p className="text-[18px] pb-[12px]">
          Choose a random box below to get a reward!
        </p>
        <p className="text-[18px] pb-[12px]">Chance: {chance}</p>
        <p className="text-[18px] underline pb-[50px]">Check Leaderboard</p>
        <div className="cards-section">
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
      </div>
    </div>
  );
}

export default Games;
