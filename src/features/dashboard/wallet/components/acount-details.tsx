import React from "react";
import { Button } from "@/components/ui/button";
import Dotted from "@/components/icons/dotted.svg";

interface WalletData {
  type: "NGN" | "GBP" | "USD";
  balance: number;
  flag?: string;
}

const wallets: WalletData[] = [
  {
    type: "NGN",
    balance: 245800.89,
  },
  {
    type: "GBP",
    balance: 245800.89,
  },
  {
    type: "USD",
    balance: 245800.89,
  },
];

function AccountDetails() {
  const totalBalance = wallets.reduce((acc, wallet) => acc + wallet.balance, 0);

  const getFlagForCurrency = (type: string) => {
    switch (type) {
      case "NGN":
        return "🇳🇬";
      case "GBP":
        return "🇬🇧";
      case "USD":
        return "🇺🇸";
      default:
        return "";
    }
  };

  return (
    <div className="p-6 bg-primary rounded-xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-gray-400 mb-2">Your consolidated balance</p>
          <h2 className="text-4xl font-semibold text-white">
            ${totalBalance.toLocaleString()}
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            variant="default"
            className="bg-tertiary text-primary hover:bg-secondary/30"
          >
            Add New Wallet
          </Button>

          <Dotted />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {wallets.map((wallet) => (
          <div
            key={wallet.type}
            className="p-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors cursor-pointer border border-tertiary flex flex-col justify-center items-start"
          >
            <div className="flex items-center gap-2 mb-4 justify-center">
              <span className="text-2xl border border-tertiary rounded-full size-10 flex items-center justify-center bg-white">
                {getFlagForCurrency(wallet.type)}
              </span>
              <div>
                <span className="text-white font-medium">
                  {wallet.type} Wallet
                </span>
                <p className="text-white text-lg">
                  Balance: {wallet.balance.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountDetails;
