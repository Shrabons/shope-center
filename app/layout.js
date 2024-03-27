import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/header/Navbar";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shope Center | Home",
  description:
    "If your listing has been identified to be in the wrong category, Shopee will deboost the particular listing and auto-correct it within 3 days if you do not manually change it to its correct category.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
