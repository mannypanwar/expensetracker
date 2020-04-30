import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transection } from "./Transection";

export const TransectionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transection key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
