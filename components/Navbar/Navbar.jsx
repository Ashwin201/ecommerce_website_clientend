"use client";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import logo from "../../assets/logo.webp";
import Image from "next/image";
import { GrSearch } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
import SearchItems from "./SearchItems/SearchItems";
import Authenticate from "../Authenticate";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { productData, favouriteData } = useSelector((state) => state.products);
  console.log(productData);
  const handleHeader = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeader);
  }, []);

  return (
    <>
      {/* <Toaster /> */}
      <div
        className={`${
          scrolled
            ? ` sticky top-0  transition-all bg-[#f8f9fa]  dark:bg-gray-950  duration-700   z-40  `
            : ` `
        }`}
      >
        <div className="bg-[#f8f9fa]  dark:bg-black  px-3 py-3   md:px-[50px] lg:px-[110px] xl:px-[150px]   ">
          <header
            className={`  font-medium items-center flex justify-between align-middle `}
          >
            <Link
              href="/"
              aria-label="HomePage Link"
              className=" flex gap-1 items-center"
            >
              <Image
                src={logo}
                className="w-[35px] sm:w-[43px] h-auto"
                alt="Logo"
              />
              <p className=" hidden min-[400px]:inline-block text-[18px] font-extrabold bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700  text-transparent bg-clip-text">
                shopEase
              </p>
            </Link>

            <div className="flex gap-2 sm:gap-4 items-center ">
              <div
                onClick={() => setShowSearch(true)}
                className=" flex items-center gap-2 hover:scale-[.98] 
                  transition-all duration-300 cursor-pointer mr-1"
              >
                <GrSearch size={23} />{" "}
                {/* <span className=" font-semibold text-base hidden lg:flex ">
                  Search
                </span> */}
              </div>

              <Link
                href={"/wishlist"}
                aria-label={"Cart page"}
                className={` relative flex items-center gap-2 hover:scale-[.98] py-2 px-3  -mx-2 transition-all duration-300 cursor-pointer`}
              >
                <FaRegHeart size={23} />
                {/* <span className=" font-semibold text-base  hidden lg:flex  ">
                  WishList
                </span> */}
                {favouriteData && (
                  <span className="absolute p-1 rounded-[50%] text-[10px] opacity-[3]  bg-green-600 text-white w-5 h-5 text-center  font-semibold  -top-1  -right-1">
                    {favouriteData.length}
                  </span>
                )}
              </Link>

              <Link
                href={"/cart"}
                aria-label={"Cart page"}
                className={` relative flex items-center gap-2 hover:scale-[.98] py-2 px-3   transition-all duration-300 cursor-pointer mr-2`}
              >
                <HiOutlineShoppingCart size={23} />{" "}
                {/* <span className=" font-semibold text-base  hidden lg:flex  ">
                  Cart
                </span> */}
                {productData && (
                  <span className="absolute p-1 rounded-[50%] text-[10px] opacity-[3]  bg-green-600 text-white w-5 h-5 text-center  font-semibold  -top-1  -right-1">
                    {productData.length}
                  </span>
                )}
              </Link>
              <Authenticate />
            </div>
          </header>
        </div>
      </div>
      {showSearch && (
        <SearchItems showSearch={showSearch} setShowSearch={setShowSearch} />
      )}
    </>
  );
};

export default Navbar;
// const [isLogin, setIsLogin] = useState();
// const router = useRouter();

// useEffect(()0 => {
//   setIsLogin(window.location.href.toString().includes("sign-in"));
//   setIsLogin(window.location.href.toString().includes("sign-up"));
// }, []);
