import React from "react";
import IncomeCard from "./component/income-card";
import { TransactionsTable } from "./component/transactions-table";
import AnalyticsGraph from "./component/analytics-graph";
import PieChartGraph from "./component/pie-chart";
import Card from "./component/card";
// import SemiCircleChart from "./component/mbmbmmb";
function DashboardPage() {
  return (
    <div className="flex items-start justify-between gap-6">
      <div className="w-[70%] flex flex-col gap-6">
        <IncomeCard />
        <AnalyticsGraph />
        <TransactionsTable />
      </div>
      <div className="w-[30%] flex flex-col gap-6">
        <Card
          totalBalance={15595.015}
          currentBalance={5750.2}
          cardNumber="5282 3456 7890 1289"
          expiryDate="09/25"
        />
        <PieChartGraph />
      </div>
    </div>
  );
}

export default DashboardPage;
