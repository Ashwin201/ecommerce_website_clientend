"use client";
import { useSession } from "next-auth/react";
import Cart from "../../components/Cart";
import { redirect } from "next/navigation";

const CartPage = () => {
  const { data: session } = useSession();
  if (session?.user?.image) {
    // console.log("session is  active");
  } else {
    redirect("/signin");
  }
  return <Cart />;
};

export default CartPage;
