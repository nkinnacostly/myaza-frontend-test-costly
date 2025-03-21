import AuthLayoutRight from "@/features/auth/login/compoment/auth-layout-right";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 h-screen w-full">
      <div className="bg-primary overflow-hidden">{children}</div>
      <div className="bg-secondary ">
        <AuthLayoutRight />
      </div>
    </div>
  );
}

export default AuthLayout;
