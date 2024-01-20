"use client";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.webp";
import login from "../assets/login.webp";
import { signIn, useSession } from "next-auth/react";

import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/productSlice";

const SignInpage = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { productData, favouriteData } = useSelector((state) => state.products);

  if (productData.length < 1 && favouriteData.length < 1) {
    dispatch(deleteUser);
  }
  return (
    <section className=" my-6 xl:my-10">
      <div className=" grid grid-cols-12 place-items-center gap-8 ">
        <div className=" col-span-12 xl:col-span-6">
          <Image
            src={login}
            className="w-auto h-auto"
            alt="Logo"
            property={true}
            loading="eager"
          />
        </div>

        <main className="flex items-center text-center xl:text-start  justify-center col-span-12  xl:col-span-6 ">
          <div className="">
            <Link
              href="/"
              aria-label="Homepage Link"
              className="flex   xl:justify-start  justify-center"
            >
              <span className="sr-only">Home</span>
              <Image src={logo} className="w-[50px] h-auto" alt="Logo" />
            </Link>

            <h1 className="mt-6 text-2xl font-bold bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 inline-block text-transparent bg-clip-text ">
              Welcome to shopEase 🦑
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500 font-medium">
              Access a comprehensive range of features by signing in, including
              the ability to explore product listings, add items to your cart,
              and proceed to checkout. Unlock additional functionalities for an
              enhanced user experience.
            </p>

            <div className="flex flex-col items-center   xl:items-start   gap-6  my-6">
              <div
                onClick={() => {
                  signIn("google");
                }}
                className=" flex gap-4 justify-center items-center sm:w-[300px] py-2 px-10 border-2 border-gray-400 rounded-lg cursor-pointer bg-slate-100 hover:bg-slate-200 transition-all duration-500"
              >
                <FcGoogle size={30} />{" "}
                <span className="font-medium text-black ">
                  Sign In with Google
                </span>
              </div>
              <div
                onClick={() => {
                  signIn("github");
                }}
                className="  flex gap-4 justify-center items-center text-black sm:w-[300px] py-2 px-10 border-2 border-gray-400 rounded-lg cursor-pointer bg-slate-100 hover:bg-slate-200 transition-all duration-500"
              >
                <BsGithub size={30} />{" "}
                <span className="font-medium  ">Sign In with Github</span>
              </div>
            </div>

            <div className="col-span-6">
              <p className="text-sm text-gray-500 font-medium">
                By creating an account, you agree to our
                <a href="#" className="text-gray-700 underline">
                  terms and conditions{" "}
                </a>
                and
                <a href="#" className="text-gray-700 underline">
                  privacy policy
                </a>
                .
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignInpage;
