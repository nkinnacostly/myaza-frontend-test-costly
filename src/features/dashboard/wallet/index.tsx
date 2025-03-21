import React from "react";
import AccountDetails from "./components/acount-details";
import { TransactionsTable } from "../component/transactions-table";

function WalletComponent() {
  return (
    <div className="flex flex-col gap-4">
      <AccountDetails />
      <TransactionsTable />
    </div>
  );
}

export default WalletComponent;
