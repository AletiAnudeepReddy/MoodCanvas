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

  // Static routes that should NOT show navbar
  const hideNavbarRoutes = ['/auth']

  // All static top-level routes you DO want the navbar for
  const knownStaticRoutes = ['/about', '/generate', '/contact', '/']

  // Dynamic username route = /anything not in known static routes
  const isDynamicUsernameRoute =
    /^\/[^/]+$/.test(pathname) && !knownStaticRoutes.includes(pathname)

  const shouldHideNavbar =
    hideNavbarRoutes.includes(pathname) || isDynamicUsernameRoute

  return (
    <html lang="en">
      <body className="-z-10 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
        {!shouldHideNavbar && <Navbar />}
        {children}
      </body>
    </html>
  )
}
