'use client'
import { usePathname } from 'next/navigation'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const pathname = usePathname()
  const hideNavbarRoutes = ['/auth']

  const shouldHideNavbar = hideNavbarRoutes.includes(pathname)
  return (
    <html lang="en">
      <body className="-z-10 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
        {!shouldHideNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
