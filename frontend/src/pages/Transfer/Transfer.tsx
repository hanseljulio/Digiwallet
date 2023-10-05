import React from "react";
import UserNav from "../../components/UserNav/UserNav";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useStoreLoginPersist } from "../../store/store";
import { useState, useEffect } from "react";
import { URL, HEADER } from "../../constants/constants";
import "./Transfer.css";
import Success from "../Success/Success";

function Transfer() {
  const stateLoginPersist = useStoreLoginPersist();
  const [fromWalletId, setFromWalletId] = useState<number>(0);
  const [toWalletId, setToWalletId] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const getUserData = async () => {
    try {
      const response = await fetch(URL + "/details", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${stateLoginPersist.token}`,
        },
      });
      const result = await response.json();
      setFromWalletId(result.data.wallet.id);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const submitTest = async (e: any) => {
    e.preventDefault();

    if (amount < 1000 || amount > 50000000) {
      alert("Transfer must be between (including) 1.000 and 50.000.000");
      return;
    }

    if (description.length > 35) {
      alert("Maximum length for description is 35 characters");
      return;
    }

    const transferData = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${stateLoginPersist.token}`,
        "Content-Type": HEADER,
      },
      body: JSON.stringify({
        amount: parseInt(amount.toString()),
        to: parseInt(toWalletId.toString()),
        description: description,
      }),
    };

    try {
      const response = await fetch(
        URL + "/transactions/transfer",
        transferData
      );
      if (!response.ok) {
        alert(`${response.statusText}`);
      } else {
        setShowSuccess(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const returnToTransfer = () => {
    setShowSuccess(false);
  };

  return (
    <div className="transfer-area-div">
      {showSuccess ? (
        <Success
          currentPage="transfer"
          amount={amount}
          from={fromWalletId.toString()}
          to={toWalletId.toString()}
          description={description}
          exitFunction={returnToTransfer}
        />
      ) : (
        <div className="transfer-div">
          <UserNav currentPage="transfer" />
          <h1 className="text-[40px] pt-[110px] pb-[60px] font-bold text-center">
            Transfer
          </h1>
          <div className="transfer-form">
            <form action="" onSubmit={submitTest}>
              <Input
                label="From"
                name="transfer-from"
                type="text"
                width="w-[450px]"
                spacing="pb-[24px]"
                value={fromWalletId.toString()}
                disabled={true}
              />
              <Input
                label="To"
                name="transfer-to"
                type="number"
                width="w-[450px]"
                spacing="pb-[24px]"
                onChange={(e) => setToWalletId(e.target.value)}
              />
              <Input
                label="Amount"
                name="transfer-amount"
                type="number"
                width="w-[450px]"
                spacing="pb-[24px]"
                onChange={(e) => setAmount(e.target.value)}
              />
              <Input
                label="Description"
                name="transfer-description"
                type="text"
                width="w-[450px]"
                spacing="pb-[24px]"
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button
                text="Send"
                styling="w-[450px] bg-primary px-[20px] py-[16px] text-white font-bold rounded-[5px]"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Transfer;
