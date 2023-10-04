import React from "react";
import HomeSummary from "../../components/HomeSummary/HomeSummary";
import UserNav from "../../components/UserNav/UserNav";

function Home() {
  return (
    <div className="home-div">
      <UserNav currentPage="home" />
      <HomeSummary name="Asep" accountNum="13099441122" money={1200000} />
    </div>
  );
}

export default Home;
