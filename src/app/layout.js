'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import './../styles/antd.css'
import Guard from "@/Containers/Guard";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "مسطورا",
//   description: "Developer : Ali Morteza Yalmaztakin",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body dir='rtl' className={`${inter.className}`}>
      <Guard>
      {children}
      </Guard>
    </body>
  </html>
  );
}
