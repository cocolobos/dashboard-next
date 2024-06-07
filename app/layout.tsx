import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './../components/Navbar';
import Sidebar from './../components/Sidebar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard Next App",
  description: "Managment dashboard built with Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[300px]">
            <Sidebar />
          </div>
          <div className="w-full max-h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
