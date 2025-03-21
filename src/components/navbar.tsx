import { Input } from "@/components/ui/input";
import { P } from "@/components/ui/typography";
import { H2 } from "@/components/ui/typography";
import { SearchIcon } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <div className=" flex items-center justify-between h-full">
      <div className="flex flex-col items-start space-y-3 text-white">
        <H2>Welcome Back, Ali, 👋</H2>
        <P>Here’s what’s happening with your store today.</P>
      </div>
      <div className="flex items-center gap-2  relative">
        <Input
          className="w-96 bg-primary border-none"
          placeholder="Search for anything"
        />
        <SearchIcon className="absolute right-2 text-white" size={18} />
      </div>
    </div>
  );
}

export default Navbar;
