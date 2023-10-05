import { useState, useEffect } from "react";
import UserNav from "../../components/UserNav/UserNav";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Topup.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useStoreLoginPersist } from "../../store/store";
import { URL, HEADER } from "../../constants/constants";
import Success from "../Success/Success";

function Topup() {
  const stateLoginPersist = useStoreLoginPersist();
  const [options, setOptions] = useState<string[]>([]);
  const [getOptionId, setOptionId] = useState<number>(1);
  const [toWalletId, setToWalletId] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const getOptions = async () => {
    try {
      const response = await fetch(URL + "/transactions/source-of-funds", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${stateLoginPersist.token}`,
        },
      });
      const result = await response.json();
      const optionsArray = [];

      for (let i = 0; i < result.data.length; i++) {
        optionsArray.push(result.data[i].name);
      }

      setOptions(optionsArray);
    } catch (e) {
      console.log(e);
    }
  };

  const getUserId = async () => {
    try {
      const response = await fetch(URL + "/details", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${stateLoginPersist.token}`,
        },
      });
      const result = await response.json();
      setToWalletId(result.data.wallet.id);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getOptions();
    getUserId();
  }, []);

  const submit = async (e: any) => {
    e.preventDefault();

    const topUpData = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${stateLoginPersist.token}`,
        "Content-Type": HEADER,
      },
      body: JSON.stringify({
        amount: parseInt(amount.toString()),
        source_of_fund_id: parseInt(getOptionId.toString()),
      }),
    };

    try {
      const response = await fetch(URL + "/transactions/top-up", topUpData);
      if (!response.ok) {
        alert(`${response.statusText}`);
      } else {
        setShowSuccess(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const returnToTopup = () => {
    setShowSuccess(false);
  };

  return (
    <div className="topup-area-div">
      {showSuccess ? (
        <Success
          currentPage="topup"
          amount={amount}
          from={toWalletId.toString()}
          to={toWalletId.toString()}
          description={`Top up from ${options[getOptionId - 1]}`}
          exitFunction={returnToTopup}
        />
      ) : (
        <div className="topup-div">
          <UserNav currentPage="topup" />
          <h1 className="text-[40px] pt-[110px] pb-[60px] font-bold text-center">
            Topup
          </h1>
          <div className="topup-form">
            <form action="" onSubmit={submit}>
              <Dropdown
                label="From"
                spacing="pb-[24px]"
                options={options}
                labelStyle="pb-[16px] text-lg font-bold text-[#252B42]"
                value="topup"
                onChange={(e) => setOptionId(parseInt(e.target.value))}
              />
              <Input
                label="To"
                name="topup-to"
                type="text"
                width="w-[450px]"
                spacing="pb-[24px]"
                value={toWalletId.toString()}
                disabled={true}
              />
              <Input
                label="Amount"
                name="topup-amount"
                type="number"
                width="w-[450px]"
                spacing="pb-[24px]"
                onChange={(e) => setAmount(e.target.value)}
              />
              <Button
                text="Top Up"
                styling="w-[450px] bg-primary px-[20px] py-[16px] text-white font-bold rounded-[5px]"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Topup;
