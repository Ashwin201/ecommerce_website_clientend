"use client";
import { useSession } from "next-auth/react";
import Wishlist from "../../components/Wishlist";
import React from "react";
import { redirect } from "next/navigation";
const WishListPage = () => {
  const { data: session } = useSession();
  if (session?.user?.image) {
    console.log("session is  active");
  } else {
    redirect("/signin");
  }
  return (
    <div>
      <Wishlist />
    </div>
  );
};

export default WishListPage;
