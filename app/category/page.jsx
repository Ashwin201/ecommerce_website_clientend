"use client";
import { redirect, usePathname } from "next/navigation";
import React from "react";

const CategoryPage1 = () => {
  const pathName = usePathname();
  if (pathName === "/category") {
    redirect("/");
  }
  return <div></div>;
};

export default CategoryPage1;
