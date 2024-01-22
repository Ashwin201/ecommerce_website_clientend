// "use client";
// import { redirect, usePathname } from "next/navigation";
import CategorySection from "../../components/CategortSection";
import React from "react";

const CategoryPage1 = () => {
  // const pathName = usePathname();
  // if (pathName === "/category") {
  //   redirect("/");
  // }
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[74vh]">
      <CategorySection />
    </div>
  );
};

export default CategoryPage1;
