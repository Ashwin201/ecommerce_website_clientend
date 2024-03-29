"use client";
import { useSession } from "next-auth/react";
import Cart from "../../components/Cart";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    router.push("/signin");
    return;
  }
  return <Cart />;
};

export default CartPage;
