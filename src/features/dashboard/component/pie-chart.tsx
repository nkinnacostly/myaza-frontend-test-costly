"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ActivityData {
  name: string;
  value: number;
  color: string;
}

const data: ActivityData[] = [
  { name: "Daily payment", value: 55, color: "#6359E9" },
  { name: "Hobby", value: 20, color: "#64CFF6" },
  { name: "Empty", value: 25, color: "#3A3A5A" }, // This creates the empty space in the semi-circle
];

function PieChartGraph() {
  return (
    <div className="bg-primary rounded-2xl p-6 max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-white">Activity</h2>
        <select className="bg-transparent text-gray-400 border-tertiary border rounded-md px-2 py-1 cursor-pointer">
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="year">Year</option>
        </select>
      </div>

      <div className="relative h-[250px]">
        <div className="absolute left-10 bottom-1 flex flex-col items-center justify-center ">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#6359E9]"></div>
            <span className="text-white text-lg">Daily payment</span>
          </div>
          <span className="text-white ">55%</span>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="65%"
              startAngle={180}
              endAngle={0}
              innerRadius={90}
              outerRadius={120}
              paddingAngle={-2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  strokeWidth={0}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-4xl font-bold text-white">75%</span>
        </div>

        <div className="absolute right-16 bottom-1 flex flex-col items-center justify-center ">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#64CFF6]"></div>
            <span className="text-white text-lg">Hobby</span>
          </div>
          <div className="text-white flex items-center justify-center">20%</div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <Button variant="outline" className=" text-white  w-52 h-10">
          See All Activity
        </Button>
      </div>
    </div>
  );
}

export default PieChartGraph;
