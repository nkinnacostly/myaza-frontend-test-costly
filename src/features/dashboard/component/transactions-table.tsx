"use client";

import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: number;
  status: "Deposited" | "Pending" | "Failed";
  logo: string;
}

const transactions: Transaction[] = [
  {
    id: "1",
    name: "Adobe After Effect",
    date: "Sat,20 Apr 2020",
    amount: 80.09,
    status: "Deposited",
    logo: "/adobe.svg",
  },
  {
    id: "2",
    name: "McDonald's",
    date: "Sat,20 Apr 2020",
    amount: 80.09,
    status: "Deposited",
    logo: "/mcdonalds.svg",
  },
  {
    id: "3",
    name: "Levi",
    date: "Sat,20 Apr 2020",
    amount: 80.09,
    status: "Deposited",
    logo: "/levi.svg",
  },
  // Add more transactions as needed
];

export function TransactionsTable() {
  return (
    <div className="rounded-lg bg-primary p-0.5 ">
      <Card className="border-none bg-transparent">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-normal text-white">
            Recent transactions
          </CardTitle>
          <Button
            variant={"link"}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            See All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="rounded-md">
            <Table>
              <TableHeader>
                <TableRow className="border-none hover:bg-transparent">
                  <TableHead className="text-gray-400 font-normal">
                    Name
                  </TableHead>
                  <TableHead className="text-gray-400 font-normal">
                    Date
                  </TableHead>
                  <TableHead className="text-gray-400 font-normal">
                    Amount
                  </TableHead>
                  <TableHead className="text-gray-400 font-normal">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow
                    key={transaction.id}
                    className="border-none hover:bg-[#282942] transition-colors"
                  >
                    <TableCell className="flex items-center gap-3 text-white">
                      <Avatar className="h-8 w-8 bg-white/10">
                        <Image
                          width={32}
                          height={32}
                          src={transaction.logo}
                          alt={transaction.name}
                          className="text-white"
                        />
                      </Avatar>
                      <span>{transaction.name}</span>
                    </TableCell>
                    <TableCell className="text-white">
                      {transaction.date}
                    </TableCell>
                    <TableCell className="text-white">
                      ${transaction.amount.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          transaction.status === "Deposited"
                            ? "bg-[#1c3238] text-[#4cb5ab]"
                            : transaction.status === "Pending"
                            ? "bg-yellow-900 text-yellow-500"
                            : "bg-red-900 text-red-500"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
