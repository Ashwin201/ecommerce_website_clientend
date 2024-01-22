"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import successImg from "../../assets/order-confirmed.webp";
import { BiShoppingBag } from "react-icons/bi";
import { MdCelebration } from "react-icons/md";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/productSlice";
import { useRouter } from "next/navigation";
const SuccessPage = ({ searchParams }) => {
  const dispatch = useDispatch();
  const { success } = searchParams;
  const router = useRouter();
  console.log(success);
  useEffect(() => {
    try {
      if (success !== "true") {
        router.push("/");
      } else {
        dispatch(resetCart());
      }
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, [success]);

  return (
    <div>
      <div className=" flex flex-col justify-center items-center w-full min-h-[74vh] ">
        <Image
          src={successImg}
          alt="Empty Cart "
          className=" h-[350px] w-auto"
        />
        <div className=" mt-6">
          <h1 className=" font-bold text-2xl text-center sm:text-3xl bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 inline-block text-transparent bg-clip-text mb-6">
            Congratulations! Your order has been created successfully.
          </h1>
        </div>
        <Link
          href={"/"}
          aria-label="Home Link"
          className=" flex gap-2 items-center justify-center align-middle py-2  px-3 sm:px-4 text-gray-200 font-medium text-sm bg-gradient-to-r from-slate-700 via-purple-600 to-slate-700 
                rounded-md cursor-pointer 
             hover:scale-[.98] transition-all duration-300 "
        >
          <BiShoppingBag size={22} />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
