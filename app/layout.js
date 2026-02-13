import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopInfoBar from "@/components/TopInfoBar";
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Occular",
  description: "Medical website for enhanced facility among patients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopInfoBar/>
        <HeaderBar/>

        {children}
        <Footer/>
      </body>
    </html>
  );
}
