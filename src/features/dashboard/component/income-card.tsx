"use client";

import { StatCard } from "@/features/dashboard/component/stat-card";
import IncomeIcon from "@/components/icons/income-icon.svg";
import OutcomeIcon from "@/components/icons/outcome-icon.svg";
import React from "react";

function IncomeCard() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <StatCard
        title="Total Income"
        amount={632}
        percentageChange={1.29}
        icon={<IncomeIcon />}
        iconBgColor="bg-[#64CFF6]"
      />
      <StatCard
        title="Total Outcome"
        amount={632}
        percentageChange={-1.29}
        icon={<OutcomeIcon />}
        iconBgColor="bg-[#7B79F9]"
      />
    </div>
  );
}

export default IncomeCard;
