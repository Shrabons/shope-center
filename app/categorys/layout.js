import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import LoginUp from "@/components/LoginUp";
import Sidebar from "@/components/category/Sidebar";
import HeroCategroy from "@/components/header/HeroCategroy";
import { Suspense } from "react";

export const metadata = {
  title: "Shope Center | Category",
  description:
    "If your listing has been identified to be in the wrong category, Shopee will deboost the particular listing and auto-correct it within 3 days if you do not manually change it to its correct category.",
};

const CategoryLayout = ({ children }) => {
  return (
    <>
      <HeroCategroy />
      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <Sidebar />
          <Suspense fallback={<Loading />}>
            <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
              {children}
            </div>
          </Suspense>
        </section>
        <LoginUp />
      </main>
      <Footer />
    </>
  );
};

export default CategoryLayout;
