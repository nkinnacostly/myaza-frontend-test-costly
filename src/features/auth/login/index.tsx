"use client";
import React from "react";
import { H2, P } from "@/components/ui/typography";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/components/icons/logo.svg";

function LoginComponent() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[480px] space-y-8">
      <div className="flex flex-col items-center space-y-8 w-full">
        <div className="flex items-center justify-center">
          <Logo className="w-[98px] h-[32px]" />
        </div>
        <div className="flex flex-col items-center space-y-3">
          <H2>Welcome back, Ali Riaz 🙇🏾‍♀️</H2>
          <P>Login to access your Uifry account</P>
        </div>
      </div>
      <div className="flex flex-col w-[60%] space-y-5">
        <div>
          <Label>Email</Label>
          <Input placeholder="E.g ali@gmail.com" className="mt-2 w-full h-12" />
        </div>
        <div>
          <Label>Password</Label>
          <Input placeholder="************" className="mt-2 w-full h-12" />
          <div className="flex justify-end mt-2">
            <Link
              href="/forgot-password"
              className="text-sm font-bold text-tertiary hover:text-tertiary/80 text-right"
            >
              I Forgot My Password!
            </Link>
          </div>
        </div>
        <div>
          <Button className="w-full bg-tertiary text-primary h-12">
            Login
          </Button>
        </div>
      </div>
      <div className="w-full relative">
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: -20, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8,
          }}
          className="absolute -right-5 top-0"
        >
          <Image
            src="/login-img.png"
            alt="login"
            width={720}
            height={200}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}

export default LoginComponent;
