"use client";

import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Jan", income: 35000, outcome: 25000 },
  { name: "Feb", income: 25000, outcome: 32000 },
  { name: "Mar", income: 28000, outcome: 22000 },
  { name: "Apr", income: 35000, outcome: 25000 },
  { name: "May", income: 40000, outcome: 33000 },
  { name: "Jun", income: 22000, outcome: 27000 },
  { name: "Jul", income: 22000, outcome: 27000 },
  { name: "Aug", income: 22000, outcome: 27000 },
];

function AnalyticsGraph() {
  return (
    <Card className="col-span-4 bg-primary border-none">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-white">
          <span>Analytics</span>
          <select
            className="bg-transparent border border-tertiary rounded-md px-2 py-1 text-sm"
            defaultValue="2020"
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={true}
                vertical={false}
                stroke="#888888"
                opacity={0.2}
              />
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value / 1000}K`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (
                    active &&
                    payload &&
                    payload.length > 0 &&
                    payload[0]?.payload
                  ) {
                    const value = payload[0]?.value;
                    if (typeof value === "number") {
                      return (
                        <div className="bg-primary p-3 rounded-lg shadow-lg">
                          <p className="text-white mb-2">
                            {payload[0].payload.name} 2020
                          </p>
                          <p className="text-[#4338ca] font-bold">
                            ${value.toLocaleString()}
                          </p>
                        </div>
                      );
                    }
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="income"
                fill="#4338ca"
                radius={[4, 4, 0, 0]}
                barSize={8}
                name="Income"
              />
              <Bar
                dataKey="outcome"
                fill="#60a5fa"
                radius={[4, 4, 0, 0]}
                barSize={8}
                name="Outcome"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default AnalyticsGraph;
