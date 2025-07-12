import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/index'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700"]
});

export const metadata: Metadata = {
  title: "Storage",
  description: "Storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className='w-full h-full'>
      <body
        className={`antialiased h-full w-full bg-[#a4b9d4] ${inter.variable}`}
      >
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
