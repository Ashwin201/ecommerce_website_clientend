"use client";
import Link from "next/link";
import Image from "next/image";
import errorimg from "../../assets/orderfailed.webp";
import { BiShoppingBag } from "react-icons/bi";
import { redirect } from "next/navigation";
import { useEffect } from "react";
const Error = ({ searchParams }) => {
  if (searchParams?.session_id) {
    console.log(">...");
  } else {
    redirect("/");
  }

  return (
    <div>
      <div className=" flex flex-col justify-center align-middle items-center my-8">
        <Image src={errorimg} alt="Empty Cart " className=" h-[350px] w-auto" />
        <div className=" mt-6">
          <h1 className=" font-bold text-2xl sm:text-3xl bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 inline-block text-transparent bg-clip-text mb-6">
            Order not processed! Please try again.
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

export default Error;
