"use client";
import { useSession } from "next-auth/react";
import Wishlist from "../../components/Wishlist";
import React from "react";
import { useRouter } from "next/navigation";
const WishListPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    router.push("/signin");
    return;
  }
  return (
    <div>
      <Wishlist />
    </div>
  );
};

export default WishListPage;
