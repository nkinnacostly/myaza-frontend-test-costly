"use client";
import React from "react";
import { H2, P } from "@/components/ui/typography";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Logo from "@/components/icons/logo.svg";

function LoginComponent() {
  return (
    <div className="flex flex-col items-center justify-center w-full border-2 border-red-500 h-full space-y-8">
      <div className="flex flex-col items-center justify-center w-full h-1/2 border-2 border-blue-500">
        <div className="flex flex-col items-center space-y-8 w-full">
          <div className="flex items-center justify-center">
            <svg
              width="108"
              height="32"
              viewBox="0 0 108 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100.027 13.4062V11.0956H99.3112V10.5843H101.319V11.0956H100.614V13.4062H100.027ZM101.61 13.4062V10.5843H102.178L103.235 11.9858H102.969L103.996 10.5843H104.564V13.4062H103.977V11.232L104.212 11.285L103.125 12.6865H103.049L102 11.285L102.197 11.232V13.4062H101.61Z"
                fill="white"
              />
              <g clipPath="url(#clip0_18_1340)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.8076 9.69258C24.0915 9.6459 24.3816 9.7372 24.5883 9.93813C26.9922 12.2756 28.3161 15.404 28.3161 18.7471C28.3161 25.5263 22.8011 31.0417 16.0222 31.0417C10.4147 31.0417 5.52293 27.2452 4.12635 21.8095C3.86171 20.7782 3.72754 19.7479 3.72754 18.7471C3.72754 16.7824 4.1865 14.8938 5.09168 13.1338C5.98249 11.4035 7.29237 9.88841 8.87986 8.75181C8.88908 8.7452 8.89848 8.73877 8.90793 8.73247C8.96645 8.69389 9.02893 8.64817 9.0951 8.59974L9.10188 8.59478C9.10861 8.58986 9.11533 8.58494 9.12206 8.58002C9.14851 8.56066 9.17499 8.54128 9.20162 8.52209C11.7258 6.71585 13.3111 3.91578 13.5535 0.838043C13.5774 0.534295 13.7518 0.26274 14.0181 0.114625C14.2845 -0.0334295 14.607 -0.0383404 14.8777 0.101529C17.987 1.70861 20.2697 4.57275 21.1402 7.95952C21.405 8.99063 21.5391 10.0209 21.5391 11.022C21.5391 11.5438 21.5051 12.0642 21.4375 12.5815C22.1156 11.8654 22.6919 11.0553 23.1457 10.1738C23.2776 9.91763 23.5232 9.73908 23.8076 9.69258ZM15.5519 22.5757C17.6299 22.5757 19.3145 20.8911 19.3145 18.813C19.3145 16.735 17.6299 15.0504 15.5519 15.0504C13.4738 15.0504 11.7892 16.735 11.7892 18.813C11.7892 20.8911 13.4738 22.5757 15.5519 22.5757Z"
                  fill="#6359E9"
                />
              </g>
              <path
                d="M43.1043 25.7257C44.0517 25.7257 44.8898 25.5526 45.6185 25.2064C46.3473 24.842 46.903 24.2955 47.2856 23.5667V25.3977H51.1116V10.4763H47.0123V19.1941C47.0123 20.0504 46.7572 20.7428 46.2471 21.2711C45.7369 21.7812 45.0811 22.0363 44.2794 22.0363C43.4778 22.0363 42.8219 21.7812 42.3118 21.2711C41.8016 20.7428 41.5466 20.0504 41.5466 19.1941V10.4763H37.4473V19.5221C37.4473 21.3804 37.9301 22.8835 38.8957 24.0313C39.8795 25.1609 41.2824 25.7257 43.1043 25.7257Z"
                fill="white"
              />
              <path
                d="M54.1077 9.1372H58.207V5.0379H54.1077V9.1372ZM54.1077 25.3977H58.207V10.4763H54.1077V25.3977Z"
                fill="white"
              />
              <path
                d="M63.0104 25.3977H67.1097V14.029H70.3072V10.4763H67.1097V10.2577C67.1097 8.92768 67.884 8.26268 69.4326 8.26268C69.6877 8.26268 69.9883 8.29001 70.3345 8.34467V4.8466C69.9154 4.75551 69.4326 4.70996 68.8861 4.70996C67.0277 4.70996 65.5793 5.19277 64.5408 6.15838C63.5205 7.12399 63.0104 8.49042 63.0104 10.2577V10.4763H60.4962V14.029H63.0104V25.3977Z"
                fill="white"
              />
              <path
                d="M72.4157 25.3977H76.515V17.3631C76.515 16.2517 76.8247 15.3955 77.4442 14.7942C78.0636 14.1748 78.8744 13.865 79.8764 13.865H81.1609V10.3123H80.2864C79.3754 10.3123 78.5647 10.4854 77.8541 10.8316C77.1618 11.1595 76.6243 11.7881 76.2417 12.7172V10.4763H72.4157V25.3977Z"
                fill="white"
              />
              <path
                d="M85.2805 31.4647C88.0133 31.4647 89.9901 29.9069 91.2108 26.7915L97.6057 10.4763H93.2058L89.6804 20.0686L86.155 10.4763H81.7551L87.6307 25.3977L87.3574 26.0263C87.1388 26.5182 86.8564 26.9555 86.5103 27.3381C86.1641 27.7207 85.5902 27.912 84.7885 27.912C84.1327 27.912 83.5132 27.8209 82.9302 27.6387V31.0001C83.2399 31.1641 83.5952 31.2825 83.996 31.3554C84.4151 31.4282 84.8432 31.4647 85.2805 31.4647Z"
                fill="white"
              />
              <defs>
                <clipPath id="clip0_18_1340">
                  <rect
                    width="31.0417"
                    height="31.0417"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col items-center space-y-3 text-white">
            <H2>Welcome back, Ali Riaz 🙇🏾‍♀️</H2>
            <P>Login to access your Uifry account</P>
          </div>
        </div>
        <div className="flex flex-col w-[60%] space-y-5 text-white">
          <div>
            <Label>Email</Label>
            <Input
              placeholder="E.g ali@gmail.com"
              className="mt-2 w-full h-12"
            />
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
      </div>
    </div>
  );
}

export default LoginComponent;
