"use client";
import { LiaSignInAltSolid } from "react-icons/lia";
import React, { useEffect, useRef, useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import toast from "react-hot-toast";
import { signOut, useSession } from "next-auth/react";
import profile from "../assets/profile.png.webp";
const Authenticate = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { status, data: session } = useSession();

  const popupRef = useRef(null);

  //code to off the popup when click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    if (!menuOpen) {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div>
      {status === "unauthenticated" ? (
        <Link
          href={"/signin"}
          aria-label="Link for SignIn"
          className=" flex items-center gap-1 hover:scale-[.98] text-sm sm:text-base py-1 px-2 sm:py-2 sm:px-3 rounded-md text-gray-900 dark:text-gray-200 bg-gray-200 dark:bg-gray-800
                  transition-all duration-300 cursor-pointer font-bold"
        >
          <LiaSignInAltSolid size={22} />{" "}
          <span className=" font-semibold text-sm flex ">Sign in</span>
        </Link>
      ) : (
        <>
          <div ref={popupRef} className=" relative  cursor-pointer">
            <Image
              onClick={() => setMenuOpen((prev) => !prev)}
              src={session?.user?.image || profile}
              width={40}
              height={40}
              alt="Profile Image"
              className={` w-8 h-8 sm:w-[40px] sm:h-[40px] rounded-full border-gray-400 border-2`}
            />
            {menuOpen && (
              <div
                ref={popupRef}
                className={` absolute top-14 right-0 w-auto  p-2 rounded-md shadow-md bg-[#f8f9fa]  dark:bg-gray-900  z-[100] gap-1   ${
                  menuOpen ? "flex flex-col " : "hidden"
                }`}
              >
                <div onClick={() => setMenuOpen((prev) => !prev)}>
                  <div className=" px-3 -mb-3 ">
                    <p className=" font-semibold text-lg cursor-pointer text-black dark:text-gray-200 ">
                      {session?.user?.name}
                    </p>
                    <p className=" mb-6 font-semibold text-sm text-gray-700 dark:text-gray-500 cursor-pointer line-clamp-1 ">
                      {session?.user?.email}
                    </p>
                  </div>
                  <ThemeSwitcher />
                </div>

                <div
                  onClick={() => {
                    signOut();
                  }}
                >
                  <div
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className=" flex items-center gap-2 hover:scale-[.98] py-2 px-3 font-bold  hover:rounded-md text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800
    transition-all duration-300 cursor-pointer"
                  >
                    <BiLogOutCircle size={24} />{" "}
                    <span className=" font-semibold text-base  ">Sign Out</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Authenticate;
