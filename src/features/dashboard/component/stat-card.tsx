"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface StatCardProps {
  title: string;
  amount: number;
  percentageChange: number;
  icon: React.ReactNode;
  iconBgColor: string;
  className?: string;
}

export function StatCard({
  title,
  amount,
  percentageChange,
  iconBgColor,
  icon,
  className,
}: StatCardProps) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 3,
  }).format(amount);

  const isPositive = percentageChange >= 0;

  return (
    <div
      className={cn(
        "flex  gap-2 bg-primary rounded-2xl p-6 justify-between",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "rounded-md w-10 h-10 flex items-center justify-center",
            iconBgColor
          )}
        >
          {icon}
        </div>
        <div className="flex flex-col">
          <div className="text-gray-400 text-sm">{title}</div>
          <div className="text-3xl font-semibold text-white">
            {formattedAmount}
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end">
        <span
          className={cn(
            "px-2 py-1 rounded-lg text-sm",
            isPositive
              ? "text-green-500 bg-green-500/10"
              : "text-red-500 bg-red-500/10"
          )}
        >
          {isPositive ? "+" : "-"}
          {Math.abs(percentageChange)}%
        </span>
      </div>
    </div>
  );
}
