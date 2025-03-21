import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Aza Front End Task",
  description: "My Aza Front End Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${karla.variable} antialiased`}>{children}</body>
    </html>
  );
}
