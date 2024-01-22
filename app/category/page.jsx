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
    <div>
      <CategorySection />
    </div>
  );
};

export default CategoryPage1;
